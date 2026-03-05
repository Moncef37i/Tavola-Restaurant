import { useState, useEffect } from "react";
import CategoryCard from "../components/CategoryCard";
import FoodCard from "../components/FoodCard";
import { menuItems, categories } from "../assets/menuData";

export default function Menu({ initialCategory = "all", onCategoryChange }) {
  const [active, setActive] = useState(initialCategory);
  const [search, setSearch] = useState("");

  // Sync if parent pushes a new category (e.g. clicking from Home)
  useEffect(() => {
    setActive(initialCategory);
    setSearch("");
  }, [initialCategory]);

  const handleCategoryClick = (id) => {
    setActive(id);
    setSearch(""); // clear search when switching category
    onCategoryChange?.(id);
  };

  const filtered = menuItems.filter((item) => {
    const matchCat = active === "all" || item.category === active;
    // When searching, ignore category filter — search across everything
    if (search.trim()) {
      return (
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.desc.toLowerCase().includes(search.toLowerCase())
      );
    }
    return matchCat;
  });

  const activeCategoryLabel = categories.find((c) => c.id === active)?.label || "All Items";

  return (
    <div className="menu-page">
      {/* Hero with background photo */}
      <div className="menu-hero">
        <div className="menu-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=80"
            alt="Dishes"
          />
          <div className="menu-hero-overlay" />
        </div>
        <div className="menu-hero-content">
          <span className="section-tag">Our Menu</span>
          <h1>Crafted with Passion</h1>
          <p>Seasonal ingredients, timeless recipes, unforgettable flavours</p>

          <div className="search-wrap">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Search any dish..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />
            {search && (
              <button className="search-clear" onClick={() => setSearch("")}>✕</button>
            )}
          </div>
        </div>
      </div>

      <div className="menu-body">
        {/* Category bar */}
        <div className="categories-bar">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              active={!search && active === cat.id}
              onClick={() => handleCategoryClick(cat.id)}
            />
          ))}
        </div>

        {/* Results */}
        <div className="menu-results">
          <div className="results-info">
            {search ? (
              <span>{filtered.length} result{filtered.length !== 1 ? "s" : ""} for "<strong>{search}</strong>"</span>
            ) : (
              <span>{filtered.length} dish{filtered.length !== 1 ? "es" : ""} in <strong>{activeCategoryLabel}</strong></span>
            )}
            {!search && active !== "all" && (
              <button className="clear-filter" onClick={() => handleCategoryClick("all")}>
                Clear filter ✕
              </button>
            )}
            {search && (
              <button className="clear-filter" onClick={() => setSearch("")}>
                Clear search ✕
              </button>
            )}
          </div>

          {filtered.length === 0 ? (
            <div className="no-results">
              <span>🔍</span>
              <p>No dishes found</p>
              <small>Try a different search or category</small>
            </div>
          ) : (
            <div className="food-grid">
              {filtered.map((item) => (
                <FoodCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
