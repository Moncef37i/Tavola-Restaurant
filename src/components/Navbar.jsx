import { useState } from "react";
import { useCart } from "../context/CartContext";

const NAV_ITEMS = [
  {
    label: "Home", page: "home",
    gradient: "radial-gradient(circle, rgba(201,168,76,0.25) 0%, rgba(201,168,76,0.08) 50%, rgba(201,168,76,0) 100%)",
    activeColor: "#c9a84c",
    icon: () => (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    label: "Menu", page: "menu",
    gradient: "radial-gradient(circle, rgba(201,168,76,0.25) 0%, rgba(201,168,76,0.08) 50%, rgba(201,168,76,0) 100%)",
    activeColor: "#c9a84c",
    icon: () => (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 6h18M3 12h18M3 18h18"/>
      </svg>
    ),
  },
  {
    label: "About", page: "about",
    gradient: "radial-gradient(circle, rgba(201,168,76,0.25) 0%, rgba(201,168,76,0.08) 50%, rgba(201,168,76,0) 100%)",
    activeColor: "#c9a84c",
    icon: () => (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
  },
  {
    label: "Contact", page: "contact",
    gradient: "radial-gradient(circle, rgba(201,168,76,0.25) 0%, rgba(201,168,76,0.08) 50%, rgba(201,168,76,0) 100%)",
    activeColor: "#c9a84c",
    icon: () => (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
];

export default function Navbar({ setPage, setCartOpen, currentPage }) {
  const { count } = useCart();
  const [hovered, setHovered] = useState(null);

  return (
    <nav className="navbar">
      <div className="nav-inner">
        {/* Logo */}
        <button className="nav-logo" onClick={() => setPage("home")}>
          <span className="logo-icon">✦</span>
          <span className="logo-text">TAVOLA</span>
        </button>

        {/* Glow Menu — gold-themed to match site */}
        <div className="glow-nav">
          <ul className="glow-nav-list">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.page;
              const isHovered = hovered === item.label;
              const lit = isActive || isHovered;

              return (
                <li key={item.label} className="glow-nav-item">
                  <button
                    className={`glow-nav-btn ${isActive ? "glow-active" : ""}`}
                    onClick={() => setPage(item.page)}
                    onMouseEnter={() => setHovered(item.label)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {/* Gold glow blob */}
                    <span
                      className="glow-blob"
                      style={{
                        background: item.gradient,
                        opacity: lit ? 1 : 0,
                        transform: lit ? "scale(2.2)" : "scale(0.6)",
                      }}
                    />
                    {/* Active underline bar */}
                    {isActive && <span className="glow-active-bar" />}

                    {/* flip front */}
                    <span className={`glow-face glow-front ${isHovered ? "glow-flip-out" : ""}`}
                      style={{ color: isActive ? "var(--gold)" : undefined }}>
                      <Icon />
                      <span>{item.label}</span>
                    </span>
                    {/* flip back */}
                    <span className={`glow-face glow-back ${isHovered ? "glow-flip-in" : ""}`}
                      style={{ color: "var(--gold)" }}>
                      <Icon />
                      <span>{item.label}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Cart */}
        <button className="cart-btn" onClick={() => setCartOpen(true)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
          <span className="cart-label">Cart</span>
          {count > 0 && <span className="cart-badge">{count}</span>}
        </button>
      </div>
    </nav>
  );
}
