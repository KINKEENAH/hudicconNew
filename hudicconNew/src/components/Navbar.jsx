// import { useState, useEffect } from "react";
// import { scrollTo } from "../utils/scrollTo";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const navLinks = ["home", "about", "mission", "events", "contact"];

//   return (
//     <nav style={{
//       position: "fixed", top: 0, width: "100%", zIndex: 100,
//       background: scrolled ? "rgba(10,10,15,0.93)" : "transparent",
//       backdropFilter: scrolled ? "blur(14px)" : "none",
//       borderBottom: scrolled ? "1px solid rgba(200,170,100,0.15)" : "none",
//       transition: "all 0.4s ease",
//       boxSizing: "border-box", padding: "0 2.5rem",
//     }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", height: 72 }}>
        
//         {/* Logo */}
//         <div
//           onClick={() => scrollTo("home")}
//           style={{ fontSize: "1.4rem", fontWeight: 700, letterSpacing: "0.1em", color: "#c8aa64", cursor: "pointer" }}
//         >
//           HUDICCON
//         </div>

//         {/* Desktop Links */}
//         <div style={{ display: "flex", gap: "2.5rem" }}>
//           {navLinks.map(link => (
//             <button key={link} onClick={() => scrollTo(link)} style={{
//               background: "none", border: "none", cursor: "pointer",
//               color: "#c8c0b0", fontSize: "0.8rem", letterSpacing: "0.14em",
//               textTransform: "uppercase", fontFamily: "'Georgia', serif",
//               transition: "color 0.2s", padding: 0,
//             }}
//             onMouseEnter={e => (e.target.style.color = "#c8aa64")}
//             onMouseLeave={e => (e.target.style.color = "#c8c0b0")}
//             >{link}</button>
//           ))}
//         </div>

//         {/* Join Us CTA */}
//         <button onClick={() => scrollTo("contact")} style={{
//           background: "transparent", border: "1px solid #c8aa64", color: "#c8aa64",
//           padding: "0.5rem 1.4rem", fontSize: "0.75rem", letterSpacing: "0.1em",
//           textTransform: "uppercase", cursor: "pointer", fontFamily: "'Georgia', serif",
//           transition: "all 0.2s",
//         }}
//         onMouseEnter={e => { e.target.style.background = "#c8aa64"; e.target.style.color = "#0a0a0f"; }}
//         onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#c8aa64"; }}
//         >Join Us</button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div style={{ background: "rgba(10,10,15,0.97)", padding: "1.5rem 2rem 2rem", borderTop: "1px solid rgba(200,170,100,0.2)" }}>
//           {navLinks.map(link => (
//             <button key={link} onClick={() => { scrollTo(link); setIsOpen(false); }} style={{
//               display: "block", width: "100%", textAlign: "left",
//               padding: "0.75rem 0", color: "#c8c0b0", background: "none", border: "none",
//               borderBottom: "1px solid rgba(255,255,255,0.05)",
//               letterSpacing: "0.12em", textTransform: "uppercase",
//               fontSize: "0.9rem", cursor: "pointer", fontFamily: "'Georgia', serif",
//             }}>{link}</button>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// }

import { useState, useEffect } from "react";
import { scrollTo } from "../utils/scrollTo";

const navLinks = ["home", "about", "mission", "events", "contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-10 box-border
        ${scrolled
          ? "bg-[rgba(10,10,15,0.93)] backdrop-blur-md border-b border-[rgba(200,170,100,0.15)]"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between h-18">

        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="text-gold text-xl font-bold tracking-widest cursor-pointer bg-transparent border-none font-serif"
        >
          HUDICCON
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10">
          {navLinks.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="bg-transparent border-none text-[#c8c0b0] hover:text-gold text-xs tracking-widest uppercase cursor-pointer font-serif transition-colors duration-200"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Join Us — desktop */}
        <button
          onClick={() => scrollTo("contact")}
          className="hidden md:block border border-gold text-gold hover:bg-gold hover:text-dark px-5 py-2 text-xs tracking-widest uppercase cursor-pointer font-serif transition-all duration-200 bg-transparent"
        >
          Join Us
        </button>

        {/* Hamburger — mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gold text-2xl bg-transparent border-none cursor-pointer"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[rgba(10,10,15,0.97)] border-t border-[rgba(200,170,100,0.2)] px-6 pb-6">
          {navLinks.map(link => (
            <button
              key={link}
              onClick={() => { scrollTo(link); setIsOpen(false); }}
              className="block w-full text-left py-3 text-[#c8c0b0] hover:text-gold border-b border-[rgba(255,255,255,0.05)] text-sm tracking-widest uppercase cursor-pointer font-serif bg-transparent border-l-0 border-r-0 border-t-0 transition-colors duration-200"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
