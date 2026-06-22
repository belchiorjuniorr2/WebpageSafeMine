import { Radio, Brain, CheckCircle2, ArrowRight, ArrowDown, AudioLines } from "lucide-react";

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
              <Radio className="w-3.5 h-3.5" aria-hidden="true" />
              O rádio que sua operação já usa
            </span>

            <h1
              id="hero-title"
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-safemine-text leading-[1.05]"
            >
              Do rádio do operador{" "}
              <span className="text-safemine-orange">
                direto para o sistema que você já usa.
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-safemine-text-mid max-w-xl leading-relaxed">
              O operador fala no rádio — sem app, sem papel, sem mudar a rotina.
              Um agente de IA transcreve, estrutura e entrega o relato pronto
              para tratativa no seu sistema. Em uma mineradora de grande porte,
              cada relato saiu de{" "}
              <strong className="text-safemine-text">30 minutos para 30 segundos</strong>.
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

            <p className="mt-6 text-sm text-safemine-muted">
              Integra com o sistema de gestão que sua operação já usa.
            </p>
          </div>

          <div className="relative">
            <RadioFlow />
          </div>
        </div>
      </div>
    </section>
  );
}

function RadioFlow() {
  const steps = [
    {
      Icon: Radio,
      label: "Operador fala no rádio",
      sub: "Sem app, sem papel — o rádio digital que já está na operação.",
    },
    {
      Icon: Brain,
      label: "Agente de IA processa",
      sub: "Transcreve, estrutura e classifica como um especialista de segurança.",
    },
    {
      Icon: CheckCircle2,
      label: "Relato pronto no seu sistema",
      sub: "Entregue para tratativa — em segundos, sem repasse manual.",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-sm">
      <div className="rounded-3xl border border-safemine-border/60 bg-white shadow-2xl p-5 sm:p-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-safemine-orange">
          <AudioLines className="w-4 h-4" aria-hidden="true" />
          No ar — transmissão capturada
        </div>

        <ol className="mt-4 space-y-3">
          {steps.map(({ Icon, label, sub }, i) => (
            <li key={label}>
              <div className="flex gap-4 items-start rounded-2xl bg-safemine-bg p-4">
                <div
                  className="flex items-center justify-center w-11 h-11 rounded-xl bg-safemine-orange/10 text-safemine-orange shrink-0"
                  aria-hidden="true"
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-safemine-text leading-snug">
                    {label}
                  </p>
                  <p className="mt-1 text-sm text-safemine-text-mid leading-relaxed">
                    {sub}
                  </p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="flex justify-center py-1" aria-hidden="true">
                  <ArrowDown className="w-4 h-4 text-safemine-muted" />
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
