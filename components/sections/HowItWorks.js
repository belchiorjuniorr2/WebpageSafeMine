import Image from "next/image";
import { Mic, Brain, UserRound, Mail } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "O operador grava por voz",
    desc: "No app, no WhatsApp ou pelo rádio digital — fala o relato em português, mesmo em campo e com EPI.",
    Icon: Mic,
  },
  {
    n: "02",
    title: "A IA transcreve e preenche",
    desc: "Transcrição com contexto de mina a céu aberto e extração automática dos campos do formulário — sem inventar dados de perfil.",
    Icon: Brain,
  },
  {
    n: "03",
    title: "Identificação e revisão",
    desc: "Nome, matrícula e função vêm do perfil do colaborador. O operador confere o texto, o áudio e os campos antes de enviar.",
    Icon: UserRound,
  },
  {
    n: "04",
    title: "SSMA recebe e trata",
    desc: "O registro fica na base e um e-mail HTML estruturado chega para a equipe de segurança analisar e dar a tratativa.",
    Icon: Mail,
  },
];

export default function HowItWorks() {
  return (
    <section id="how" aria-labelledby="how-title" className="py-20 lg:py-28 bg-safemine-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl animate-fade-up">
          <span className="text-xs font-semibold tracking-wider uppercase text-safemine-orange">
            Como funciona
          </span>
          <h2
            id="how-title"
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-safemine-dark"
          >
            Do campo para a SSMA em quatro passos.
          </h2>
          <p className="mt-4 text-lg text-safemine-text-mid">
            O mesmo fluxo em produção — app, WhatsApp ou rádio: voz → transcrição → formulário
            estruturado → notificação por e-mail.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-12 items-start">
          <ol className="space-y-4">
            {steps.map(({ n, title, desc, Icon }, i) => (
              <li
                key={n}
                className={`card-hover flex gap-5 bg-white rounded-2xl p-5 border border-safemine-border/80 shadow-[0_2px_12px_rgba(74,85,104,0.04)] animate-fade-up delay-${(i + 1) * 100}`}
              >
                <div className="flex flex-col items-center shrink-0">
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-xl bg-safemine-orange-soft text-safemine-orange"
                    aria-hidden="true"
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="mt-2 text-xs font-bold tracking-widest text-safemine-muted">
                    {n}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-safemine-dark">{title}</h3>
                  <p className="mt-1.5 text-safemine-text-mid leading-relaxed">{desc}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="lg:sticky lg:top-24 space-y-5 animate-fade-up delay-200">
            <div className="group relative overflow-hidden rounded-2xl border border-safemine-border/80 shadow-[0_12px_32px_rgba(74,85,104,0.08)]">
              <Image
                src="/images/ai-process.jpg"
                alt="Ilustração da IA transformando voz em relato estruturado"
                width={900}
                height={900}
                className="w-full h-auto object-cover img-zoom"
              />
            </div>
            <div className="group relative overflow-hidden rounded-2xl border border-safemine-border/80 shadow-[0_12px_32px_rgba(74,85,104,0.08)]">
              <Image
                src="/images/dashboard.jpg"
                alt="Equipe de segurança analisando relatos no painel SafeMine"
                width={1200}
                height={675}
                className="w-full h-auto object-cover img-zoom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
