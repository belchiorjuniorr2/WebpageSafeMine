import { modules } from "@/lib/modules";

export default function Modules() {
  return (
    <section
      id="modules"
      aria-labelledby="modules-title"
      className="bg-safemine-bg py-20 lg:py-28"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-wider uppercase text-safemine-orange">
            Módulos
          </span>
          <h2
            id="modules-title"
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-safemine-text"
          >
            Seis módulos de relato, uma única voz.
          </h2>
          <p className="mt-4 text-lg text-safemine-text-mid">
            Do quase-acidente à passagem de turno — todos os formulários da
            operação, preenchidos por voz.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map(({ id, title, blurb, Icon, bgClass, textClass, borderClass }) => (
            <li
              key={id}
              className={`group bg-white rounded-2xl p-6 border-t-4 ${borderClass} shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow`}
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${bgClass}`}
                aria-hidden="true"
              >
                <Icon className={`w-6 h-6 ${textClass}`} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-safemine-text">
                {title}
              </h3>
              <p className="mt-2 text-safemine-text-mid leading-relaxed">
                {blurb}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
