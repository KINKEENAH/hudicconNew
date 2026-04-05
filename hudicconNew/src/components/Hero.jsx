// import { scrollTo } from "../utils/scrollTo";
// import  useFadeIn  from "../hooks/useFadeIn";

// export default function Hero() {
//   const ref = useFadeIn();

//   return (
//     <section
//       id="home"
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* Background image */}
//       <img
//         src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1600&auto=format&fit=crop"
//         alt="Community"
//         style={{
//           position: "absolute",
//           inset: 0,
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//           filter: "brightness(0.28) saturate(0.7)",
//         }}
//       />

//       {/* Dark overlay */}
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           background:
//             "linear-gradient(120deg, rgba(10,10,15,0.88) 50%, rgba(10,10,15,0.4) 100%)",
//         }}
//       />

//       {/* Decorative vertical line */}
//       <div
//         style={{
//           position: "absolute",
//           top: "15%",
//           left: "5%",
//           width: 1,
//           height: "70%",
//           background:
//             "linear-gradient(to bottom, transparent, rgba(200,170,100,0.35), transparent)",
//         }}
//       />

//       {/* Content */}
//       <div
//         ref={ref}
//         style={{
//           opacity: 0,
//           transform: "translateY(40px)",
//           transition: "opacity 0.9s ease, transform 0.9s ease",
//           position: "relative",
//           zIndex: 2,
//           maxWidth: 720,
//           padding: "0 5rem",
//         }}
//       >
//         <div
//           style={{
//             fontSize: "0.68rem",
//             letterSpacing: "0.35em",
//             textTransform: "uppercase",
//             color: "#c8aa64",
//             marginBottom: "1.5rem",
//           }}
//         >
//           — Human Development & Community Connections —
//         </div>
//         <h1
//           style={{
//             fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
//             fontWeight: 400,
//             lineHeight: 1.08,
//             marginBottom: "1.5rem",
//           }}
//         >
//           Development for
//           <br />
//           <span style={{ color: "#c8aa64", fontStyle: "italic" }}>
//             Lasting Impact
//           </span>
//         </h1>
//         <div
//           style={{
//             width: 56,
//             height: 2,
//             background: "#c8aa64",
//             marginBottom: "1.8rem",
//           }}
//         />
//         <p
//           style={{
//             fontSize: "1.05rem",
//             color: "#9a9080",
//             lineHeight: 1.85,
//             maxWidth: 480,
//             marginBottom: "2.5rem",
//           }}
//         >
//           Partnering with people to improve education, health, and empowerment
//           across communities worldwide.
//         </p>
//         <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
//           <button
//             onClick={() => scrollTo("about")}
//             style={{
//               background: "#c8aa64",
//               color: "#0a0a0f",
//               border: "none",
//               padding: "0.95rem 2.5rem",
//               fontSize: "0.82rem",
//               letterSpacing: "0.1em",
//               textTransform: "uppercase",
//               cursor: "pointer",
//               fontFamily: "'Georgia', serif",
//               transition: "opacity 0.2s",
//             }}
//             onMouseEnter={(e) => (e.target.style.opacity = 0.85)}
//             onMouseLeave={(e) => (e.target.style.opacity = 1)}
//           >
//             Discover More
//           </button>

//           <button
//             onClick={() => scrollTo("events")}
//             style={{
//               background: "transparent",
//               color: "#f0ede6",
//               border: "1px solid rgba(240,237,230,0.3)",
//               padding: "0.95rem 2.5rem",
//               fontSize: "0.82rem",
//               letterSpacing: "0.1em",
//               textTransform: "uppercase",
//               cursor: "pointer",
//               fontFamily: "'Georgia', serif",
//               transition: "border-color 0.2s",
//             }}
//             onMouseEnter={(e) => (e.target.style.borderColor = "#c8aa64")}
//             onMouseLeave={(e) =>
//               (e.target.style.borderColor = "rgba(240,237,230,0.3)")
//             }
//           >
//             Our Events
//           </button>
//         </div>
//       </div>

//       {/* Scroll cue */}
//       <div
//         style={{
//           position: "absolute",
//           bottom: "2.5rem",
//           left: "50%",
//           transform: "translateX(-50%)",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           gap: 8,
//           color: "#4a4840",
//           fontSize: "0.65rem",
//           letterSpacing: "0.2em",
//           zIndex: 2,
//         }}
//       >
//         <span>SCROLL</span>
//         <div
//           style={{
//             width: 1,
//             height: 44,
//             background: "linear-gradient(to bottom, #c8aa64, transparent)",
//           }}
//         />
//       </div>
//     </section>
//   );
// }


import  useFadeIn  from "../hooks/useFadeIn";
import { scrollTo } from "../utils/scrollTo";

export default function Hero() {
  const ref = useFadeIn();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1600&auto=format&fit=crop"
        alt="Community"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.28] saturate-[0.7]"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[rgba(10,10,15,0.88)] via-[rgba(10,10,15,0.7)] to-[rgba(10,10,15,0.4)]" />

      {/* Decorative vertical line */}
      <div className="absolute left-[5%] top-[15%] w-px h-[70%] bg-gradient-to-b from-transparent via-[rgba(200,170,100,0.35)] to-transparent hidden md:block" />

      {/* Content */}
      <div
        ref={ref}
        className="relative z-10 max-w-2xl px-6 md:px-20 opacity-0 translate-y-10 transition-all duration-[900ms] ease-out"
      >
        <p className="text-gold text-[0.68rem] tracking-[0.35em] uppercase mb-6">
          — Human Development & Community Connections —
        </p>

        <h1 className="text-5xl md:text-7xl font-normal leading-[1.08] mb-6 text-[#f0ede6]">
          Development for<br />
          <span className="text-gold italic">Lasting Impact</span>
        </h1>

        {/* Gold divider */}
        <div className="w-14 h-0.5 bg-gold mb-7" />

        <p className="text-[#9a9080] text-lg leading-[1.85] max-w-md mb-10">
          Partnering with people to improve education, health, and empowerment across communities worldwide.
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => scrollTo("about")}
            className="bg-gold text-dark border-none px-10 py-4 text-sm tracking-widest uppercase cursor-pointer font-serif hover:opacity-85 transition-opacity duration-200"
          >
            Discover More
          </button>
          <button
            onClick={() => scrollTo("events")}
            className="bg-transparent text-[#f0ede6] border border-[rgba(240,237,230,0.3)] hover:border-gold px-10 py-4 text-sm tracking-widest uppercase cursor-pointer font-serif transition-colors duration-200"
          >
            Our Events
          </button>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-[#4a4840] text-[0.65rem] tracking-[0.2em]">SCROLL</span>
        <div className="w-px h-11 bg-linear-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
