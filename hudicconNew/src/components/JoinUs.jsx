import { scrollTo } from "../utils/scrollTo";
import useFadeIn from "../hooks/useFadeIn";

export default function JoinUs() {
  const ref = useFadeIn();

  return (
    <section
      ref={ref}
      className="opacity-0 translate-y-10 transition-all duration-700 ease-out border-t border-[rgba(200,170,100,0.12)] py-24 px-6 text-center"
    >
      <div className="max-w-2xl mx-auto">
        <p className="text-gold text-[0.68rem] tracking-[0.3em] uppercase mb-4">
          Get Involved
        </p>
        <h2 className="text-4xl md:text-5xl font-normal text-[#f0ede6] mb-6">
          Be Part of the Change
        </h2>
        <div className="w-12 h-0.5 bg-gold mx-auto mb-8" />
        <p className="text-muted leading-[1.9] text-base md:text-lg mb-10">
          Meaningful development is achieved through collective action. Join
          us in supporting initiatives that empower communities, promote
          inclusion, and create opportunities for positive change.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => scrollTo("contact")}
            className="bg-gold text-dark border-none px-8 py-4 text-xs tracking-widest uppercase cursor-pointer font-serif hover:opacity-85 transition-opacity duration-200"
          >
            Volunteer With Us
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="border border-gold text-gold hover:bg-gold hover:text-dark px-8 py-4 text-xs tracking-widest uppercase cursor-pointer font-serif transition-all duration-200 bg-transparent"
          >
            Partner With Us
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="border border-[rgba(240,237,230,0.3)] text-[#f0ede6] hover:border-gold px-8 py-4 text-xs tracking-widest uppercase cursor-pointer font-serif transition-colors duration-200 bg-transparent"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
