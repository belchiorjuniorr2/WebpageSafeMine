import Image from "next/image";
import { Smartphone, Radio, Cloud, ArrowDown, CheckCircle2 } from "lucide-react";

const channels = [
  {
    id: "admin",
    badge: "Canal 1 · Administração",
    Icon: Smartphone,
    title: "No adm da mina, pelo celular",
    desc: "A equipe de segurança ou supervisão grava o relato no app SafeMine — no escritório, com o dashboard ao lado e o celular na mão.",
    image: "/images/admin-phone.jpg",
    alt: "Profissional da administração da mina registrando relato no app SafeMine no celular, com botão de gravação por voz e monitores de operação ao fundo",
    points: [
      "App web mobile, sem instalar nada extra",
      "Perfil do colaborador já preenchido",
      "Áudio + transcrição + e-mail para a SSMA",
    ],
  },
  {
    id: "field",
    badge: "Canal 2 · Campo",
    Icon: Radio,
    title: "No campo, pelo rádio",
    desc: "O operador na frente de lavra fala no rádio que já carrega. A voz vira o mesmo tipo de registro estruturado — sem parar a operação para digitar.",
    image: "/images/field-radio.jpg",
    alt: "Operador em mina a céu aberto fazendo relato de segurança pelo rádio digital",
    points: [
      "Ferramenta que a operação já usa",
      "Funciona onde o celular é restrito",
      "Mesma trilha de tratativa da SSMA",
    ],
  },
];

export default function DualChannels() {
  return (
    <section
      id="canais"
      aria-labelledby="canais-title"
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(255,94,20,0.08),transparent_55%),linear-gradient(180deg,#fff_0%,#F7F8FA_40%,#fff_100%)]"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <span className="text-xs font-semibold tracking-wider uppercase text-safemine-orange">
            Dois canais · um sistema
          </span>
          <h2
            id="canais-title"
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-safemine-dark"
          >
            Celular no adm. Rádio no campo.{" "}
            <span className="gradient-text">Tudo no SafeMine.</span>
          </h2>
          <p className="mt-4 text-lg text-safemine-text-mid leading-relaxed">
            Quem está no escritório grava pelo app. Quem está na lavra fala no rádio.
            Os dois fluxos caem no mesmo sistema — com a mesma estrutura, a mesma
            notificação e a mesma tratativa da SSMA.
          </p>
        </div>

        {/* Two channel cards */}
        <div className="mt-14 grid lg:grid-cols-2 gap-6 lg:gap-8">
          {channels.map(({ id, badge, Icon, title, desc, image, alt, points }, i) => (
            <article
              key={id}
              className={`card-hover group flex flex-col rounded-3xl bg-white border border-safemine-border/80 shadow-[0_8px_28px_rgba(74,85,104,0.06)] overflow-hidden animate-fade-up delay-${(i + 1) * 100}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={image}
                  alt={alt}
                  width={1280}
                  height={720}
                  className="h-full w-full object-cover img-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <span className="absolute left-4 bottom-4 inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur px-3 py-1.5 text-xs font-semibold text-safemine-dark shadow-sm">
                  <Icon className="w-3.5 h-3.5 text-safemine-orange" />
                  {badge}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-xl sm:text-2xl font-bold text-safemine-dark tracking-tight">
                  {title}
                </h3>
                <p className="mt-2.5 text-safemine-text-mid leading-relaxed">{desc}</p>
                <ul className="mt-5 space-y-2">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-safemine-dark">
                      <CheckCircle2 className="w-4 h-4 text-safemine-orange shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Flow arrows + converge */}
        <div className="mt-10 flex flex-col items-center animate-fade-up delay-300">
          <div className="flex items-center gap-3 text-safemine-orange">
            <span className="hidden sm:block h-px w-16 bg-gradient-to-r from-transparent to-safemine-orange/50" />
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-safemine-orange-soft border border-[#FFE4D0]">
              <ArrowDown className="w-5 h-5 animate-float" />
            </div>
            <span className="hidden sm:block h-px w-16 bg-gradient-to-l from-transparent to-safemine-orange/50" />
          </div>
          <p className="mt-3 text-sm font-semibold text-safemine-dark">
            Ambos os canais convergem no mesmo sistema
          </p>
        </div>

        <div className="mt-8 relative animate-fade-up delay-400">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-safemine-orange/15 via-transparent to-safemine-orange/5 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-safemine-border/80 bg-white shadow-[0_20px_50px_rgba(74,85,104,0.1)]">
            <Image
              src="/images/converge-system.jpg"
              alt="Diagrama: celular e rádio enviam áudio para a nuvem SafeMine e caem no mesmo painel da SSMA"
              width={1280}
              height={720}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="mt-6 grid sm:grid-cols-3 gap-3">
            {[
              {
                Icon: Smartphone,
                title: "App no adm",
                desc: "Relato gravado no celular",
              },
              {
                Icon: Radio,
                title: "Rádio no campo",
                desc: "Voz capturada na operação",
              },
              {
                Icon: Cloud,
                title: "Um só SafeMine",
                desc: "Registro, e-mail e tratativa",
              },
            ].map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="flex items-center gap-3 rounded-2xl bg-white border border-safemine-border/80 px-4 py-3.5 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-safemine-orange-soft text-safemine-orange">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-safemine-dark">{title}</p>
                  <p className="text-xs text-safemine-text-mid">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
