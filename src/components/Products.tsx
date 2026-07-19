import men from "../assets/images/men.jpg";
import women from "../assets/images/women.jpg";
import kids from "../assets/images/kids.jpg";
import toys from "../assets/images/toy.jpg";

import { useCart } from "../context/cartcontext";

function Products() {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Men Collection",
      price: "$50",
      oldPrice: "$70",
      image: men,
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      id: 2,
      name: "Women Collection",
      price: "$60",
      oldPrice: "$80",
      image: women,
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      id: 3,
      name: "Kids Collection",
      price: "$35",
      oldPrice: "$50",
      image: kids,
      rating: "⭐⭐⭐⭐"
    },
    {
      id: 4,
      name: "Toy Collection",
      price: "$25",
      oldPrice: "$40",
      image: toys,
      rating: "⭐⭐⭐⭐⭐"
    }
  ];

  return (
    <section className="products">

      <h2>Featured Products</h2>

      <div className="product-grid">

        {products.map((product) => (

          <div className="product-card" key={product.id}>

            <span className="sale">SALE</span>

            <img
              src={product.image}
              alt={product.name}
            />

            <h3>{product.name}</h3>

            <p>{product.rating}</p>

            <div className="price">

              <span className="newPrice">
                {product.price}
              </span>

              <span className="oldPrice">
                {product.oldPrice}
              </span>

            </div>

            <button
              onClick={() => addToCart(product)}
            >
              Add To Cart
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Products;