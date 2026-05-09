import { ShieldAlert } from "lucide-react";

export default function Logo({ showTagline = false, dark = false }) {
  return (
    <div className="flex items-center gap-3">
      <div
        aria-label="SafeMine"
        className="flex items-center justify-center w-10 h-10 rounded-xl bg-safemine-orange shadow-sm shrink-0"
      >
        <ShieldAlert className="w-6 h-6 text-white" aria-hidden="true" />
      </div>
      <div className="flex flex-col leading-tight">
        <span
          className={`font-bold text-lg tracking-tight ${
            dark ? "text-white" : "text-safemine-text"
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
