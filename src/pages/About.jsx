export default function About() {
  const team = [
    { name: "Marco Ferretti",    role: "Head Chef & Founder",     photo: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80", bio: "Michelin-trained in Milan and Paris, Marco founded Tavola to bring the soul of Italian nonne into a modern kitchen." },
    { name: "Sophia Ricci",      role: "Pastry Chef",              photo: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400&q=80", bio: "Trained at Le Cordon Bleu, Sophia's desserts are the crescendo of every meal — precise, emotional, unforgettable." },
    { name: "Luca Bernardi",     role: "Sommelier & Bar Director", photo: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=400&q=80", bio: "With 12 years curating cellars across Europe, Luca's pairings transform a dinner into a full sensory journey." },
  ];

  const values = [
    { icon: "🌿", title: "Farm to Table",      desc: "Every ingredient is sourced within 150km. We visit our farmers weekly and adjust the menu with the seasons." },
    { icon: "🔥", title: "Open Fire Cooking",  desc: "Our centrepiece wood-fired oven hits 500°C. It's not just technique — it's the soul of everything we cook." },
    { icon: "🍷", title: "Natural Wine",        desc: "Our cellar holds 200+ labels from small biodynamic producers. No bulk, no shortcuts, only living wine." },
    { icon: "♻️", title: "Zero Waste Kitchen", desc: "Stems become stocks, shells become oils, scraps become staff meals. Nothing leaves our kitchen wasted." },
  ];

  return (
    <div className="about-page">

      {/* HERO */}
      <div className="about-hero">
        <img
          src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=1600&q=85"
          alt="Restaurant interior"
          className="about-hero-img"
        />
        <div className="about-hero-overlay" />
        <div className="about-hero-text">
          <span className="section-tag">Our Story</span>
          <h1>Born in a kitchen.<br /><span className="hero-accent">Built on passion.</span></h1>
          <p>Tavola opened in 2018 with one table, one chef, and one obsession: to cook food that makes people feel something.</p>
        </div>
      </div>

      <div className="about-body">

        {/* STORY */}
        <section className="about-section about-story">
          <div className="about-story-text">
            <span className="section-tag">The Beginning</span>
            <h2>A table for everyone</h2>
            <p>
              "Tavola" means table in Italian — and to us, the table is everything. It's where arguments are forgotten, 
              where love is declared, where children grow up and elders are celebrated. We exist to be worthy of those moments.
            </p>
            <p>
              Marco Ferretti left a three-star kitchen in Lyon to open something more intimate: a 40-cover restaurant in the city 
              where every guest feels like they're eating in someone's home. That feeling has never left us.
            </p>
            <div className="about-numbers">
              {[
                { n: "2018", label: "Founded" },
                { n: "40",   label: "Covers" },
                { n: "6",    label: "Years of Excellence" },
                { n: "1★",   label: "Michelin Star" },
              ].map((s) => (
                <div className="about-num" key={s.label}>
                  <strong>{s.n}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-story-photos">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=85"
              alt="Kitchen"
              className="story-photo story-photo-main"
            />
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80"
              alt="Chef at work"
              className="story-photo story-photo-small"
            />
          </div>
        </section>

        {/* VALUES */}
        <section className="about-section about-values-section">
          <div className="about-values-header">
            <span className="section-tag">How We Cook</span>
            <h2>What drives every dish</h2>
          </div>
          <div className="about-values-grid">
            {values.map((v) => (
              <div className="about-value-card" key={v.title}>
                <span className="value-icon">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TEAM */}
        <section className="about-section about-team-section">
          <div className="about-values-header">
            <span className="section-tag">The People</span>
            <h2>Faces behind the flavours</h2>
          </div>
          <div className="about-team-grid">
            {team.map((member) => (
              <div className="team-card" key={member.name}>
                <div className="team-photo-wrap">
                  <img src={member.photo} alt={member.name} className="team-photo" />
                  <div className="team-photo-fade" />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <span className="team-role">{member.role}</span>
                  <p>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* QUOTE STRIP */}
        <section className="about-quote">
          <blockquote>
            "Cooking is not a science. It is an act of memory, of love, of place."
          </blockquote>
          <cite>— Marco Ferretti, Head Chef</cite>
        </section>

      </div>
    </div>
  );
}
