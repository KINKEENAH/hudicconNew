import { useEffect } from "react";

export default function AboutModal({ open, onClose }) {
  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(10,10,15,0.85)] px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-dark border border-gold-dim px-8 py-12 md:px-14 md:py-14"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 text-[#9a9080] hover:text-gold text-2xl leading-none bg-transparent border-none cursor-pointer transition-colors duration-200"
        >
          ×
        </button>

        <p className="text-gold text-[0.68rem] tracking-[0.3em] uppercase mb-4">
          About Hudiccon
        </p>
        <h2 className="text-2xl md:text-3xl font-normal leading-snug mb-6 text-[#f0ede6]">
          About Humanitarian Development Concern Centre
        </h2>
        <div className="w-12 h-0.5 bg-gold mb-8" />

        <div className="flex flex-col gap-5 text-muted leading-[1.9] text-base">
          <p>
            Humanitarian Development Concern Centre (hudiccon) is a
            community-focused, non-profit organization committed to
            promoting sustainable development, social inclusion, and the
            well-being of vulnerable individuals and communities.
          </p>
          <p>
            Our work focuses on empowering women and young people,
            promoting gender equality, strengthening civic participation,
            and supporting community health and development initiatives.
            Through community engagement, advocacy, partnerships, and
            humanitarian interventions, we seek to address social
            challenges and create opportunities for individuals to
            improve their livelihoods and participate meaningfully in
            community development.
          </p>
          <p>
            We work to connect communities with relevant stakeholders,
            including government institutions, development partners,
            civil society organizations, and local leaders, to promote
            inclusive and sustainable solutions.
          </p>
          <p>
            At hudiccon, we believe that lasting development is built
            through empowered communities, accountable leadership, equal
            opportunities, and collective action.
          </p>
        </div>
      </div>
    </div>
  );
}
