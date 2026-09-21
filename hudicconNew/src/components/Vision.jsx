import useFadeIn from "../hooks/useFadeIn";

export default function Vision() {
  const ref = useFadeIn();

  return (
    <section
      ref={ref}
      id="vision"
      className="opacity-0 translate-y-10 transition-all duration-700 ease-out border-b border-[rgba(200,170,100,0.12)] py-24 px-6"
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-gold text-[0.68rem] tracking-[0.3em] uppercase mb-4">
          Our Vision
        </p>
        <h2 className="text-3xl md:text-4xl font-normal text-[#f0ede6] mb-6">
          A Just, Inclusive & Empowered Society
        </h2>
        <div className="w-12 h-0.5 bg-gold mx-auto mb-8" />
        <p className="text-muted leading-[1.9] text-base md:text-lg">
          A just, inclusive, and empowered society where every individual,
          regardless of gender or social background, has the opportunity to
          thrive, participate in decision-making, and contribute to
          sustainable community development.
        </p>
      </div>
    </section>
  );
}
