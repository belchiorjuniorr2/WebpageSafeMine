import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur border-b border-black/5">
      <nav
        aria-label="Principal"
        className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between"
      >
        <a href="#hero" className="flex items-center" aria-label="Início">
          <Logo />
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-safemine-text-mid">
          <li>
            <a href="#case" className="hover:text-safemine-text transition-colors">
              Resultado
            </a>
          </li>
          <li>
            <a href="#how" className="hover:text-safemine-text transition-colors">
              Como funciona
            </a>
          </li>
          <li>
            <a href="#radio" className="hover:text-safemine-text transition-colors">
              Por que rádio
            </a>
          </li>
          <li>
            <a href="#modules" className="hover:text-safemine-text transition-colors">
              Módulos
            </a>
          </li>
        </ul>

        <a
          href="#demo"
          className="inline-flex items-center justify-center bg-safemine-orange text-white text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-safemine-orange/90 transition-colors shadow-sm"
        >
          Solicitar demo
        </a>
      </nav>
    </header>
  );
}
