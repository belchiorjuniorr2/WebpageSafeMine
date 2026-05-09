export default function Placeholder({
  label,
  aspect = "16/9",
  className = "",
}) {
  return (
    <div
      data-todo-image={label}
      role="img"
      aria-label={`Placeholder: ${label}`}
      className={`border-2 border-dashed border-safemine-orange/40 bg-safemine-orange/5 rounded-xl flex items-center justify-center text-safemine-orange/80 text-sm font-medium px-4 text-center ${className}`}
      style={{ aspectRatio: aspect }}
    >
      <span>[Screenshot: {label}]</span>
    </div>
  );
}
