import Image from "next/image";
import {
  Mic,
  Brain,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Smartphone,
  MessageCircle,
  Radio,
} from "lucide-react";

const channels = [
  {
    href: "#canal-app",
    Icon: Smartphone,
    label: "App",
    sub: "Celular",
    className:
      "border-orange-200 bg-orange-50/80 text-[#C2410C] hover:border-orange-300 hover:bg-orange-50",
    iconClass: "bg-gradient-to-br from-[#FFB074] to-[#FF5E14] text-white",
  },
  {
    href: "#canal-whatsapp",
    Icon: MessageCircle,
    label: "WhatsApp",
    sub: "Áudio",
    className:
      "border-emerald-200 bg-emerald-50/80 text-emerald-800 hover:border-emerald-300 hover:bg-emerald-50",
    iconClass: "bg-gradient-to-br from-emerald-400 to-emerald-700 text-white",
  },
  {
    href: "#canal-radio",
    Icon: Radio,
    label: "Rádio",
    sub: "PTT digital",
    className:
      "border-slate-200 bg-slate-100/80 text-slate-800 hover:border-slate-300 hover:bg-slate-100",
    iconClass: "bg-gradient-to-br from-slate-500 to-slate-800 text-white",
  },
];

export default function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(255,94,20,0.14),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.08),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(100,116,139,0.08),transparent_45%)]"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-18 lg:pt-22 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-safemine-orange bg-safemine-orange-soft px-3 py-1.5 rounded-full border border-[#FFE4D0]">
              <Mic className="w-3.5 h-3.5" aria-hidden="true" />
              App · WhatsApp · Rádio · Mina a céu aberto
            </span>

            <h1
              id="hero-title"
              className="mt-6 text-4xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight text-safemine-dark leading-[1.08]"
            >
              O operador fala.{" "}
              <span className="gradient-text">A IA preenche o relato.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-safemine-text-mid max-w-xl leading-relaxed">
              O <strong className="text-safemine-dark">SafeMine</strong> transforma a voz do campo em
              registros estruturados — pelo <strong className="text-safemine-dark">app</strong>,{" "}
              <strong className="text-safemine-dark">WhatsApp</strong> ou{" "}
              <strong className="text-safemine-dark">rádio digital</strong> — com transcrição
              inteligente e e-mail automático para a SSMA.
            </p>

            {/* 3 channel chips */}
            <div className="mt-7 grid grid-cols-3 gap-2.5 max-w-md">
              {channels.map(({ href, Icon, label, sub, className, iconClass }) => (
                <a
                  key={label}
                  href={href}
                  className={`rounded-2xl border px-2.5 py-3 text-center transition-all hover:-translate-y-0.5 hover:shadow-md ${className}`}
                >
                  <span
                    className={`mx-auto flex h-9 w-9 items-center justify-center rounded-xl shadow-sm ${iconClass}`}
                  >
                    <Icon className="w-4 h-4" />
                  </span>
                  <p className="mt-2 text-xs font-bold leading-tight">{label}</p>
                  <p className="text-[10px] font-medium opacity-70 mt-0.5">{sub}</p>
                </a>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#demo"
                className="btn-primary inline-flex items-center justify-center gap-2 bg-safemine-orange text-white text-base font-semibold px-6 py-3.5 rounded-xl shadow-[0_8px_24px_rgba(255,94,20,0.3)]"
              >
                Solicitar demo
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#canais"
                className="inline-flex items-center justify-center gap-2 bg-white text-safemine-dark text-base font-semibold px-6 py-3.5 rounded-xl border border-safemine-border hover:border-safemine-orange/40 hover:bg-safemine-orange-soft/40 transition-all"
              >
                Ver as 3 formas
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-safemine-muted">
              <li className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-safemine-orange" /> 6 módulos de relato
              </li>
              <li className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-safemine-orange" /> App · WhatsApp · Rádio
              </li>
              <li className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-safemine-orange" /> E-mail para a SSMA
              </li>
            </ul>
          </div>

          <div className="relative animate-fade-up delay-200">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-safemine-orange/20 via-emerald-500/10 to-slate-400/10 blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border border-safemine-border/70 shadow-[0_24px_60px_rgba(74,85,104,0.12)] group">
              <Image
                src="/images/hero.jpg"
                alt="Operador em mina a céu aberto registrando relato de segurança por voz"
                width={1200}
                height={675}
                className="w-full h-auto object-cover img-zoom"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5 sm:p-6">
                <p className="text-white text-sm font-semibold flex items-center gap-2">
                  <span className="inline-flex w-2 h-2 rounded-full bg-safemine-orange animate-pulse-soft" />
                  Voz do campo → SafeMine → SSMA
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {["App", "WhatsApp", "Rádio"].map((c) => (
                    <span
                      key={c}
                      className="rounded-full bg-white/15 backdrop-blur border border-white/20 px-2.5 py-0.5 text-[11px] font-semibold text-white"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                { Icon: Mic, label: "Fala o relato" },
                { Icon: Brain, label: "IA preenche" },
                { Icon: CheckCircle2, label: "SSMA recebe" },
              ].map(({ Icon, label }, i) => (
                <div
                  key={label}
                  className={`rounded-2xl bg-white border border-safemine-border/70 p-3 text-center shadow-sm animate-fade-up delay-${(i + 3) * 100}`}
                >
                  <Icon className="w-5 h-5 text-safemine-orange mx-auto" />
                  <p className="mt-1.5 text-[11px] sm:text-xs font-semibold text-safemine-dark leading-tight">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
