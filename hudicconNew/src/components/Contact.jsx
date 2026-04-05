import { useState } from "react";
import useFadeIn from "../hooks/useFadeIn";
import { submitContact } from "../api/api";

export default function Contact() {
  const ref = useFadeIn();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null); // 'success' | 'error' | 'loading'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await submitContact(form);
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

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

        <p className="text-muted leading-[1.9] mb-10">
          Ready to be part of something meaningful? Reach out and let's build lasting impact together.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="bg-transparent border border-[rgba(200,170,100,0.3)] text-[#f0ede6] placeholder-muted px-4 py-3 text-sm outline-none focus:border-gold transition-colors duration-200"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="bg-transparent border border-[rgba(200,170,100,0.3)] text-[#f0ede6] placeholder-muted px-4 py-3 text-sm outline-none focus:border-gold transition-colors duration-200"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            className="bg-transparent border border-[rgba(200,170,100,0.3)] text-[#f0ede6] placeholder-muted px-4 py-3 text-sm outline-none focus:border-gold transition-colors duration-200"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="bg-transparent border border-[rgba(200,170,100,0.3)] text-[#f0ede6] placeholder-muted px-4 py-3 text-sm outline-none focus:border-gold transition-colors duration-200 resize-none"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-gold text-dark px-12 py-4 text-sm tracking-widest uppercase hover:opacity-85 transition-opacity duration-200 disabled:opacity-50"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-center text-sm text-green-400 mt-2">
              Message sent! We'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-sm text-red-400 mt-2">
              Something went wrong. Please try again.
            </p>
          )}
        </form>

      </div>
    </section>
  );
}