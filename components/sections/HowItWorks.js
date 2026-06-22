import { Radio, Brain, ClipboardCheck, BarChart3 } from "lucide-react";
import Image from "next/image";
import painelAnalise from "@/public/painel-analise.png";

const steps = [
  {
    n: "01",
    title: "O operador fala no rádio",
    desc: "Em linguagem natural, em português, no rádio digital que já usa — mesmo com EPI e ruído de campo. Nada novo para aprender.",
    Icon: Radio,
  },
  {
    n: "02",
    title: "A IA transcreve e estrutura",
    desc: "No servidor, o áudio é transcrito e um agente de IA especializado classifica e preenche todos os campos do relato como um técnico de segurança faria.",
    Icon: Brain,
  },
  {
    n: "03",
    title: "O relato chega pronto",
    desc: "Estruturado e sem erro de transcrição, ele entra direto no sistema da empresa — o líder é notificado e acompanha pelo painel, sem repasse de papel.",
    Icon: ClipboardCheck,
  },
  {
    n: "04",
    title: "A segurança valida e trata — gestão age",
    desc: "A equipe só valida e dá a tratativa: marca como resolvido ou abre um plano de ação. Painel centralizado para auditoria, conformidade e análise de tendências.",
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
            Do rádio para o seu sistema em segundos.
          </h2>
          <p className="mt-4 text-lg text-safemine-text-mid">
            Sem papel, sem redigitação, sem dado perdido — o operador fala no
            rádio e a IA transcreve, estrutura e entrega o relato pronto para
            tratativa.
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
            <Image
              src={painelAnalise}
              alt="Painel de análise do SafeMine: relato preenchido com nome do colaborador, matrícula, turma, descrição, tratativa imediata e recomendações da IA, com ações de abrir plano de ação ou encerrar relato."
              placeholder="blur"
              className="w-full h-auto rounded-xl border border-safemine-border/60 shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
