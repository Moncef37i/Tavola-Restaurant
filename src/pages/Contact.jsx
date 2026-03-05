import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", reason: "reservation", message: "" });
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  const reasons = [
    { value: "reservation",    label: "🍽️  Table Reservation" },
    { value: "private",        label: "🥂  Private Event" },
    { value: "feedback",       label: "⭐  Feedback" },
    { value: "general",        label: "✉️   General Enquiry" },
  ];

  const info = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      label: "Address",
      value: "14 Via della Vigna, Milan, IT 20121",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      label: "Hours",
      value: "Tue–Sun  12:00 – 14:30  ·  18:30 – 23:00",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.4 1.18 2 2 0 012.38.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
        </svg>
      ),
      label: "Phone",
      value: "+39 02 8765 4321",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      label: "Email",
      value: "hello@tavola-restaurant.com",
    },
  ];

  return (
    <div className="contact-page">

      {/* Hero */}
      <div className="contact-hero">
        <img
          src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1600&q=85"
          alt="Restaurant exterior at night"
          className="contact-hero-img"
        />
        <div className="contact-hero-overlay" />
        <div className="contact-hero-text">
          <span className="section-tag">Get in Touch</span>
          <h1>We'd love to<br /><span className="hero-accent">hear from you</span></h1>
          <p>Whether it's a table for two or a dinner for fifty — we're here.</p>
        </div>

        {/* Info cards floating over hero bottom */}
        <div className="contact-info-strip">
          {info.map((i) => (
            <div className="contact-info-card" key={i.label}>
              <span className="cic-icon">{i.icon}</span>
              <div>
                <span className="cic-label">{i.label}</span>
                <span className="cic-value">{i.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main body */}
      <div className="contact-body">

        {/* Form */}
        <div className="contact-form-wrap">
          <div className="contact-form-header">
            <span className="section-tag">Write to Us</span>
            <h2>Send a message</h2>
            <p>We reply within 24 hours. For urgent reservations, please call us directly.</p>
          </div>

          {sent ? (
            <div className="contact-sent">
              <div className="sent-icon">✓</div>
              <h3>Message sent!</h3>
              <p>Thank you, <strong>{form.name}</strong>. We'll be in touch at <strong>{form.email}</strong> very soon.</p>
              <button className="btn-ghost" onClick={() => { setSent(false); setForm({ name: "", email: "", reason: "reservation", message: "" }); }}>
                Send another message
              </button>
            </div>
          ) : (
            <div className="contact-form">
              {/* Reason selector */}
              <div className="reason-grid">
                {reasons.map((r) => (
                  <button
                    key={r.value}
                    className={`reason-btn ${form.reason === r.value ? "active" : ""}`}
                    onClick={() => setForm({ ...form, reason: r.value })}
                  >
                    {r.label}
                  </button>
                ))}
              </div>

              <div className="cf-row">
                <label className="cf-label">
                  Your Name
                  <input className="cf-input" type="text" placeholder="Marco Rossi" value={form.name} onChange={set("name")} />
                </label>
                <label className="cf-label">
                  Email Address
                  <input className="cf-input" type="email" placeholder="marco@example.com" value={form.email} onChange={set("email")} />
                </label>
              </div>

              <label className="cf-label">
                Message
                <textarea
                  className="cf-input cf-textarea"
                  placeholder="Tell us what's on your mind — a date, a party size, a special request..."
                  value={form.message}
                  onChange={set("message")}
                  rows={5}
                />
              </label>

              <button
                className="btn-primary contact-submit"
                onClick={handleSubmit}
                disabled={!form.name || !form.email || !form.message}
              >
                Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Map + Socials */}
        <div className="contact-right">
          {/* Embedded map */}
          <div className="contact-map-wrap">
            <iframe
              title="Tavola Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.924824640884!2d9.18551!3d45.46427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6aec34636a1%3A0xab7227bb8c3e4fca!2sMilan%2C%20Metropolitan%20City%20of%20Milan%2C%20Italy!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="320"
              style={{ border: 0, borderRadius: "16px", filter: "invert(0.9) hue-rotate(180deg) saturate(0.4) brightness(0.8)" }}
              allowFullScreen
              loading="lazy"
            />
          </div>

          {/* Social links */}
          <div className="contact-socials">
            <span className="socials-label">Find us online</span>
            <div className="socials-row">
              {[
                {
                  name: "Instagram", href: "#",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  ),
                },
                {
                  name: "TripAdvisor", href: "#",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/>
                    </svg>
                  ),
                },
                {
                  name: "Facebook", href: "#",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                    </svg>
                  ),
                },
              ].map((s) => (
                <a key={s.name} href={s.href} className="social-btn" aria-label={s.name}>
                  {s.icon}
                  <span>{s.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Opening note */}
          <div className="contact-note">
            <span className="note-dot" />
            <p>We are currently <strong>open</strong> — walk-ins welcome until 21:30</p>
          </div>
        </div>

      </div>
    </div>
  );
}
