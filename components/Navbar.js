import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-safemine-border/80 shadow-[0_1px_0_rgba(74,85,104,0.04)]">
      <nav
        aria-label="Principal"
        className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between"
      >
        <a href="#hero" className="flex items-center transition-opacity hover:opacity-90" aria-label="Início">
          <Logo />
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-safemine-text-mid">
          <li>
            <a href="#problema" className="hover:text-safemine-orange transition-colors">
              Problema
            </a>
          </li>
          <li>
            <a href="#how" className="hover:text-safemine-orange transition-colors">
              Como funciona
            </a>
          </li>
          <li>
            <a href="#modules" className="hover:text-safemine-orange transition-colors">
              Módulos
            </a>
          </li>
          <li>
            <a href="#app" className="hover:text-safemine-orange transition-colors">
              App
            </a>
          </li>
        </ul>

        <a
          href="#demo"
          className="btn-primary inline-flex items-center justify-center bg-safemine-orange text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-[0_6px_18px_rgba(255,94,20,0.28)]"
        >
          Solicitar demo
        </a>
      </nav>
    </header>
  );
}
