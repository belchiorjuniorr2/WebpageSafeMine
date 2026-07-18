import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#2A3140] text-white/80 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Logo showTagline dark />
            <p className="mt-4 text-sm text-white/60 max-w-sm leading-relaxed">
              App de relatos por voz para operações de mineração a céu aberto. Menos papel, mais
              segurança e dados que chegam à SSMA.
            </p>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold mb-3">Produto</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#modules" className="hover:text-white transition-colors">
                  Módulos
                </a>
              </li>
              <li>
                <a href="#how" className="hover:text-white transition-colors">
                  Como funciona
                </a>
              </li>
              <li>
                <a href="#app" className="hover:text-white transition-colors">
                  App SafeMine
                </a>
              </li>
              <li>
                <a href="#demo" className="hover:text-white transition-colors">
                  Solicitar demo
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold mb-3">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:belchiorjuniorrr@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  belchiorjuniorrr@gmail.com
                </a>
              </li>
              <li className="text-white/50">Brasil · Mineração a céu aberto</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/50">
          <span>© {new Date().getFullYear()} SafeMine. Todos os direitos reservados.</span>
          <span>Feito para operações em campo.</span>
        </div>
      </div>
    </footer>
  );
}
