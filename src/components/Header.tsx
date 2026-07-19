import { useState } from "react";
import { useCart } from "../context/cartcontext";

function Header() {
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>

      <div className="topbar">

        <div className="logo">
          🧸 Tingu Mingu
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search for products..."
          />
        </div>

        <div className="header-icons">

          <button className="login-btn">
            Login
          </button>

          <button className="cart-btn">
            🛒 {cart.length}
          </button>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>

      </div>

      <nav className={menuOpen ? "navbar active" : "navbar"}>

        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Toys</a>
        <a href="#">Contact</a>

      </nav>

    </header>
  );
}

export default Header;