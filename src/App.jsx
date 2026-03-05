import { useState } from "react";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./components/Cart";
import "./index.css";

export default function App() {
  const [page, setPage] = useState("home");
  const [cartOpen, setCartOpen] = useState(false);
  const [menuCategory, setMenuCategory] = useState("all");

  const goToMenuCategory = (catId) => {
    setMenuCategory(catId);
    setPage("menu");
  };

  return (
    <CartProvider>
      <div className="app">
        <Navbar setPage={setPage} setCartOpen={setCartOpen} currentPage={page} />
        <Cart isOpen={cartOpen} setIsOpen={setCartOpen} setPage={setPage} />
        <main>
          {page === "home"     && <Home setPage={setPage} goToMenuCategory={goToMenuCategory} />}
          {page === "menu"     && <Menu initialCategory={menuCategory} onCategoryChange={setMenuCategory} />}
          {page === "about"    && <About />}
          {page === "contact"  && <Contact />}
          {page === "checkout" && <Checkout setPage={setPage} />}
        </main>
      </div>
    </CartProvider>
  );
}
