import { useCart } from "../context/cartcontext";

function Header() {
  const { cart } = useCart();

  return (
    <header className="header">

      <div className="top-header">

        <div className="logo">
          🧸 Tingu Mingu
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search products..."
          />
        </div>

        <div className="header-buttons">

          <button className="loginBtn">
            Login
          </button>

          <button className="cartBtn">
            🛒 ({cart.length})
          </button>

        </div>

      </div>

      <nav className="navbar">
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