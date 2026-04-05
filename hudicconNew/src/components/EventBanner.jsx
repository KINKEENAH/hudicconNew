import { scrollTo } from "../utils/scrollTo";

export default function EventBanner() {
  return (
    <section className="max-w-6xl mx-auto px-6 mb-24">
      <div className="bg-gradient-to-br from-[rgba(200,170,100,0.13)] to-[rgba(200,170,100,0.04)] border border-[rgba(200,170,100,0.25)] px-8 md:px-14 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        
        <div>
          <p className="text-gold text-[0.68rem] tracking-[0.3em] uppercase mb-3">
            Next Event
          </p>
          <h3 className="text-3xl font-normal text-[#f0ede6] mb-2">
            Hudiccon Annual Summit 2025
          </h3>
          <p className="text-[#7a7268] text-sm tracking-wide">
            May 15–17, 2025 · Accra, Ghana
          </p>
        </div>

        <button
          onClick={() => scrollTo("contact")}
          className="bg-gold text-dark border-none px-9 py-4 text-xs tracking-widest uppercase cursor-pointer font-serif hover:opacity-85 transition-opacity duration-200 whitespace-nowrap shrink-0"
        >
          Register Now →
        </button>
      </div>
    </section>
  );
}
