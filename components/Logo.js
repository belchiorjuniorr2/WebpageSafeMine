import Image from "next/image";

export default function Logo({ showTagline = false, dark = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-10 h-10 shrink-0">
        <Image
          src="/icons/logo.png"
          alt="SafeMine"
          width={40}
          height={40}
          className="object-contain drop-shadow-sm"
          priority
        />
      </div>
      <div className="flex flex-col leading-tight">
        <span
          className={`font-bold text-lg tracking-tight ${
            dark ? "text-white" : "text-safemine-dark"
          }`}
        >
          SafeMine
        </span>
        {showTagline && (
          <span
            className={`text-xs ${
              dark ? "text-white/70" : "text-safemine-muted"
            }`}
          >
            Segurança em Campo
          </span>
        )}
      </div>
    </div>
  );
}
