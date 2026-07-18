import Image from "next/image";
import { Mic, UserCircle, Paperclip, Mail, ArrowRight } from "lucide-react";
import PhoneFrame from "@/components/PhoneFrame";

const features = [
  {
    Icon: Mic,
    title: "Gravação por voz com IA",
    desc: "Transcrição e preenchimento automático com vocabulário de mina a céu aberto.",
  },
  {
    Icon: UserCircle,
    title: "Perfil do colaborador",
    desc: "Nome, matrícula e função preenchem sozinhos em todos os relatos.",
  },
  {
    Icon: Paperclip,
    title: "Anexos e histórico",
    desc: "Fotos, PDFs e consulta de registros enviados em um só lugar.",
  },
  {
    Icon: Mail,
    title: "E-mail para a SSMA",
    desc: "Cada envio gera notificação HTML estruturada para a equipe de segurança.",
  },
];

const mockups = [
  {
    src: "/images/mockups/phone-dashboard.png",
    alt: "Print real do app SafeMine — tela inicial com os 6 módulos de registro",
    label: "Início · 6 módulos",
  },
  {
    src: "/images/mockups/phone-seguranca.png",
    alt: "Print real do app SafeMine — registro de segurança com gravação por voz e identificação do relator",
    label: "Relato por voz",
  },
  {
    src: "/images/mockups/phone-registros.png",
    alt: "Print real do app SafeMine — consulta de registros enviados",
    label: "Histórico de registros",
  },
];

export default function AppChannel() {
  return (
    <section id="app" aria-labelledby="app-title" className="py-20 lg:py-28 bg-safemine-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 relative animate-fade-up">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-safemine-orange/15 to-transparent blur-2xl" />
            <div className="mx-auto max-w-xs animate-float">
              <Image
                src="/images/app-phone.jpg"
                alt="Mockup do app SafeMine no celular com botão de gravação por voz, sobre mina a céu aberto"
                width={720}
                height={960}
                className="w-full h-auto rounded-[2rem] shadow-[0_24px_60px_rgba(74,85,104,0.18)] border border-white/60"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 animate-fade-up delay-100">
            <span className="text-xs font-semibold tracking-wider uppercase text-safemine-orange">
              Aplicativo SafeMine
            </span>
            <h2
              id="app-title"
              className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-safemine-dark"
            >
              Feito para o operador em campo — e para a SSMA no escritório.
            </h2>
            <p className="mt-4 text-lg text-safemine-text-mid leading-relaxed">
              O app web mobile permite gravar o relato, ouvir o áudio, revisar a transcrição e
              enviar com um toque. A segurança recebe o dado pronto, sem redigitar papel.
            </p>

            <ul className="mt-8 grid sm:grid-cols-2 gap-4">
              {features.map(({ Icon, title, desc }) => (
                <li
                  key={title}
                  className="card-hover rounded-2xl bg-white border border-safemine-border/80 p-4 shadow-sm"
                >
                  <div className="flex items-center gap-2 text-safemine-orange">
                    <Icon className="w-5 h-5" />
                    <span className="font-semibold text-safemine-dark text-sm">{title}</span>
                  </div>
                  <p className="mt-2 text-sm text-safemine-text-mid leading-relaxed">{desc}</p>
                </li>
              ))}
            </ul>

            <a
              href="#demo"
              className="btn-primary mt-8 inline-flex items-center gap-2 bg-safemine-orange text-white font-semibold px-5 py-3 rounded-xl shadow-[0_8px_22px_rgba(255,94,20,0.28)]"
            >
              Quero ver o app na demo
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Real app screenshots in phone frames */}
        <div className="mt-16 lg:mt-20 animate-fade-up delay-200">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold tracking-wider uppercase text-safemine-orange">
              Prints reais do app
            </span>
            <h3 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-safemine-dark">
              Telas capturadas do SafeMine em produção
            </h3>
            <p className="mt-2 text-safemine-text-mid">
              Dashboard, gravação por voz com identificação do relator e histórico de
              registros — exatamente como o colaborador usa no celular.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center items-end gap-6 sm:gap-8 lg:gap-10">
            {mockups.map((m, i) => (
              <div
                key={m.src}
                className={`animate-fade-up delay-${(i + 2) * 100} ${
                  i === 1 ? "lg:-translate-y-4 lg:scale-105 z-10" : "opacity-95"
                }`}
              >
                <PhoneFrame
                  src={m.src}
                  alt={m.alt}
                  label={m.label}
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
