import DemoForm from "./DemoForm";
import { Clock, ShieldCheck, MessageSquare } from "lucide-react";

const reassurances = [
  {
    Icon: Clock,
    title: "Demonstração de 20 minutos",
    desc: "Sem compromisso, focada na sua operação.",
  },
  {
    Icon: ShieldCheck,
    title: "Dados protegidos",
    desc: "Infraestrutura segura, conformidade com LGPD.",
  },
  {
    Icon: MessageSquare,
    title: "Resposta em 1 dia útil",
    desc: "Nossa equipe entra em contato direto com você.",
  },
];

export default function Demo() {
  return (
    <section
      id="demo"
      aria-labelledby="demo-title"
      className="bg-safemine-bg py-20 lg:py-28"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-2">
            <span className="text-xs font-semibold tracking-wider uppercase text-safemine-orange">
              Solicitar demo
            </span>
            <h2
              id="demo-title"
              className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-safemine-text"
            >
              Veja o SafeMine na sua operação.
            </h2>
            <p className="mt-4 text-lg text-safemine-text-mid">
              Agende uma demonstração com nossa equipe. Mostramos o produto com
              cenários reais do seu setor.
            </p>

            <ul className="mt-8 space-y-4">
              {reassurances.map(({ Icon, title, desc }) => (
                <li key={title} className="flex gap-4">
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-safemine-border/60 text-safemine-orange shrink-0"
                    aria-hidden="true"
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-safemine-text">{title}</p>
                    <p className="text-sm text-safemine-text-mid">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <DemoForm />
          </div>
        </div>
      </div>
    </section>
  );
}
