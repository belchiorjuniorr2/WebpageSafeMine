import Image from "next/image";
import { modules } from "@/lib/modules";

export default function Modules() {
  return (
    <section id="modules" aria-labelledby="modules-title" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl animate-fade-up">
          <span className="text-xs font-semibold tracking-wider uppercase text-safemine-orange">
            Módulos do app
          </span>
          <h2
            id="modules-title"
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-safemine-dark"
          >
            Seis tipos de relato. Uma única voz.
          </h2>
          <p className="mt-4 text-lg text-safemine-text-mid">
            Os mesmos módulos do aplicativo SafeMine — segurança, ambiental, ergonomia, veículo,
            passagem de turno e inspeção — preenchidos por voz e revisáveis antes do envio.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map(({ id, title, blurb, icon, borderClass, glow }, i) => (
            <li
              key={id}
              className={`group card-hover bg-white rounded-2xl p-6 border border-safemine-border/80 border-t-4 ${borderClass} shadow-[0_2px_12px_rgba(74,85,104,0.04)] animate-fade-up delay-${(i % 3) * 100 + 100}`}
              style={{ boxShadow: `0 2px 12px rgba(74,85,104,0.04), 0 0 0 0 ${glow}` }}
            >
              <div className="relative w-16 h-16 mx-auto sm:mx-0">
                <Image
                  src={icon}
                  alt=""
                  width={64}
                  height={64}
                  className="object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-safemine-dark text-center sm:text-left">
                {title}
              </h3>
              <p className="mt-2 text-safemine-text-mid leading-relaxed text-center sm:text-left">
                {blurb}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
