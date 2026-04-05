// import useFadeIn from "../hooks/useFadeIn" 

// export default function Contact() {
//   const ref = useFadeIn();

//   return (
//     <section id="contact" ref={ref} style={{
//       opacity: 0, transform: "translateY(40px)",
//       transition: "opacity 0.7s ease, transform 0.7s ease",
//       padding: "6rem 2rem",
//       borderTop: "1px solid rgba(200,170,100,0.12)",
//       textAlign: "center",
//     }}>
//       <div style={{ maxWidth: 560, margin: "0 auto" }}>
//         <div style={{ fontSize: "0.68rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c8aa64", marginBottom: "1rem" }}>
//           Get In Touch
//         </div>
//         <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 400, marginBottom: "1rem" }}>Join the Movement</h2>
//         <div style={{ width: 48, height: 2, background: "#c8aa64", margin: "0 auto 1.5rem" }} />
//         <p style={{ color: "#8a8278", lineHeight: 1.9, marginBottom: "2.5rem" }}>
//           Ready to be part of something meaningful? Reach out and let's build lasting impact together.
//         </p>
//         <a href="mailto:info@hudiccon.org" style={{
//           display: "inline-block", background: "#c8aa64", color: "#0a0a0f",
//           padding: "1rem 3rem", fontSize: "0.82rem", letterSpacing: "0.12em",
//           textTransform: "uppercase", textDecoration: "none", transition: "opacity 0.2s",
//         }}
//         onMouseEnter={e => (e.target.style.opacity = 0.85)}
//         onMouseLeave={e => (e.target.style.opacity = 1)}
//         >Contact Us</a>
//       </div>
//     </section>
//   );
// }

import  useFadeIn  from "../hooks/useFadeIn";

export default function Contact() {
  const ref = useFadeIn();

  return (
    <section
      id="contact"
      ref={ref}
      className="opacity-0 translate-y-10 transition-all duration-700 ease-out border-t border-[rgba(200,170,100,0.12)] py-24 px-6 text-center"
    >
      <div className="max-w-xl mx-auto">

        <p className="text-gold text-[0.68rem] tracking-[0.3em] uppercase mb-4">
          Get In Touch
        </p>

        <h2 className="text-4xl md:text-5xl font-normal text-[#f0ede6] mb-4">
          Join the Movement
        </h2>

        <div className="w-12 h-0.5 bg-gold mx-auto mb-6" />

        <p className="text-[#8a8278] leading-[1.9] mb-10">
          Ready to be part of something meaningful? Reach out and let's build lasting impact together.
        </p>

        <a
          href="mailto:info@hudiccon.org"
          className="inline-block bg-gold text-dark px-12 py-4 text-sm tracking-widest uppercase no-underline hover:opacity-85 transition-opacity duration-200"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
