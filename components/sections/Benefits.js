import { Clock, Wand2, Brain } from "lucide-react";

const stats = [
  {
    value: "Zero",
    label: "papel no fluxo",
    desc: "O relato sai do campo e chega na sala de segurança em segundos — sem folha, sem reDigitação, sem perda.",
    Icon: Clock,
  },
  {
    value: "90%",
    label: "preenchido por IA",
    desc: "Os campos são extraídos automaticamente da fala. O operador só revisa e confirma.",
    Icon: Wand2,
  },
  {
    value: "IA",
    label: "recomenda a tratativa",
    desc: "Além de transcrever, a IA já sugere ações corretivas e preventivas com base no risco identificado.",
    Icon: Brain,
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      aria-labelledby="benefits-title"
      className="bg-safemine-dark text-white py-20 lg:py-28"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-wider uppercase text-safemine-orange">
            Benefícios
          </span>
          <h2
            id="benefits-title"
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Do campo para a análise. Sem papel no meio do caminho.
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Quando o dado chega em tempo real e já vem com recomendação da IA,
            a equipe de segurança age — em vez de lançar planilha.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {stats.map(({ value, label, desc, Icon }) => (
            <li
              key={value}
              className="bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur"
            >
              <div
                className="flex items-center justify-center w-11 h-11 rounded-xl bg-safemine-orange/15 text-safemine-orange"
                aria-hidden="true"
              >
                <Icon className="w-5 h-5" />
              </div>
              <p className="mt-5 text-5xl font-bold tracking-tight text-white">
                {value}
              </p>
              <p className="mt-1 text-base font-semibold text-safemine-orange">
                {label}
              </p>
              <p className="mt-3 text-white/70 leading-relaxed">{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
