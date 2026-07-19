import Image from "next/image";
import {
  Smartphone,
  Radio,
  MessageCircle,
  Cloud,
  CheckCircle2,
  UserCheck,
  Mic,
  Hash,
  ArrowRight,
  Server,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const channels = [
  {
    id: "app",
    n: "01",
    name: "App",
    badge: "Celular · escritório ou campo",
    title: "Abrir relato no app",
    tagline: "Toque, fale, revise e envie",
    desc: "O colaborador logado grava por voz no SafeMine. A IA preenche o formulário; nome e matrícula vêm do perfil. Ideal com cobertura e quando precisa anexar foto ou revisar campos.",
    image: "/images/admin-phone.jpg",
    imageAlt: "Registro de relato no app SafeMine no celular",
    Icon: Smartphone,
    theme: {
      ring: "ring-orange-200/80",
      bar: "bg-gradient-to-r from-[#FF8A45] to-[#FF5E14]",
      iconBg: "bg-gradient-to-br from-[#FFB074] to-[#FF5E14]",
      soft: "bg-[#FFF4EC]",
      text: "text-[#E36B1E]",
      border: "border-orange-100",
      chip: "bg-orange-50 text-[#C2410C] border-orange-100",
      glow: "from-orange-400/20",
    },
    steps: [
      { Icon: Smartphone, t: "Abre o módulo" },
      { Icon: Mic, t: "Grava a voz" },
      { Icon: CheckCircle2, t: "Revisa e envia" },
      { Icon: Mail, t: "SSMA notificada" },
    ],
    points: [
      "6 módulos de segurança e operação",
      "Áudio + transcrição editáveis",
      "Anexos e histórico no app",
    ],
  },
  {
    id: "whatsapp",
    n: "02",
    name: "WhatsApp",
    badge: "Áudio no número oficial",
    title: "Abrir relato no WhatsApp",
    tagline: "Matrícula → SIM → áudio → nº SM",
    desc: "Sem instalar nada: manda mensagem no número da mina, confirma a matrícula e envia o áudio. O SafeMine registra e devolve o número do relato no chat — com e-mail para a SSMA.",
    image: null,
    Icon: MessageCircle,
    theme: {
      ring: "ring-emerald-200/80",
      bar: "bg-gradient-to-r from-emerald-400 to-emerald-600",
      iconBg: "bg-gradient-to-br from-emerald-400 to-emerald-700",
      soft: "bg-emerald-50",
      text: "text-emerald-700",
      border: "border-emerald-100",
      chip: "bg-emerald-50 text-emerald-800 border-emerald-100",
      glow: "from-emerald-400/20",
    },
    steps: [
      { Icon: MessageCircle, t: "Abre o chat" },
      { Icon: UserCheck, t: "Confirma matrícula" },
      { Icon: Mic, t: "Envia o áudio" },
      { Icon: Hash, t: "Recebe SM-…" },
    ],
    points: [
      "Identidade validada com SIM",
      "Transcrição e classificação por IA",
      "Resposta automática com o nº do registro",
    ],
  },
  {
    id: "radio",
    n: "03",
    name: "Rádio",
    badge: "PTT · servidor digital",
    title: "Abrir relato pelo rádio",
    tagline: "Fala no PTT · o sistema faz o resto",
    desc: "O áudio do rádio digital cai no servidor da operação. O SafeMine recebe a gravação, transcreve, gera o relato e notifica a SSMA — inclusive onde o celular é restrito.",
    image: "/images/field-radio.jpg",
    imageAlt: "Operador em mina a céu aberto falando no rádio digital",
    Icon: Radio,
    theme: {
      ring: "ring-slate-300/80",
      bar: "bg-gradient-to-r from-slate-500 to-slate-800",
      iconBg: "bg-gradient-to-br from-slate-500 to-slate-800",
      soft: "bg-slate-100",
      text: "text-slate-700",
      border: "border-slate-200",
      chip: "bg-slate-100 text-slate-800 border-slate-200",
      glow: "from-slate-400/20",
    },
    steps: [
      { Icon: Radio, t: "Fala no PTT" },
      { Icon: Server, t: "Servidor grava" },
      { Icon: Sparkles, t: "IA processa" },
      { Icon: ShieldCheck, t: "Relato no SafeMine" },
    ],
    points: [
      "Ingestão via API do servidor de rádio",
      "Mapeia unidade/rádio → matrícula",
      "Mesmo canal e e-mail da SSMA",
    ],
  },
];

export default function DualChannels() {
  return (
    <section
      id="canais"
      aria-labelledby="canais-title"
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      {/* bg */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(255,94,20,0.12),transparent),radial-gradient(ellipse_50%_40%_at_100%_50%,rgba(16,185,129,0.08),transparent),radial-gradient(ellipse_40%_30%_at_0%_80%,rgba(100,116,139,0.1),transparent),linear-gradient(180deg,#fff_0%,#F7F8FA_45%,#fff_100%)]"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-safemine-orange bg-white/80 border border-[#FFE4D0] px-3.5 py-1.5 rounded-full shadow-sm">
            <Cloud className="w-3.5 h-3.5" />
            Três formas · um sistema
          </span>
          <h2
            id="canais-title"
            className="mt-5 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-safemine-dark leading-[1.12]"
          >
            Como abrir um relato no{" "}
            <span className="gradient-text">SafeMine</span>
          </h2>
          <p className="mt-4 text-lg text-safemine-text-mid leading-relaxed max-w-2xl mx-auto">
            Escolha o canal que a operação já usa. App, WhatsApp ou rádio digital —
            a voz vira o mesmo registro estruturado, com o mesmo e-mail para a SSMA.
          </p>

          {/* quick pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {channels.map(({ id, name, Icon, theme }) => (
              <a
                key={id}
                href={`#canal-${id}`}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-md ${theme.chip}`}
              >
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-white ${theme.iconBg}`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </span>
                {name}
              </a>
            ))}
          </div>
        </div>

        {/* Three channel cards */}
        <div className="mt-14 grid lg:grid-cols-3 gap-6 lg:gap-5">
          {channels.map((ch, i) => {
            const { id, n, name, badge, title, tagline, desc, image, imageAlt, Icon, theme, steps, points } =
              ch;
            return (
              <article
                key={id}
                id={`canal-${id}`}
                className={`group relative flex flex-col rounded-[1.75rem] bg-white border border-safemine-border/70 shadow-[0_8px_32px_rgba(74,85,104,0.06)] overflow-hidden ring-1 ${theme.ring} animate-fade-up delay-${(i + 1) * 100} transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(74,85,104,0.12)] scroll-mt-24`}
              >
                {/* top accent */}
                <div className={`h-1.5 w-full ${theme.bar}`} />

                {/* visual header */}
                <div className="relative h-44 sm:h-48 overflow-hidden">
                  {image ? (
                    <>
                      <Image
                        src={image}
                        alt={imageAlt || title}
                        width={800}
                        height={480}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                    </>
                  ) : (
                    <div
                      className={`h-full w-full bg-gradient-to-br ${theme.iconBg} relative`}
                    >
                      <div
                        aria-hidden
                        className="absolute inset-0 opacity-30"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.35), transparent 50%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.15), transparent 45%)",
                        }}
                      />
                      {/* fake chat bubbles for WA */}
                      <div className="absolute inset-0 flex flex-col justify-end gap-2 p-5">
                        <div className="self-start max-w-[75%] rounded-2xl rounded-bl-md bg-white/20 backdrop-blur px-3 py-2 text-[11px] text-white/95 font-medium">
                          Digite sua matrícula…
                        </div>
                        <div className="self-end max-w-[70%] rounded-2xl rounded-br-md bg-white/95 px-3 py-2 text-[11px] text-emerald-800 font-semibold">
                          50349
                        </div>
                        <div className="self-start max-w-[80%] rounded-2xl rounded-bl-md bg-white/20 backdrop-blur px-3 py-2 text-[11px] text-white/95 font-medium">
                          Confirme com SIM · envie o áudio
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur px-2.5 py-1 text-[11px] font-bold text-safemine-dark shadow-sm">
                      <span className="text-safemine-muted font-semibold">{n}</span>
                      <span className="w-px h-3 bg-safemine-border" />
                      {name}
                    </span>
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl text-white shadow-lg ${theme.iconBg}`}
                    >
                      <Icon className="w-5 h-5" strokeWidth={2.25} />
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white text-sm font-semibold drop-shadow-sm leading-snug">
                      {tagline}
                    </p>
                    <p className="text-white/75 text-[11px] mt-0.5 font-medium">{badge}</p>
                  </div>
                </div>

                {/* body */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-xl font-bold text-safemine-dark tracking-tight">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-safemine-text-mid leading-relaxed">
                    {desc}
                  </p>

                  {/* mini steps */}
                  <div className={`mt-5 rounded-2xl ${theme.soft} border ${theme.border} p-3.5`}>
                    <p className={`text-[10px] font-bold uppercase tracking-wider ${theme.text} mb-2.5`}>
                      Fluxo em 4 passos
                    </p>
                    <ol className="grid grid-cols-2 gap-2">
                      {steps.map(({ Icon: StepIcon, t }, si) => (
                        <li
                          key={t}
                          className="flex items-center gap-2 rounded-xl bg-white/80 border border-white px-2.5 py-2 shadow-sm"
                        >
                          <span
                            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-white text-[10px] font-bold ${theme.iconBg}`}
                          >
                            {si + 1}
                          </span>
                          <span className="text-[11px] font-semibold text-safemine-dark leading-tight flex items-center gap-1">
                            <StepIcon className={`w-3 h-3 shrink-0 ${theme.text}`} />
                            {t}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <ul className="mt-4 space-y-2 flex-1">
                    {points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-safemine-dark">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${theme.text}`}
                        />
                        <span className="leading-snug">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        {/* Convergence */}
        <div
          id="whatsapp"
          className="mt-16 relative animate-fade-up delay-300 scroll-mt-24"
        >
          <div className="text-center mb-8">
            <p className="text-xs font-bold tracking-wider uppercase text-safemine-orange">
              Convergência
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-safemine-dark tracking-tight">
              Três entradas. Um SafeMine. Uma SSMA.
            </h3>
          </div>

          {/* flow diagram */}
          <div className="relative rounded-[2rem] border border-safemine-border/80 bg-white shadow-[0_16px_48px_rgba(74,85,104,0.08)] overflow-hidden">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,94,20,0.06),transparent_60%)]"
            />

            <div className="relative p-6 sm:p-8 lg:p-10">
              <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-4 items-center">
                {/* sources */}
                <div className="grid sm:grid-cols-3 gap-3">
                  {channels.map(({ id, name, Icon, theme, tagline }) => (
                    <div
                      key={id}
                      className={`rounded-2xl border ${theme.border} ${theme.soft} p-4 text-center`}
                    >
                      <span
                        className={`mx-auto flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-md ${theme.iconBg}`}
                      >
                        <Icon className="w-5 h-5" />
                      </span>
                      <p className="mt-3 text-sm font-bold text-safemine-dark">{name}</p>
                      <p className="mt-0.5 text-[11px] text-safemine-text-mid leading-snug">
                        {tagline}
                      </p>
                    </div>
                  ))}
                </div>

                {/* arrow + cloud */}
                <div className="flex lg:flex-col items-center justify-center gap-2 py-2">
                  <ArrowRight className="w-6 h-6 text-safemine-orange rotate-90 lg:rotate-0" />
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF8A45] to-[#FF5E14] text-white shadow-[0_12px_28px_rgba(255,94,20,0.35)]">
                    <Cloud className="w-7 h-7" />
                  </div>
                  <p className="text-xs font-bold text-safemine-dark whitespace-nowrap">
                    SafeMine
                  </p>
                  <ArrowRight className="w-6 h-6 text-safemine-orange rotate-90 lg:rotate-0" />
                </div>

                {/* outcomes */}
                <div className="space-y-3">
                  {[
                    {
                      Icon: Hash,
                      title: "Registro com nº SM-…",
                      desc: "Salvo na base com canal App, WhatsApp ou Rádio",
                    },
                    {
                      Icon: Mail,
                      title: "E-mail HTML para a SSMA",
                      desc: "Template estruturado, no horário de Brasília",
                    },
                    {
                      Icon: ShieldCheck,
                      title: "Tratativa unificada",
                      desc: "Consulta e análise no mesmo painel",
                    },
                  ].map(({ Icon, title, desc }) => (
                    <div
                      key={title}
                      className="flex items-start gap-3 rounded-2xl border border-safemine-border/80 bg-safemine-bg/80 px-4 py-3.5"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-safemine-orange-soft text-safemine-orange">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-safemine-dark">{title}</p>
                        <p className="text-xs text-safemine-text-mid mt-0.5">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* bottom diagram image */}
              <div className="mt-8 rounded-2xl overflow-hidden border border-safemine-border/60">
                <Image
                  src="/images/converge-system.jpg"
                  alt="Diagrama: app, WhatsApp e rádio convergem no SafeMine"
                  width={1280}
                  height={720}
                  className="w-full h-auto object-cover max-h-56 object-center"
                />
              </div>
            </div>
          </div>

          {/* when to use */}
          <div className="mt-8 grid sm:grid-cols-3 gap-3">
            {[
              {
                name: "Use o App",
                when: "quando há cobertura e precisa revisar campos ou anexar fotos.",
                theme: channels[0].theme,
                Icon: Smartphone,
              },
              {
                name: "Use o WhatsApp",
                when: "quando o celular pessoal é o canal mais rápido e familiar.",
                theme: channels[1].theme,
                Icon: MessageCircle,
              },
              {
                name: "Use o Rádio",
                when: "na lavra, com PTT, ou onde o celular é restrito.",
                theme: channels[2].theme,
                Icon: Radio,
              },
            ].map(({ name, when, theme, Icon }) => (
              <div
                key={name}
                className={`rounded-2xl border ${theme.border} ${theme.soft} px-4 py-4`}
              >
                <div className="flex items-center gap-2">
                  <Icon className={`w-4 h-4 ${theme.text}`} />
                  <p className={`text-sm font-bold ${theme.text}`}>{name}</p>
                </div>
                <p className="mt-1.5 text-sm text-safemine-text-mid leading-relaxed">
                  {when}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
