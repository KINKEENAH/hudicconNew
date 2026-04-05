import useFadeIn from "../hooks/useFadeIn"


const stats = [
  ["500+", "Members Worldwide"],
  ["40+",  "Events Hosted"],
  ["12",   "Countries Reached"],
  ["3",    "Years of Impact"],
];

export default function Stats() {
  const ref = useFadeIn();

  return (
    <div ref={ref} style={{
      opacity: 0, transform: "translateY(30px)",
      transition: "opacity 0.7s ease, transform 0.7s ease",
      borderTop: "1px solid rgba(200,170,100,0.15)",
      borderBottom: "1px solid rgba(200,170,100,0.15)",
      padding: "4rem 2rem",
    }}>
      <div style={{ maxWidth: 960, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))", gap: "2.5rem", textAlign: "center" }}>
        {stats.map(([number, label]) => (
          <div key={label}>
            <div style={{ fontSize: "2.8rem", fontWeight: 300, color: "#c8aa64", letterSpacing: "-0.02em" }}>{number}</div>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#5a5248", marginTop: 8 }}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}