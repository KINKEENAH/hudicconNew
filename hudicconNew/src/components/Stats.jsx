import { useEffect, useState } from "react";
import useFadeIn from "../hooks/useFadeIn";
import { getStats } from "../api/api";

const fallback = [
  { id: 1, value: "500+", label: "Members Worldwide" },
  { id: 2, value: "40+",  label: "Events Hosted" },
  { id: 3, value: "12",   label: "Countries Reached" },
  { id: 4, value: "3",    label: "Years of Impact" },
];

export default function Stats() {
  const ref = useFadeIn();
  const [stats, setStats] = useState(fallback);

  useEffect(() => {
    getStats()
      .then(res => {
        if (res.data && res.data.length > 0) setStats(res.data);
      })
      .catch(() => {
        console.warn("Stats API unavailable, using fallback data.");
      });
  }, []);

  return (
    <div
      ref={ref}
      className="opacity-0 translate-y-10 transition-all duration-700 ease-out"
      style={{
        borderTop: "1px solid rgba(200,170,100,0.15)",
        borderBottom: "1px solid rgba(200,170,100,0.15)",
        padding: "4rem 2rem",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))", gap: "2.5rem", textAlign: "center" }}>
        {stats.map((stat) => (
          <div key={stat.id}>
            <div style={{ fontSize: "2.8rem", fontWeight: 300, color: "#c8aa64", letterSpacing: "-0.02em" }}>{stat.value}</div>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#5a5248", marginTop: 8 }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}