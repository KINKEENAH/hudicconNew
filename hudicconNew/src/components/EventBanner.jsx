import { useEffect, useState } from "react";
import { scrollTo } from "../utils/scrollTo";
import { getFeaturedEvents } from "../api/api";

const fallback = {
  title: "Hudiccon Annual Summit 2025",
  event_date: "2025-05-15",
  location: "Accra, Ghana",
};

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function EventBanner() {
  const [event, setEvent] = useState(fallback);

  useEffect(() => {
    getFeaturedEvents()
      .then(res => {
        if (res.data && res.data.length > 0) setEvent(res.data[0]);
      })
      .catch(() => {
        console.warn("Events API unavailable, using fallback.");
      });
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-6 mb-24">
      <div className="bg-linear-to-br from-[rgba(200,170,100,0.13)] to-[rgba(200,170,100,0.04)] border border-[rgba(200,170,100,0.25)] px-8 md:px-14 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

        <div>
          <p className="text-gold text-[0.68rem] tracking-[0.3em] uppercase mb-3">
            Next Event
          </p>
          <h3 className="text-3xl font-normal text-[#f0ede6] mb-2">
            {event.title}
          </h3>
          <p className="text-[#7a7268] text-sm tracking-wide">
            {formatDate(event.event_date)} · {event.location}
          </p>
        </div>

        <button
          onClick={() => scrollTo("contact")}
          className="bg-gold text-dark border-none px-9 py-4 text-xs tracking-widest uppercase cursor-pointer font-serif hover:opacity-85 transition-opacity duration-200 whitespace-nowrap shrink-0"
        >
          Register Now →
        </button>
      </div>
    </section>
  );
}