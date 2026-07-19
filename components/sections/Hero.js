import Image from "next/image";
import { Mic, Brain, CheckCircle2, ArrowRight, Sparkles, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(255,94,20,0.14),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(255,138,69,0.08),transparent_50%)]"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-18 lg:pt-22 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-safemine-orange bg-safemine-orange-soft px-3 py-1.5 rounded-full border border-[#FFE4D0]">
              <Mic className="w-3.5 h-3.5" aria-hidden="true" />
              App · WhatsApp · Mina a céu aberto
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
              registros estruturados de segurança, ambiental, ergonomia, veículo, turno e inspeção —
              pelo <strong className="text-safemine-dark">app</strong> ou pelo{" "}
              <strong className="text-safemine-dark">WhatsApp</strong>, com transcrição inteligente e
              e-mail automático para a SSMA.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#demo"
                className="btn-primary inline-flex items-center justify-center gap-2 bg-safemine-orange text-white text-base font-semibold px-6 py-3.5 rounded-xl shadow-[0_8px_24px_rgba(255,94,20,0.3)]"
              >
                Solicitar demo
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#whatsapp"
                className="inline-flex items-center justify-center gap-2 bg-white text-safemine-dark text-base font-semibold px-6 py-3.5 rounded-xl border border-safemine-border hover:border-emerald-400/50 hover:bg-emerald-50/50 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                Ver WhatsApp
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-safemine-muted">
              <li className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-safemine-orange" /> 6 módulos de relato
              </li>
              <li className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-safemine-orange" /> App + WhatsApp
              </li>
              <li className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-safemine-orange" /> E-mail para a SSMA
              </li>
            </ul>
          </div>

          <div className="relative animate-fade-up delay-200">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-safemine-orange/20 via-transparent to-safemine-orange/5 blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border border-safemine-border/70 shadow-[0_24px_60px_rgba(74,85,104,0.12)] group">
              <Image
                src="/images/hero.jpg"
                alt="Operador em mina a céu aberto registrando relato de segurança por voz no celular"
                width={1200}
                height={675}
                className="w-full h-auto object-cover img-zoom"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-5 sm:p-6">
                <p className="text-white text-sm font-semibold flex items-center gap-2">
                  <span className="inline-flex w-2 h-2 rounded-full bg-safemine-orange animate-pulse-soft" />
                  Relato por voz · campo → SSMA em segundos
                </p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                { Icon: Mic, label: "Fala o relato" },
                { Icon: Brain, label: "IA preenche" },
                { Icon: CheckCircle2, label: "Envia e notifica" },
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
