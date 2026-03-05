import { useCart } from "../context/CartContext";

export default function Cart({ isOpen, setIsOpen, setPage }) {
  const { cart, updateQty, removeFromCart, total, clearCart } = useCart();

  const handleCheckout = () => {
    setIsOpen(false);
    setPage("checkout");
  };

  return (
    <>
      <div className={`cart-overlay ${isOpen ? "visible" : ""}`} onClick={() => setIsOpen(false)} />
      <aside className={`cart-panel ${isOpen ? "open" : ""}`}>
        <div className="cart-head">
          <h2>Your Order</h2>
          <button className="cart-close" onClick={() => setIsOpen(false)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="cart-empty">
            <span>🛒</span>
            <p>Your cart is empty</p>
            <small>Add some delicious items from our menu</small>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="ci-photo-wrap">
                    <img src={item.photo} alt={item.name} className="ci-photo" />
                  </div>
                  <div className="ci-info">
                    <span className="ci-name">{item.name}</span>
                    <span className="ci-price">${(item.price * item.qty).toFixed(2)}</span>
                  </div>
                  <div className="ci-qty">
                    <button onClick={() => updateQty(item.id, item.qty - 1)}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                  </div>
                  <button className="ci-remove" onClick={() => removeFromCart(item.id)}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/>
                      <path d="M10 11v6M14 11v6M9 6V4h6v2"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-subtotal">
                <span>Subtotal</span><span>${total.toFixed(2)}</span>
              </div>
              <div className="cart-subtotal">
                <span>Service (10%)</span><span>${(total * 0.1).toFixed(2)}</span>
              </div>
              <div className="cart-total">
                <span>Total</span><strong>${(total * 1.1).toFixed(2)}</strong>
              </div>
              <button className="btn-checkout" onClick={handleCheckout}>
                Proceed to Checkout →
              </button>
              <button className="btn-clear" onClick={clearCart}>Clear Cart</button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
