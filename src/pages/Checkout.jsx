import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Checkout({ setPage }) {
  const { cart, total, clearCart } = useCart();
  const [step, setStep] = useState(1); // 1=details, 2=payment, 3=success
  const [form, setForm] = useState({
    name: "", email: "", phone: "", address: "",
    card: "", expiry: "", cvv: "", type: "dine-in"
  });

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const handleOrder = () => {
    clearCart();
    setStep(3);
  };

  const orderNum = Math.floor(Math.random() * 90000 + 10000);

  if (step === 3) {
    return (
      <div className="checkout-page">
        <div className="success-card">
          <div className="success-icon">✓</div>
          <h2>Order Confirmed!</h2>
          <p>Your order #{orderNum} has been received and is being prepared.</p>
          <div className="success-meta">
            <div><span>📍</span> Estimated time: <strong>18–25 min</strong></div>
            <div><span>📧</span> Confirmation sent to: <strong>{form.email || "your email"}</strong></div>
          </div>
          <button className="btn-primary" onClick={() => { setPage("home"); setStep(1); }}>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-inner">
        <div className="checkout-left">
          <div className="checkout-steps">
            {["Your Details", "Payment"].map((s, i) => (
              <div key={s} className={`step ${step === i + 1 ? "active" : step > i + 1 ? "done" : ""}`}>
                <span className="step-num">{step > i + 1 ? "✓" : i + 1}</span>
                <span>{s}</span>
              </div>
            ))}
          </div>

          {step === 1 && (
            <div className="form-section">
              <h2>Your Details</h2>

              <div className="type-toggle">
                {["dine-in", "takeaway", "delivery"].map((t) => (
                  <button
                    key={t}
                    className={`type-btn ${form.type === t ? "active" : ""}`}
                    onClick={() => setForm({ ...form, type: t })}
                  >
                    {t === "dine-in" ? "🍽️" : t === "takeaway" ? "🛍️" : "🚗"}{" "}
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </button>
                ))}
              </div>

              <div className="form-grid">
                <label>Full Name
                  <input type="text" placeholder="John Smith" value={form.name} onChange={set("name")} />
                </label>
                <label>Email
                  <input type="email" placeholder="john@example.com" value={form.email} onChange={set("email")} />
                </label>
                <label>Phone
                  <input type="tel" placeholder="+1 234 567 890" value={form.phone} onChange={set("phone")} />
                </label>
                {form.type === "delivery" && (
                  <label className="full">Delivery Address
                    <input type="text" placeholder="123 Main Street, City" value={form.address} onChange={set("address")} />
                  </label>
                )}
              </div>

              <button className="btn-primary" onClick={() => setStep(2)}>
                Continue to Payment →
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="form-section">
              <h2>Payment</h2>

              <div className="card-preview">
                <div className="card-chip">💳</div>
                <div className="card-num">{form.card || "•••• •••• •••• ••••"}</div>
                <div className="card-row">
                  <span>{form.name || "YOUR NAME"}</span>
                  <span>{form.expiry || "MM/YY"}</span>
                </div>
              </div>

              <div className="form-grid">
                <label className="full">Card Number
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    maxLength="19"
                    value={form.card}
                    onChange={(e) => {
                      let v = e.target.value.replace(/\D/g, "").substring(0, 16);
                      v = v.replace(/(.{4})/g, "$1 ").trim();
                      setForm({ ...form, card: v });
                    }}
                  />
                </label>
                <label>Expiry Date
                  <input
                    type="text"
                    placeholder="MM/YY"
                    maxLength="5"
                    value={form.expiry}
                    onChange={(e) => {
                      let v = e.target.value.replace(/\D/g, "").substring(0, 4);
                      if (v.length > 2) v = v.slice(0, 2) + "/" + v.slice(2);
                      setForm({ ...form, expiry: v });
                    }}
                  />
                </label>
                <label>CVV
                  <input type="text" placeholder="123" maxLength="3" value={form.cvv} onChange={set("cvv")} />
                </label>
              </div>

              <div className="btn-row">
                <button className="btn-ghost" onClick={() => setStep(1)}>← Back</button>
                <button className="btn-primary" onClick={handleOrder}>
                  Place Order · ${(total * 1.1).toFixed(2)}
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="checkout-right">
          <h3>Order Summary</h3>
          <div className="summary-items">
            {cart.map((item) => (
              <div className="summary-item" key={item.id}>
                <div className="si-photo-wrap"><img src={item.photo} alt={item.name} className="si-photo" /></div>
                <div className="si-info">
                  <span>{item.name}</span>
                  <small>×{item.qty}</small>
                </div>
                <span className="si-price">${(item.price * item.qty).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="summary-divider" />
          <div className="summary-row"><span>Subtotal</span><span>${total.toFixed(2)}</span></div>
          <div className="summary-row"><span>Service (10%)</span><span>${(total * 0.1).toFixed(2)}</span></div>
          <div className="summary-total"><span>Total</span><strong>${(total * 1.1).toFixed(2)}</strong></div>
        </div>
      </div>
    </div>
  );
}
