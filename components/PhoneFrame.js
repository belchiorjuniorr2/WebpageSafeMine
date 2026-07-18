import Image from "next/image";

/**
 * Realistic phone bezel wrapping a real app screenshot.
 * aspect ~ 9/19.5 (phone), notch + home indicator for product-style mockups.
 */
export default function PhoneFrame({
  src,
  alt,
  label,
  className = "",
  priority = false,
  width = 390,
  height = 844,
}) {
  return (
    <figure className={`relative mx-auto w-full max-w-[240px] sm:max-w-[260px] ${className}`}>
      <div className="relative rounded-[2rem] bg-[#1a1d24] p-[10px] shadow-[0_28px_60px_rgba(42,49,64,0.28),0_0_0_1px_rgba(0,0,0,0.12)]">
        {/* Side buttons */}
        <span
          aria-hidden
          className="absolute -left-[2px] top-24 h-8 w-[3px] rounded-l-sm bg-[#2a2f38]"
        />
        <span
          aria-hidden
          className="absolute -left-[2px] top-36 h-12 w-[3px] rounded-l-sm bg-[#2a2f38]"
        />
        <span
          aria-hidden
          className="absolute -right-[2px] top-32 h-14 w-[3px] rounded-r-sm bg-[#2a2f38]"
        />

        {/* Screen */}
        <div className="relative overflow-hidden rounded-[1.45rem] bg-white">
          {/* Dynamic Island / notch */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-2 z-10 h-[22px] w-[90px] -translate-x-1/2 rounded-full bg-[#1a1d24]"
          />

          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            className="block h-auto w-full object-cover object-top"
            sizes="(max-width: 640px) 240px, 260px"
          />

          {/* Home indicator */}
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-1.5 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-safemine-dark/25"
          />
        </div>
      </div>

      {label ? (
        <figcaption className="mt-3 text-center text-xs font-semibold text-safemine-text-mid">
          {label}
        </figcaption>
      ) : null}
    </figure>
  );
}
