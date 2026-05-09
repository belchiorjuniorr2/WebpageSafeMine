import { Mic, Sparkles, CheckCircle2, BarChart3 } from "lucide-react";
import Placeholder from "../Placeholder";

const steps = [
  {
    n: "01",
    title: "Toque e fale",
    desc: "Descreva a ocorrência em linguagem natural, em português, mesmo com EPI e ruído de campo.",
    Icon: Mic,
  },
  {
    n: "02",
    title: "IA preenche o formulário",
    desc: "Claude Haiku 4.5 transcreve a fala e estrutura todos os campos automaticamente.",
    Icon: Sparkles,
  },
  {
    n: "03",
    title: "Você revisa e envia",
    desc: "Confere os dados, anexa fotos como evidência e finaliza o registro em segundos.",
    Icon: CheckCircle2,
  },
  {
    n: "04",
    title: "Gestão acompanha em tempo real",
    desc: "Dashboard centralizado para auditoria, conformidade e análise de tendências.",
    Icon: BarChart3,
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      aria-labelledby="how-title"
      className="py-20 lg:py-28"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-wider uppercase text-safemine-orange">
            Como funciona
          </span>
          <h2
            id="how-title"
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-safemine-text"
          >
            Três toques. Um relato.
          </h2>
          <p className="mt-4 text-lg text-safemine-text-mid">
            Do campo para o sistema sem digitar nada — a IA cuida do
            preenchimento, você cuida da operação.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-12 items-start">
          <ol className="space-y-6">
            {steps.map(({ n, title, desc, Icon }) => (
              <li
                key={n}
                className="flex gap-5 bg-white rounded-2xl p-5 border border-safemine-border/60"
              >
                <div className="flex flex-col items-center shrink-0">
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-xl bg-safemine-orange/10 text-safemine-orange"
                    aria-hidden="true"
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="mt-2 text-xs font-bold tracking-widest text-safemine-muted">
                    {n}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-safemine-text">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-safemine-text-mid leading-relaxed">
                    {desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="lg:sticky lg:top-24">
            <Placeholder
              label="Dashboard com formulário pré-preenchido"
              aspect="4/3"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
