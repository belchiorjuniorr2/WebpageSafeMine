/**
 * Tile de ícone visual (Lucide) — alinhado ao app SafeMine.
 */
export default function TypeIcon({
  Icon,
  gradient,
  shadow,
  size = 64,
  className = "",
}) {
  const iconSize = Math.round(size * 0.48);
  const radius = Math.round(size * 0.28);

  return (
    <span
      className={`inline-flex items-center justify-center text-white shrink-0 ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        background: gradient,
        boxShadow: shadow
          ? `0 10px 24px ${shadow}, inset 0 1px 0 rgba(255,255,255,0.35)`
          : undefined,
      }}
      aria-hidden
    >
      {Icon ? <Icon size={iconSize} strokeWidth={2.25} /> : null}
    </span>
  );
}
