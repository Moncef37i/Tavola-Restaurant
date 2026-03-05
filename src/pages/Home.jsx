import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import FoodCard from "../components/FoodCard";
import { menuItems, categories } from "../assets/menuData";

const featured = menuItems.filter((i) => i.badge === "Chef's Pick" || i.badge === "Popular").slice(0, 4);
const highlights = categories.filter((c) => c.id !== "all").slice(0, 6);

export default function Home({ setPage, goToMenuCategory }) {
  return (
    <div className="home">
      <Hero setPage={setPage} />

      {/* Features */}
      <section className="features-section" id="features">
        <div className="section-inner">
          <div className="features-grid">
            {[
              { icon: "⚡", title: "Lightning Fast",  desc: "Orders prepared and delivered in under 20 minutes" },
              { icon: "👨‍🍳", title: "Master Chefs",   desc: "Michelin-trained culinary team crafting every dish" },
              { icon: "🌿", title: "Farm to Table",   desc: "Locally sourced, seasonal ingredients daily" },
              { icon: "✨", title: "Premium Quality", desc: "Only the finest ingredients make our menu" },
            ].map((f) => (
              <div className="feature-card" key={f.title}>
                <span className="feat-icon">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="home-section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Browse By</span>
            <h2>Menu Categories</h2>
          </div>
          <div className="category-scroll">
            {highlights.map((cat) => (
              <CategoryCard
                key={cat.id}
                category={cat}
                onClick={() => goToMenuCategory(cat.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="home-section featured-section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Highlights</span>
            <h2>Featured Dishes</h2>
            <button className="see-all" onClick={() => goToMenuCategory("all")}>View all →</button>
          </div>
          <div className="food-grid">
            {featured.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="cta-inner">
          <h2>Ready to Order?</h2>
          <p>Browse our full menu and build your perfect meal</p>
          <button className="btn-primary" onClick={() => goToMenuCategory("all")}>
            View Full Menu →
          </button>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <span className="logo-text">✦ TAVOLA</span>
          <p>Fine Italian dining, reimagined.</p>
          <small>© 2025 Tavola Restaurant. All rights reserved.</small>
        </div>
      </footer>
    </div>
  );
}
