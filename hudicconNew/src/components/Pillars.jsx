import useFadeIn from "../hooks/useFadeIn";

const pillars = [
  {
    icon: "◈",
    title: "Community",
    desc: "A network of passionate individuals united by shared values and the drive to create lasting change in their spheres.",
  },
  {
    icon: "◉",
    title: "Innovation",
    desc: "We challenge conventions and embrace bold ideas that push boundaries and open new possibilities for growth.",
  },
  {
    icon: "◎",
    title: "Impact",
    desc: "Every initiative, every event, every connection is designed to generate measurable, meaningful impact in the world.",
  },
];

export default function Pillars() {
  const ref = useFadeIn();

  return (
    <section
      ref={ref}
      className="opacity-0 translate-y-10 transition-all duration-700 ease-out border-t border-[rgba(200,170,100,0.12)] py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-gold text-[0.68rem] tracking-[0.3em] uppercase mb-4">
            What We Stand For
          </p>
          <h2 className="text-4xl md:text-5xl font-normal text-[#f0ede6]">
            Our Three Pillars
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-5" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="p-10 border border-gold-dim bg-[rgba(200,170,100,0.03)] hover:border-[rgba(200,170,100,0.4)] hover:bg-[rgba(200,170,100,0.07)] transition-all duration-300"
            >
              <div className="text-4xl text-gold mb-6">{icon}</div>
              <h3 className="text-xl font-normal tracking-wide mb-4 text-[#f0ede6]">
                {title}
              </h3>
              <p className="text-[#7a7268] leading-[1.85] text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
