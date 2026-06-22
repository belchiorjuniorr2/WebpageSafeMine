import { Radio as RadioIcon, Zap, ShieldCheck } from "lucide-react";

const reasons = [
  {
    Icon: Zap,
    title: "O operador não muda nada",
    desc: "Ele fala no rádio que já carrega. Sem app para instalar, sem treinamento, sem parar a operação para escrever.",
  },
  {
    Icon: RadioIcon,
    title: "O rádio já é o padrão",
    desc: "Em mineração, logística e ferrovia, a operação inteira já vive no rádio. A adoção é imediata porque a ferramenta já está na mão.",
  },
  {
    Icon: ShieldCheck,
    title: "Onde celular é proibido, o rádio entra",
    desc: "Em muitas áreas de operação o celular não é permitido. O rádio é, muitas vezes, o único canal autorizado em campo.",
  },
];

export default function Radio() {
  return (
    <section
      id="radio"
      aria-labelledby="radio-title"
      className="py-20 lg:py-28"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-wider uppercase text-safemine-orange">
            Por que rádio
          </span>
          <h2
            id="radio-title"
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-safemine-text"
          >
            A ferramenta que já é o dia a dia da operação.
          </h2>
          <p className="mt-4 text-lg text-safemine-text-mid">
            Não pedimos que ninguém adote uma ferramenta nova. Nós transformamos
            a que já está em uso — o rádio digital — em relatos tratados.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {reasons.map(({ Icon, title, desc }) => (
            <li
              key={title}
              className="bg-white rounded-2xl p-6 border border-safemine-border/60"
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
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
