import { Clock, Wand2, ShieldCheck, Mail } from "lucide-react";

const stats = [
  {
    value: "Voz",
    label: "app ou WhatsApp",
    desc: "App, WhatsApp ou rádio digital: o operador fala e o relato chega estruturado. Menos papel, mais relatos reais.",
    Icon: Clock,
  },
  {
    value: "IA",
    label: "preenche o formulário",
    desc: "Transcrição e extração de campos com contexto de mineração a céu aberto — você só revisa e envia.",
    Icon: Wand2,
  },
  {
    value: "SSMA",
    label: "notificada na hora",
    desc: "E-mail HTML estruturado com nome, matrícula, função e detalhes do relato para a equipe agir.",
    Icon: Mail,
  },
  {
    value: "6",
    label: "módulos de campo",
    desc: "Segurança, ambiental, ergonomia, veículo, turno e inspeção — o ciclo operacional em um só app.",
    Icon: ShieldCheck,
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      aria-labelledby="benefits-title"
      className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-br from-[#2A3140] via-[#343B4A] to-[#2A3140] text-white"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,94,20,0.18),transparent_55%)]"
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl animate-fade-up">
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
            Quando o dado chega em tempo real — com áudio, texto e tratativas sugeridas — a equipe
            de segurança age em vez de redigitar planilha.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map(({ value, label, desc, Icon }, i) => (
            <li
              key={label}
              className={`card-hover bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm animate-fade-up delay-${(i + 1) * 100}`}
            >
              <div
                className="flex items-center justify-center w-11 h-11 rounded-xl bg-safemine-orange/15 text-safemine-orange"
                aria-hidden="true"
              >
                <Icon className="w-5 h-5" />
              </div>
              <p className="mt-5 text-4xl font-bold tracking-tight text-white">{value}</p>
              <p className="mt-1 text-base font-semibold text-safemine-orange">{label}</p>
              <p className="mt-3 text-white/70 leading-relaxed text-sm">{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
