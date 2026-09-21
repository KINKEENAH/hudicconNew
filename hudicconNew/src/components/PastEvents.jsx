import useFadeIn from "../hooks/useFadeIn";

// Each event uses a simple line-icon as a visual metaphor for its theme,
// rather than a stock photo — consistent with the symbol icons already
// used in Pillars.jsx. Swap these for real event photos whenever you have them.
const pastEvents = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M24 40V22" strokeLinecap="round" />
        <path d="M24 22c0-6-6-10-12-10 0 6 4 12 12 12" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 26c0-7 6-12 13-12 0 7-5 14-13 14" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="41" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: "Women Empowerment & Skills Development Workshop",
    desc: "A community-based initiative focused on entrepreneurship, financial literacy, leadership, and economic empowerment for women.",
    category: "Women & Gender Equality",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M8 20v8h6l14 8V12l-14 8H8z" strokeLinejoin="round" />
        <path d="M30 18a6 6 0 010 12" strokeLinecap="round" />
        <path d="M14 28v6a3 3 0 003 3h1" strokeLinecap="round" />
      </svg>
    ),
    title: "Youth Leadership & Civic Engagement Forum",
    desc: "An interactive forum designed to encourage youth participation in local governance, leadership, advocacy, and community development.",
    category: "Youth & Governance",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M24 38S8 28 8 17a8 8 0 0116-3 8 8 0 0116 3c0 11-16 21-16 21z" strokeLinejoin="round" />
        <path d="M24 15v8M20 19h8" strokeLinecap="round" />
      </svg>
    ),
    title: "Community Health & HIV/AIDS Awareness Outreach",
    desc: "Community education and awareness activities focused on HIV prevention, stigma reduction, health information, and connecting people with appropriate support services.",
    category: "Health & Humanitarian Support",
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
    title: "Community Governance & Accountability Dialogue",
    desc: "A community dialogue focused on citizen participation, local development priorities, and accountability in public resource mobilization and utilization.",
    category: "Governance & Advocacy",
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
    title: "Community Volunteer & Development Initiative",
    desc: "A volunteer-driven initiative bringing community members and partners together to identify needs and support practical community development activities.",
    category: "Community Development",
  },
];

export default function PastEvents() {
  const ref = useFadeIn();

  return (
    <section
      ref={ref}
      id="past-events"
      className="opacity-0 translate-y-10 transition-all duration-700 ease-out border-t border-[rgba(200,170,100,0.12)] py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-gold text-[0.68rem] tracking-[0.3em] uppercase mb-4">
            What We've Done
          </p>
          <h2 className="text-4xl md:text-5xl font-normal text-[#f0ede6]">
            Our Past Events
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-5" />
        </div>

        {/* Event list */}
        <div className="flex flex-col divide-y divide-[rgba(200,170,100,0.12)]">
          {pastEvents.map((event) => (
            <div
              key={event.title}
              className="flex flex-col sm:flex-row gap-6 py-8"
            >
              <div className="w-full sm:w-40 h-40 shrink-0 flex items-center justify-center bg-[rgba(200,170,100,0.06)] border border-gold-dim">
                <div className="w-16 h-16 text-gold">{event.icon}</div>
              </div>

              <div className="flex flex-col justify-center">
                <span className="inline-block w-fit text-[0.65rem] tracking-[0.2em] uppercase text-gold border border-gold-dim px-3 py-1 mb-3">
                  Past Event
                </span>
                <h3 className="text-xl font-normal text-[#f0ede6] mb-2">
                  {event.title}
                </h3>
                <p className="text-[#9a9080] text-sm leading-[1.8] mb-3 max-w-xl">
                  {event.desc}
                </p>
                <p className="text-[#7a7268] text-xs tracking-wide uppercase">
                  {event.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
