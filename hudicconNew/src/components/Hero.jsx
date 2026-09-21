import useFadeIn from "../hooks/useFadeIn";
import { scrollTo } from "../utils/scrollTo";

export default function Hero() {
  const ref = useFadeIn();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1600&auto=format&fit=crop"
        alt="Community"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.28] saturate-[0.7]"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[rgba(10,10,15,0.88)] via-[rgba(10,10,15,0.7)] to-[rgba(10,10,15,0.4)]" />

      {/* Decorative vertical line */}
      <div className="absolute left-[5%] top-[15%] w-px h-[70%] bg-linear-to-b from-transparent via-[rgba(200,170,100,0.35)] to-transparent hidden md:block" />

      {/* Content */}
      <div
        ref={ref}
        className="relative z-10 max-w-2xl px-6 md:px-20 opacity-0 translate-y-10 transition-all duration-900 ease-out"
      >
        <p className="text-gold text-[0.68rem] tracking-[0.35em] uppercase mb-6">
          — Humanitarian Development Concern Centre —
        </p>

        <h1 className="text-5xl md:text-7xl font-normal leading-[1.08] mb-6 text-[#f0ede6]">
          Empowering Communities.
          <br />
          <span className="text-gold italic">Inspiring Change.</span>
        </h1>

        {/* Gold divider */}
        <div className="w-14 h-0.5 bg-gold mb-7" />

        <p className="text-[#9a9080] text-lg leading-[1.85] max-w-md mb-10">
          Humanitarian Development Concern Centre (HUDICCON) works to
          promote inclusive development, empower individuals, and support
          community-driven solutions through advocacy, partnerships, and
          humanitarian initiatives.
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => scrollTo("programs")}
            className="bg-gold text-dark border-none px-10 py-4 text-sm tracking-widest uppercase cursor-pointer font-serif hover:opacity-85 transition-opacity duration-200"
          >
            Explore Our Work
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="bg-transparent text-[#f0ede6] border border-[rgba(240,237,230,0.3)] hover:border-gold px-10 py-4 text-sm tracking-widest uppercase cursor-pointer font-serif transition-colors duration-200"
          >
            Get Involved
          </button>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-[#4a4840] text-[0.65rem] tracking-[0.2em]">
          SCROLL
        </span>
        <div className="w-px h-11 bg-linear-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
