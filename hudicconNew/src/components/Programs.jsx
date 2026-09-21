import useFadeIn from "../hooks/useFadeIn";

// Icons reuse the same visual language as PastEvents.jsx for consistency
// between "what we work on" and "what we've done".
const programs = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M24 40V22" strokeLinecap="round" />
        <path d="M24 22c0-6-6-10-12-10 0 6 4 12 12 12" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 26c0-7 6-12 13-12 0 7-5 14-13 14" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="41" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: "Women Empowerment & Gender Equality",
    desc: "Promoting the economic empowerment, leadership, and social inclusion of women within the communities we serve.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M8 20v8h6l14 8V12l-14 8H8z" strokeLinejoin="round" />
        <path d="M30 18a6 6 0 010 12" strokeLinecap="round" />
        <path d="M14 28v6a3 3 0 003 3h1" strokeLinecap="round" />
      </svg>
    ),
    title: "Youth Leadership & Civic Advocacy",
    desc: "Equipping young people with the leadership and advocacy skills to participate meaningfully in governance and community development.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M24 8v32M14 40h20" strokeLinecap="round" />
        <path d="M24 12L10 16M24 12l14 4" strokeLinecap="round" />
        <path d="M10 16l-4 10a5 5 0 008 0z" strokeLinejoin="round" />
        <path d="M38 16l-4 10a5 5 0 008 0z" strokeLinejoin="round" />
      </svg>
    ),
    title: "Community Governance & Accountability",
    desc: "Strengthening citizens' participation in local governance to improve transparency and accountability in public resource use.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M24 38S8 28 8 17a8 8 0 0116-3 8 8 0 0116 3c0 11-16 21-16 21z" strokeLinejoin="round" />
        <path d="M24 15v8M20 19h8" strokeLinecap="round" />
      </svg>
    ),
    title: "HIV/AIDS Awareness & Community Health",
    desc: "Advancing education, stigma reduction, and access to support services for HIV and AIDS prevention and community health.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3">
        <circle cx="16" cy="18" r="6" />
        <circle cx="32" cy="18" r="6" />
        <circle cx="24" cy="32" r="6" />
        <path d="M20 22l-2 6M28 22l2 6M18 20h12" strokeLinecap="round" />
      </svg>
    ),
    title: "Humanitarian & Community Development",
    desc: "Delivering humanitarian interventions and community-driven development initiatives that address pressing social needs.",
  },
];

export default function Programs() {
  const ref = useFadeIn();

  return (
    <section
      ref={ref}
      id="programs"
      className="opacity-0 translate-y-10 transition-all duration-700 ease-out border-t border-[rgba(200,170,100,0.12)] py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-gold text-[0.68rem] tracking-[0.3em] uppercase mb-4">
            What We Work On
          </p>
          <h2 className="text-4xl md:text-5xl font-normal text-[#f0ede6]">
            Our Programs
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-5" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="p-10 border border-gold-dim bg-[rgba(200,170,100,0.03)] hover:border-[rgba(200,170,100,0.4)] hover:bg-[rgba(200,170,100,0.07)] transition-all duration-300"
            >
              <div className="w-10 h-10 text-gold mb-6">{icon}</div>
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
