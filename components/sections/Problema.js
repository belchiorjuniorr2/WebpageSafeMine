import { FileText, UserCheck, Clock, ArrowRight } from "lucide-react";

const chain = [
  {
    Icon: FileText,
    title: "Anota no papel",
    desc: "O operador para a operação para escrever — com pressa, EPI e erro de grafia.",
  },
  {
    Icon: UserCheck,
    title: "Repassa ao líder de turma",
    desc: "O papel passa de mão em mão. Quando não some, atrasa — eram ~15 min só nesse elo.",
  },
  {
    Icon: Clock,
    title: "Chega (ou não) à segurança",
    desc: "O técnico redigita tudo no sistema. Com 20+ relatos por dia, vira gargalo.",
  },
];

export default function Problema() {
  return (
    <section
      id="problema"
      aria-labelledby="problema-title"
      className="py-20 lg:py-28"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-wider uppercase text-safemine-orange">
            O problema
          </span>
          <h2
            id="problema-title"
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-safemine-text"
          >
            O relato que fica no papel{" "}
            <span className="text-safemine-orange">nunca vira ação.</span>
          </h2>
          <p className="mt-4 text-lg text-safemine-text-mid">
            Entre o campo e a sala de segurança existe uma cadeia de repasse
            manual. A cada elo se perde tempo, fidelidade e relatos inteiros.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {chain.map(({ Icon, title, desc }, i) => (
            <li
              key={title}
              className="relative bg-white rounded-2xl p-6 border border-safemine-border/60"
            >
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-safemine-orange/10 text-safemine-orange"
                aria-hidden="true"
              >
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-safemine-text">
                {title}
              </h3>
              <p className="mt-2 text-safemine-text-mid leading-relaxed">
                {desc}
              </p>
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
