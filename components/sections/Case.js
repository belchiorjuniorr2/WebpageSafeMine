import { Timer, UserCheck, Database } from "lucide-react";

const metrics = [
  {
    value: "30 min → 30 s",
    label: "por relato",
    desc: "O tempo de emissão de cada relato caiu de meia hora para meio minuto.",
    Icon: Timer,
  },
  {
    value: "0",
    label: "papel no repasse do líder",
    desc: "O elo manual do líder de turma deixou de existir — ele só é notificado e acompanha pelo painel.",
    Icon: UserCheck,
  },
  {
    value: "600+",
    label: "relatos tratados por mês",
    desc: "Mais de 20 relatos por dia chegam prontos: a segurança valida e dá a tratativa, sem redigitar.",
    Icon: Database,
  },
];

export default function Case() {
  return (
    <section
      id="case"
      aria-labelledby="case-title"
      className="bg-safemine-dark text-white py-20 lg:py-28"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-wider uppercase text-safemine-orange">
            Resultado real
          </span>
          <h2
            id="case-title"
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Em uma mineradora de grande porte.
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Operação já rodando com o SafeMine no rádio. Os números abaixo são
            desse cliente — o nome é confidencial, os resultados não.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {metrics.map(({ value, label, desc, Icon }) => (
            <li
              key={label}
              className="bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur"
            >
              <div
                className="flex items-center justify-center w-11 h-11 rounded-xl bg-safemine-orange/15 text-safemine-orange"
                aria-hidden="true"
              >
                <Icon className="w-5 h-5" />
              </div>
              <p className="mt-5 text-4xl font-bold tracking-tight text-white">
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
