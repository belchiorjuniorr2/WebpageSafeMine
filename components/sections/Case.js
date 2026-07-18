import { Quote } from "lucide-react";

export default function Case() {
  return (
    <section id="case" aria-labelledby="case-title" className="py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-safemine-orange to-[#E84E0A] p-8 sm:p-12 text-white shadow-[0_20px_50px_rgba(255,94,20,0.28)] animate-fade-up">
          <div
            aria-hidden
            className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-white/10 blur-2xl"
          />
          <Quote className="w-10 h-10 text-white/40" aria-hidden />
          <h2 id="case-title" className="sr-only">
            Resultado esperado
          </h2>
          <p className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-snug max-w-3xl">
            De dezenas de minutos por relato no papel para segundos falando no app —
            com o dado chegando estruturado à SSMA.
          </p>
          <p className="mt-5 text-white/85 text-base sm:text-lg max-w-2xl leading-relaxed">
            O SafeMine elimina a cadeia operador → papel → líder → redigitação. O colaborador fala,
            a IA preenche, a segurança recebe e trata.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 text-sm font-semibold">
            <div>
              <div className="text-3xl font-bold">6</div>
              <div className="text-white/80">módulos de campo</div>
            </div>
            <div>
              <div className="text-3xl font-bold">1</div>
              <div className="text-white/80">toque para gravar</div>
            </div>
            <div>
              <div className="text-3xl font-bold">0</div>
              <div className="text-white/80">papel no fluxo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
