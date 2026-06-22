import { Resend } from "resend";

export const runtime = "nodejs";

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function validate(data) {
  const errors = {};
  const get = (k) => (typeof data?.[k] === "string" ? data[k].trim() : "");

  if (!get("nome")) errors.nome = "Informe seu nome.";
  if (!get("empresa")) errors.empresa = "Informe a empresa.";
  if (!get("cargo")) errors.cargo = "Informe seu cargo.";

  const email = get("email");
  if (!email) {
    errors.email = "Informe um email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Email inválido.";
  }

  const digits = get("telefone").replace(/\D/g, "");
  if (!digits) {
    errors.telefone = "Informe um telefone.";
  } else if (digits.length < 10) {
    errors.telefone = "Telefone deve ter pelo menos 10 dígitos.";
  }

  if (get("nome").length > 200) errors.nome = "Nome muito longo.";
  if (get("empresa").length > 200) errors.empresa = "Nome de empresa muito longo.";
  if (get("mensagem").length > 4000)
    errors.mensagem = "Mensagem muito longa (máx. 4000 caracteres).";

  return errors;
}

// TODO: rate-limit (ex: @upstash/ratelimit) antes do lançamento público.
export async function POST(request) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return Response.json(
      { ok: false, message: "Payload inválido." },
      { status: 400 }
    );
  }

  const errors = validate(payload);
  if (Object.keys(errors).length > 0) {
    return Response.json({ ok: false, errors }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_EMAIL_TO;
  const from = process.env.LEAD_EMAIL_FROM;

  if (!apiKey || !to || !from) {
    console.error(
      "[lead] Missing env vars: RESEND_API_KEY / LEAD_EMAIL_TO / LEAD_EMAIL_FROM"
    );
    return Response.json(
      {
        ok: false,
        message:
          "Configuração de email indisponível. Tente novamente mais tarde.",
      },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const canalLabels = {
    radio_digital: "Rádio digital",
    radio_analogico: "Rádio analógico",
    celular_app: "Celular / app",
    nao_sei: "Não sei",
  };

  const rows = [
    ["Nome", payload.nome],
    ["Empresa", payload.empresa],
    ["Cargo", payload.cargo],
    ["Email", payload.email],
    ["Telefone", payload.telefone],
    ["Canal em campo", canalLabels[payload.canal] || "—"],
    ["Mensagem", payload.mensagem || "—"],
  ]
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;color:#808184;font-size:13px;vertical-align:top;">${escapeHtml(
          k
        )}</td><td style="padding:6px 12px;color:#1a1a1a;font-size:14px;white-space:pre-wrap;">${escapeHtml(
          v
        )}</td></tr>`
    )
    .join("");

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#1a1a1a;">
      <div style="display:inline-block;background:#FF5E14;color:#fff;font-size:12px;font-weight:600;padding:4px 10px;border-radius:999px;letter-spacing:0.05em;text-transform:uppercase;">SafeMine</div>
      <h2 style="margin:16px 0 4px;font-size:20px;">Nova solicitação de demo</h2>
      <p style="margin:0 0 20px;color:#4a4a4a;font-size:14px;">Recebida em ${new Date().toLocaleString(
        "pt-BR",
        { timeZone: "America/Sao_Paulo" }
      )} (Brasília)</p>
      <table style="border-collapse:collapse;width:100%;background:#f7f7f8;border-radius:12px;overflow:hidden;">${rows}</table>
    </div>
  `;

  try {
    await resend.emails.send({
      from,
      to,
      replyTo: payload.email,
      subject: `Novo lead SafeMine — ${payload.empresa}`,
      html,
    });
  } catch (err) {
    console.error("[lead] Resend send failed:", err);
    return Response.json(
      { ok: false, message: "Falha ao enviar email. Tente novamente." },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
