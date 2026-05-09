import { Zap, Wand2, Languages } from "lucide-react";

const stats = [
  {
    value: "5x",
    label: "mais rápido",
    desc: "que digitar formulários no celular em campo, mesmo com EPI.",
    Icon: Zap,
  },
  {
    value: "90%",
    label: "preenchido por IA",
    desc: "dos campos extraídos automaticamente da fala — você só revisa.",
    Icon: Wand2,
  },
  {
    value: "100%",
    label: "em português",
    desc: "treinado para vocabulário de mineração, da NR-22 ao chão de mina.",
    Icon: Languages,
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
            Mais relatos. Menos tempo perdido.
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Quando registrar é fácil, todo mundo registra. E é aí que a
            segurança da operação dá um salto.
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
