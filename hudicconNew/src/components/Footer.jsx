import { scrollTo } from "../utils/scrollTo";

const navLinks = ["home", "about", "mission", "events", "contact"];

const socials = [
  { label: "Facebook", href: "https://facebook.com/hudiccon" },
  { label: "Instagram", href: "https://instagram.com/hudiccon" },
  { label: "Twitter", href: "https://twitter.com/hudiccon" },
  { label: "LinkedIn", href: "https://linkedin.com/company/hudiccon" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gold-dim py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Logo & Tagline */}
        <div>
          <div className="text-gold text-lg font-bold tracking-[0.15em] mb-3">
            HUDICCON
          </div>
          <p className="text-[#4a4840] text-xs leading-relaxed tracking-wide">
            Humananitarian Development Concern center. Building sustainable
            futures together.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-gold text-[0.65rem] tracking-[0.25em] uppercase mb-4">
            Quick Links
          </p>
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="bg-transparent border-none text-[#4a4840] hover:text-gold text-[0.7rem] tracking-[0.15em] uppercase cursor-pointer font-serif transition-colors duration-200 text-left"
              >
                {link}
              </button>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <p className="text-gold text-[0.65rem] tracking-[0.25em] uppercase mb-4">
            Contact
          </p>
          <div className="flex flex-col gap-3 text-[#4a4840] text-xs tracking-wide leading-relaxed">
            <p>📧 info@hudiccon.org</p>
            <p>📞 +233 20 000 0000</p>
            <p>
              📍 123 Community Street
              <br />
              Kumasi, Ghana
            </p>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <p className="text-gold text-[0.65rem] tracking-[0.25em] uppercase mb-4">
            Follow Us
          </p>
          <div className="flex flex-col gap-3">
            {socials.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-[#4a4840] hover:text-gold text-[0.7rem] tracking-[0.15em] uppercase transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto border-t border-[rgba(200,170,100,0.12)] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#3a3830] text-xs tracking-wide">
          © 2025 Hudiccon. All rights reserved.
        </p>
        <p className="text-[#3a3830] text-xs tracking-wide">
          Built with purpose. Driven by impact.
        </p>
      </div>
    </footer>
  );
}
