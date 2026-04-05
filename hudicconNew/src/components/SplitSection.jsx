  
import useFadeIn  from "../hooks/useFadeIn";

export default function SplitSection({ id, imgSrc, imgAlt, tag, title, body, reverse, cta }) {
  const ref = useFadeIn();

  return (
    <section
      id={id}
      ref={ref}
      className={`opacity-0 translate-y-10 transition-all duration-700 ease-out
        flex flex-col border-b border-[rgba(200,170,100,0.12)]
        ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      {/* Image half */}
      <div className="w-full md:w-1/2 min-h-70 md:min-h-120 overflow-hidden relative">
        <img
          src={imgSrc}
          alt={imgAlt}
          className="w-full h-full object-cover brightness-[0.82] saturate-90 hover:scale-105 transition-transform duration-700 ease-out"
        />
        {/* Gold accent strip */}
        <div
          className={`absolute bottom-0 w-1 h-2/5 bg-linear-to-t from-gold to-transparent
            ${reverse ? "right-0" : "left-0"}`}
        />
      </div>

      {/* Text half */}
      <div
        className={`w-full md:w-1/2 flex flex-col justify-center px-8 py-12 md:px-16 md:py-20
          ${reverse ? "bg-[rgba(200,170,100,0.03)]" : "bg-transparent"}`}
      >
        {tag && (
          <p className="text-gold text-[0.68rem] tracking-[0.3em] uppercase mb-4">
            — {tag} —
          </p>
        )}

        <h2 className="text-3xl md:text-4xl font-normal leading-snug mb-5 text-[#f0ede6] whitespace-pre-line">
          {title}
        </h2>

        {/* Gold divider */}
        <div className="w-12 h-0.5 bg-gold mb-6" />

        <p className="text-muted leading-[1.9] text-base max-w-md">{body}</p>

        {cta && (
          <a
            href={cta.href}
            className="mt-8 self-start border border-gold text-gold hover:bg-gold hover:text-dark px-7 py-3 text-xs tracking-widest uppercase no-underline transition-all duration-200"
          >
            {cta.label} →
          </a>
        )}
      </div>
    </section>
  );
}
