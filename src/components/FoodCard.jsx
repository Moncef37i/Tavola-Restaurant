import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function FoodCard({ item }) {
  const { addToCart, cart } = useCart();
  const [added, setAdded] = useState(false);
  const inCart = cart.find((i) => i.id === item.id);

  const handleAdd = () => {
    addToCart(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  const badgeColors = {
    "Popular":       "badge-red",
    "Chef's Pick":   "badge-gold",
    "Premium":       "badge-dark",
    "Classic":       "badge-blue",
    "Daily Special": "badge-green",
    "Vegan":         "badge-green",
    "Spicy":         "badge-red",
    "Signature":     "badge-purple",
  };

  return (
    <div className="food-card">
      {/* Photo area */}
      <div className="food-photo-wrap">
        <img
          src={item.photo}
          alt={item.name}
          className="food-photo"
          loading="lazy"
        />
        <div className="food-photo-gradient" />
        {item.badge && (
          <span className={`food-badge ${badgeColors[item.badge] || "badge-blue"}`}>
            {item.badge}
          </span>
        )}
      </div>

      <div className="food-body">
        <div className="food-header">
          <h3 className="food-name">{item.name}</h3>
          <span className="food-price">${item.price.toFixed(2)}</span>
        </div>
        <p className="food-desc">{item.desc}</p>

        <div className="food-meta">
          <span className="food-rating">⭐ {item.rating}</span>
          <span className="food-time">⏱ {item.time}</span>
          {inCart && <span className="food-incart">✓ ×{inCart.qty} in cart</span>}
        </div>

        <button
          className={`add-btn ${added ? "added" : ""}`}
          onClick={handleAdd}
        >
          {added ? (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Added!
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
}
