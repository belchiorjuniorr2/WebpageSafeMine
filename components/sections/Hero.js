import { Mic, ArrowRight, Sparkles } from "lucide-react";
import Placeholder from "../Placeholder";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(255,94,20,0.12),transparent_60%)]"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-safemine-orange bg-safemine-orange/10 px-3 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              Voz-primeiro para operações de mineração
            </span>

            <h1
              id="hero-title"
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-safemine-text leading-[1.05]"
            >
              Registre ocorrências de segurança{" "}
              <span className="text-safemine-orange">falando</span>, não digitando.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-safemine-text-mid max-w-xl leading-relaxed">
              O SafeMine ouve seu relato em campo, transcreve com IA e preenche
              o formulário automaticamente. Menos burocracia, mais segurança.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 bg-safemine-orange text-white text-base font-semibold px-6 py-3.5 rounded-lg hover:bg-safemine-orange/90 transition-colors shadow-sm"
              >
                Solicitar demo
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#how"
                className="inline-flex items-center justify-center gap-2 bg-white text-safemine-text text-base font-semibold px-6 py-3.5 rounded-lg border border-safemine-border hover:border-safemine-text/30 transition-colors"
              >
                Ver como funciona
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-sm text-safemine-muted">
              <div className="flex -space-x-2" aria-hidden="true">
                <span className="w-8 h-8 rounded-full bg-mod-safety border-2 border-white" />
                <span className="w-8 h-8 rounded-full bg-mod-env border-2 border-white" />
                <span className="w-8 h-8 rounded-full bg-mod-vehicle border-2 border-white" />
                <span className="w-8 h-8 rounded-full bg-mod-shift border-2 border-white" />
              </div>
              <span>6 módulos de relato cobrindo toda a operação</span>
            </div>
          </div>

          <div className="relative">
            <div className="mx-auto w-full max-w-[280px] sm:max-w-xs">
              <div className="rounded-[2.5rem] border-[10px] border-safemine-dark bg-safemine-dark shadow-2xl">
                <Placeholder
                  label="App gravando voz"
                  aspect="9/19.5"
                  className="rounded-[1.5rem] border-0 bg-white"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-safemine-orange text-white px-4 py-2.5 rounded-full shadow-lg text-sm font-semibold">
                <Mic className="w-4 h-4" aria-hidden="true" />
                Gravando…
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
