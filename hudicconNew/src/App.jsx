import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import SplitSection from "./components/SplitSection";
import Pillars from "./components/Pillars";
import EventBanner from "./components/EventBanner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const sections = [
  {
    id: "about",
    imgSrc:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=900&auto=format&fit=crop",
    imgAlt: "Community support",
    tag: "About Hudiccon",
    title: "A Non-Governmental\nOrganization Dedicated\nto Community",
    body: "Hudiccon is dedicated to community development and human empowerment. We work hand-in-hand with local communities to build sustainable futures through education, health initiatives, and economic empowerment programs.",
    reverse: false,
    cta: { href: "#about", label: "Learn More" },
  },
  {
    id: "mission",
    imgSrc:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=900&auto=format&fit=crop",
    imgAlt: "Education and health",
    tag: "Our Mission",
    title: "Improving Education,\nHealth & Empowerment",
    body: "We partner with individuals, families, and institutions to improve access to quality education and healthcare. Our mission is to remove barriers and create pathways to lasting personal and community transformation.",
    reverse: true,
    cta: { href: "#mission", label: "Our Mission" },
  },
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
  return (
    <div className="bg-dark text-[#f0ede6] font-serif min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      {sections.map((section) => (
        <SplitSection key={section.id} {...section} />
      ))}
      <Pillars />
      <EventBanner />
      <Contact />
      <Footer />
    </div>
  );
}
