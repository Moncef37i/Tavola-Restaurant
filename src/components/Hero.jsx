export default function Hero({ setPage }) {
  return (
    <section className="hero">
      {/* Full-bleed background photo */}
      <div className="hero-bg-photo">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=85"
          alt="Fine dining"
        />
        <div className="hero-bg-overlay" />
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-badge">
          <span>⭐</span> Rated #1 in the City 2025
        </div>

        <h1 className="hero-title">
          Fine Dining,<br />
          <span className="hero-accent">Redefined</span>
        </h1>

        <p className="hero-sub">
          From hand-rolled pasta to wagyu beef — every dish is crafted with intention,
          served with soul, and built to be unforgettable.
        </p>

        <div className="hero-cta">
          <button className="btn-primary" onClick={() => setPage("menu")}>
            Explore Menu
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <button className="btn-ghost" onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}>
            Learn More
          </button>
        </div>

        <div className="hero-stats">
          {[
            { val: "28+",   label: "Menu Items" },
            { val: "4.9★",  label: "Avg Rating" },
            { val: "15min", label: "Avg Delivery" },
          ].map((s) => (
            <div className="stat" key={s.label}>
              <strong>{s.val}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
