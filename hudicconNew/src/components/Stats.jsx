import { useEffect, useState } from "react";
import useFadeIn from "../hooks/useFadeIn";
import { getStats } from "../api/api";

// Shown whenever there's no verified stats data yet — true, non-numeric
// focus areas instead of a bare gap or a fabricated number.
const focusAreas = [
  "Gender Equality",
  "Youth Leadership",
  "Governance & Advocacy",
  "Community Health",
  "Humanitarian Development",
];

export default function Stats() {
  const ref = useFadeIn();
  const [stats, setStats] = useState([]);

  useEffect(() => {
    getStats()
      .then(res => {
        if (res.data && res.data.length > 0) setStats(res.data);
      })
      .catch(() => {
        console.warn("Stats API unavailable — showing focus areas instead.");
      });
  }, []);

  return (
    <div
      ref={ref}
      className="opacity-0 translate-y-10 transition-all duration-700 ease-out"
      style={{
        borderTop: "1px solid rgba(200,170,100,0.15)",
        borderBottom: "1px solid rgba(200,170,100,0.15)",
        padding: stats.length > 0 ? "4rem 2rem" : "2.5rem 2rem",
      }}
    >
      {stats.length > 0 ? (
        <div style={{ maxWidth: 960, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))", gap: "2.5rem", textAlign: "center" }}>
          {stats.map((stat) => (
            <div key={stat.id}>
              <div style={{ fontSize: "2.8rem", fontWeight: 300, color: "#c8aa64", letterSpacing: "-0.02em" }}>{stat.value}</div>
              <div style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#5a5248", marginTop: 8 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            maxWidth: 960,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.9rem",
          }}
        >
          {focusAreas.map((area, i) => (
            <span key={area} style={{ display: "flex", alignItems: "center", gap: "0.9rem" }}>
              <span
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#c8aa64",
                }}
              >
                {area}
              </span>
              {i < focusAreas.length - 1 && (
                <span style={{ color: "#4a4840" }}>·</span>
              )}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
