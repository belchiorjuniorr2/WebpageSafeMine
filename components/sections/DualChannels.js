import Image from "next/image";
import {
  Smartphone,
  Radio,
  MessageCircle,
  Cloud,
  ArrowDown,
  CheckCircle2,
  UserCheck,
  Mic,
  Hash,
} from "lucide-react";

const channels = [
  {
    id: "app",
    badge: "Canal 1 · App",
    Icon: Smartphone,
    title: "No app, pelo celular",
    desc: "No escritório ou no campo com cobertura: grava no SafeMine, confere a transcrição e envia. Perfil e matrícula já vêm do colaborador.",
    image: "/images/admin-phone.jpg",
    alt: "Profissional registrando relato no app SafeMine no celular",
    points: [
      "6 módulos de relato por voz",
      "Áudio + texto revisáveis antes do envio",
      "E-mail HTML para a SSMA na hora",
    ],
    accent: "from-safemine-orange/90 to-orange-600",
  },
  {
    id: "whatsapp",
    badge: "Canal 2 · WhatsApp",
    Icon: MessageCircle,
    title: "Pelo WhatsApp, com áudio",
    desc: "O colaborador manda áudio para o número oficial da mina. A IA pede a matrícula, confirma a identidade, transcreve e registra — e devolve o número do relato.",
    image: null,
    visual: "whatsapp",
    alt: "Fluxo de relato por WhatsApp no SafeMine",
    points: [
      "Confirma matrícula com SIM antes de abrir o relato",
      "Áudio de voz → transcrição + registro no sistema",
      "Resposta automática com nº SM-AAAA-#####",
    ],
    accent: "from-emerald-500 to-emerald-700",
  },
  {
    id: "radio",
    badge: "Canal 3 · Rádio",
    Icon: Radio,
    title: "No campo, pelo rádio digital",
    desc: "O PTT grava no servidor do rádio. O SafeMine busca o áudio, transcreve com IA e gera o mesmo relato estruturado — sem o operador digitar nada.",
    image: "/images/field-radio.jpg",
    alt: "Operador em mina a céu aberto fazendo relato pelo rádio",
    points: [
      "Áudio do servidor do rádio → STT → registro",
      "Mapeia rádio/unidade para matrícula do colaborador",
      "Mesmo painel, nº SM-… e e-mail da SSMA",
    ],
    accent: "from-slate-700 to-slate-900",
  },
];

const waSteps = [
  { Icon: MessageCircle, title: "Abre o WhatsApp", desc: "Número oficial da mina" },
  { Icon: UserCheck, title: "Confirma matrícula", desc: "Identidade validada com SIM" },
  { Icon: Mic, title: "Envia o áudio", desc: "IA transcreve e classifica" },
  { Icon: Hash, title: "Recebe o nº", desc: "SM-2026-xxxxx no chat" },
];

export default function DualChannels() {
  return (
    <section
      id="canais"
      aria-labelledby="canais-title"
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(255,94,20,0.08),transparent_55%),linear-gradient(180deg,#fff_0%,#F7F8FA_40%,#fff_100%)]"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <span className="text-xs font-semibold tracking-wider uppercase text-safemine-orange">
            Três canais · um sistema
          </span>
          <h2
            id="canais-title"
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-safemine-dark"
          >
            App, WhatsApp ou rádio.{" "}
            <span className="gradient-text">Tudo no SafeMine.</span>
          </h2>
          <p className="mt-4 text-lg text-safemine-text-mid leading-relaxed">
            Quem está no adm grava no app. Quem está com o chip manda áudio no WhatsApp.
            Quem está na lavra fala no rádio. Os três fluxos caem no mesmo sistema — mesma
            estrutura, mesmo e-mail e mesma tratativa da SSMA.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {channels.map(({ id, badge, Icon, title, desc, image, visual, alt, points, accent }, i) => (
            <article
              key={id}
              className={`card-hover group flex flex-col rounded-3xl bg-white border border-safemine-border/80 shadow-[0_8px_28px_rgba(74,85,104,0.06)] overflow-hidden animate-fade-up delay-${(i + 1) * 100}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {image ? (
                  <Image
                    src={image}
                    alt={alt}
                    width={1280}
                    height={720}
                    className="h-full w-full object-cover img-zoom"
                  />
                ) : (
                  <div
                    className={`h-full w-full bg-gradient-to-br ${accent} flex flex-col items-center justify-center gap-3 p-6`}
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur border border-white/25">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-white text-sm font-semibold text-center leading-snug max-w-[14rem]">
                      Áudio no WhatsApp → matrícula → registro no sistema
                    </p>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />
                <span className="absolute left-4 bottom-4 inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur px-3 py-1.5 text-xs font-semibold text-safemine-dark shadow-sm">
                  <Icon className="w-3.5 h-3.5 text-safemine-orange" />
                  {badge}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-xl sm:text-2xl font-bold text-safemine-dark tracking-tight">
                  {title}
                </h3>
                <p className="mt-2.5 text-safemine-text-mid leading-relaxed text-[15px]">{desc}</p>
                <ul className="mt-5 space-y-2">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-safemine-dark">
                      <CheckCircle2 className="w-4 h-4 text-safemine-orange shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* WhatsApp flow detail */}
        <div
          id="whatsapp"
          className="mt-14 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50 via-white to-white p-6 sm:p-8 shadow-[0_8px_28px_rgba(16,185,129,0.08)] animate-fade-up delay-300"
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="lg:max-w-sm shrink-0">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-emerald-700 bg-emerald-100/80 px-3 py-1.5 rounded-full">
                <MessageCircle className="w-3.5 h-3.5" />
                Novo · WhatsApp
              </span>
              <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-safemine-dark tracking-tight">
                Enviar relato pelo WhatsApp
              </h3>
              <p className="mt-2 text-safemine-text-mid leading-relaxed">
                Sem instalar app extra: o colaborador confirma a matrícula no chat, grava o áudio
                e recebe o número do registro no SafeMine. A SSMA é notificada por e-mail HTML —
                igual ao app.
              </p>
            </div>
            <ol className="flex-1 grid sm:grid-cols-2 gap-3">
              {waSteps.map(({ Icon, title, desc }, i) => (
                <li
                  key={title}
                  className="flex items-start gap-3 rounded-2xl bg-white border border-emerald-100 px-4 py-3.5 shadow-sm"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 font-bold text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <Icon className="w-3.5 h-3.5 text-emerald-600" />
                      <p className="text-sm font-semibold text-safemine-dark">{title}</p>
                    </div>
                    <p className="mt-0.5 text-xs text-safemine-text-mid">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center animate-fade-up delay-300">
          <div className="flex items-center gap-3 text-safemine-orange">
            <span className="hidden sm:block h-px w-16 bg-gradient-to-r from-transparent to-safemine-orange/50" />
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-safemine-orange-soft border border-[#FFE4D0]">
              <ArrowDown className="w-5 h-5 animate-float" />
            </div>
            <span className="hidden sm:block h-px w-16 bg-gradient-to-l from-transparent to-safemine-orange/50" />
          </div>
          <p className="mt-3 text-sm font-semibold text-safemine-dark">
            Os três canais convergem no mesmo sistema
          </p>
        </div>

        <div className="mt-8 relative animate-fade-up delay-400">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-safemine-orange/15 via-transparent to-emerald-500/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-safemine-border/80 bg-white shadow-[0_20px_50px_rgba(74,85,104,0.1)]">
            <Image
              src="/images/converge-system.jpg"
              alt="Diagrama: app, WhatsApp e rádio enviam áudio para a nuvem SafeMine e caem no mesmo painel da SSMA"
              width={1280}
              height={720}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { Icon: Smartphone, title: "App", desc: "Celular · 6 módulos" },
              { Icon: MessageCircle, title: "WhatsApp", desc: "Áudio + matrícula" },
              { Icon: Radio, title: "Rádio", desc: "Voz na operação" },
              { Icon: Cloud, title: "Um SafeMine", desc: "Registro + e-mail SSMA" },
            ].map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="flex items-center gap-3 rounded-2xl bg-white border border-safemine-border/80 px-4 py-3.5 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-safemine-orange-soft text-safemine-orange">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-safemine-dark">{title}</p>
                  <p className="text-xs text-safemine-text-mid">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
