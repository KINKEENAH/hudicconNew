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
        ${
          scrolled
            ? "bg-[rgba(10,10,15,0.93)] backdrop-blur-md border-b border-gold-dim"
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
          {navLinks.map((link) => (
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
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => {
                scrollTo(link);
                setIsOpen(false);
              }}
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
