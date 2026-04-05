// import { scrollTo } from "../utils/scrollTo";

// const navLinks = ["home", "about", "mission", "events", "contact"];

// export default function Footer() {
//   return (
//     <footer style={{ borderTop: "1px solid rgba(200,170,100,0.15)", padding: "3rem 2rem" }}>
//       <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>
//         <div style={{ fontSize: "1.1rem", fontWeight: 700, letterSpacing: "0.15em", color: "#c8aa64" }}>HUDICCON</div>
//         <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
//           {navLinks.map(link => (
//             <button key={link} onClick={() => scrollTo(link)} style={{
//               background: "none", border: "none", cursor: "pointer",
//               color: "#4a4840", fontSize: "0.7rem", letterSpacing: "0.15em",
//               textTransform: "uppercase", fontFamily: "'Georgia', serif", transition: "color 0.2s",
//             }}
//             onMouseEnter={e => (e.target.style.color = "#c8aa64")}
//             onMouseLeave={e => (e.target.style.color = "#4a4840")}
//             >{link}</button>
//           ))}
//         </div>
//         <p style={{ color: "#3a3830", fontSize: "0.72rem", letterSpacing: "0.08em" }}>© 2025 Hudiccon. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }

import { scrollTo } from "../utils/scrollTo";

const navLinks = ["home", "about", "mission", "events", "contact"];

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(200,170,100,0.15)] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

        {/* Logo */}
        <div className="text-gold text-lg font-bold tracking-[0.15em]">
          HUDICCON
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-8">
          {navLinks.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="bg-transparent border-none text-[#4a4840] hover:text-gold text-[0.7rem] tracking-[0.15em] uppercase cursor-pointer font-serif transition-colors duration-200"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-[#3a3830] text-xs tracking-wide">
          © 2025 Hudiccon. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
