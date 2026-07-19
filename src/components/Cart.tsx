import { useCart } from "../context/cartcontext.tsx"


function Cart() {

  const { cart } = useCart()


  return (
    <section className="cart">

      <h2>Your Cart</h2>


      {cart.length === 0 ? (

        <p>
          Your cart is empty
        </p>

      ) : (

        <div>

          {cart.map((product, index) => (

            <div className="cart-item" key={index}>

              <img 
                src={product.image}
                alt={product.name}
              />

              <h3>
                {product.name}
              </h3>

              <p>
                {product.price}
              </p>

            </div>

          ))}

        </div>

      )}


    </section>
  )
}


export default Cart