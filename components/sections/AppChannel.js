import { Smartphone, ArrowRight } from "lucide-react";

export default function AppChannel() {
  return (
    <section
      id="app"
      aria-labelledby="app-title"
      className="py-16 lg:py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-safemine-bg border border-safemine-border/60 p-8 sm:p-10 flex flex-col md:flex-row md:items-center gap-6">
          <div
            className="flex items-center justify-center w-14 h-14 rounded-2xl bg-safemine-orange/10 text-safemine-orange shrink-0"
            aria-hidden="true"
          >
            <Smartphone className="w-7 h-7" />
          </div>
          <div className="flex-1">
            <h2
              id="app-title"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-safemine-text"
            >
              Não trabalha com rádio digital? Também tem app.
            </h2>
            <p className="mt-2 text-safemine-text-mid leading-relaxed max-w-2xl">
              O mesmo motor de IA, agora pela voz no celular. Para operações que
              não usam rádio digital — ou que preferem o app — o relato sai por
              voz e chega pronto no seu sistema, do mesmo jeito.
            </p>
          </div>
          <a
            href="#demo"
            className="inline-flex items-center justify-center gap-2 bg-white text-safemine-text text-base font-semibold px-5 py-3 rounded-lg border border-safemine-border hover:border-safemine-text/30 transition-colors shrink-0"
          >
            Quero ver o app
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
