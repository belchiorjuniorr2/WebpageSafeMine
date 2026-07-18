import { FileText, UserCheck, Clock, ArrowRight } from "lucide-react";

const chain = [
  {
    Icon: FileText,
    title: "Anota no papel ou no bloco",
    desc: "O operador para a frente de lavra para escrever — com pressa, EPI e ruído de campo.",
  },
  {
    Icon: UserCheck,
    title: "Repassa ao líder de turma",
    desc: "O dado passa de mão em mão. Quando não some, atrasa — e perde fidelidade no caminho.",
  },
  {
    Icon: Clock,
    title: "Chega (ou não) à SSMA",
    desc: "O técnico redigita tudo no sistema. Com dezenas de relatos/dia, vira gargalo de auditoria.",
  },
];

export default function Problema() {
  return (
    <section id="problema" aria-labelledby="problema-title" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl animate-fade-up">
          <span className="text-xs font-semibold tracking-wider uppercase text-safemine-orange">
            O problema
          </span>
          <h2
            id="problema-title"
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-safemine-dark"
          >
            O relato que fica no papel{" "}
            <span className="text-safemine-orange">nunca vira ação.</span>
          </h2>
          <p className="mt-4 text-lg text-safemine-text-mid">
            Em mina a céu aberto, entre a frente de lavra e a sala de segurança existe uma cadeia
            manual. A cada elo se perde tempo, fidelidade e relatos inteiros.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {chain.map(({ Icon, title, desc }, i) => (
            <li
              key={title}
              className={`relative card-hover bg-white rounded-2xl p-6 border border-safemine-border/80 shadow-[0_2px_12px_rgba(74,85,104,0.04)] animate-fade-up delay-${(i + 1) * 100}`}
            >
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-safemine-orange-soft text-safemine-orange"
                aria-hidden="true"
              >
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-safemine-dark">{title}</h3>
              <p className="mt-2 text-safemine-text-mid leading-relaxed">{desc}</p>
              {i < chain.length - 1 && (
                <ArrowRight
                  className="hidden md:block absolute top-1/2 -right-4 w-6 h-6 text-safemine-muted -translate-y-1/2"
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
