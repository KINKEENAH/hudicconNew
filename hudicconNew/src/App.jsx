import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import SplitSection from "./components/SplitSection";
import Programs from "./components/Programs";
import EventBanner from "./components/EventBanner";
import PastEvents from "./components/PastEvents";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AboutModal from "./components/AboutModal";
import Vision from "./components/Vision";
import JoinUs from "./components/JoinUs";

const aboutSection = {
  id: "about",
  imgSrc:
    "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=900&auto=format&fit=crop",
  imgAlt: "Community support",
  tag: "About Hudiccon",
  title: "A Non-Governmental\nOrganization Dedicated\nto Community",
  body: "Humanitarian Development Concern Centre (hudiccon) is a non-profit organization dedicated to empowering communities, promoting gender equality, supporting youth leadership, and advancing humanitarian and community development initiatives. Through advocacy, partnerships, and community-driven interventions, we work toward a more inclusive and sustainable future.",
  reverse: false,
};

const missionSection = {
  id: "mission",
  imgSrc:
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=900&auto=format&fit=crop",
  imgAlt: "Education and health",
  tag: "Our Mission",
  title: "Empowerment Through\nInclusive Development",
  body: "To empower vulnerable individuals and communities through inclusive development initiatives, humanitarian interventions, advocacy, and strategic partnerships that promote social justice, gender equality, sustainable livelihoods, and improved quality of life.",
  reverse: true,
};

const sections = [
  {
    id: "events",
    imgSrc:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=900&auto=format&fit=crop",
    imgAlt: "Conference and events",
    tag: "Events",
    title: "Connecting Leaders\nThrough Meaningful\nGatherings",
    body: "From annual summits to local workshops, our events bring together passionate changemakers to share knowledge, forge partnerships, and drive collective action toward a more equitable world.",
    reverse: false,
    cta: { href: "#events", label: "View Events" },
  },
];

export default function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <div className="bg-dark text-[#f0ede6] font-serif min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <SplitSection
        {...aboutSection}
        cta={{ label: "Learn More", onClick: () => setIsAboutOpen(true) }}
      />
      <SplitSection {...missionSection} />
      <Vision />
      {sections.map((section) => (
        <SplitSection key={section.id} {...section} />
      ))}
      <Programs />
      <EventBanner />
      <PastEvents />
      <JoinUs />
      <Contact />
      <Footer />
      <AboutModal open={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </div>
  );
}
