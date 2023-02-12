import CartItem from "./CartItem";
import { useCart } from "./CartContext"

const Cart = () => {

    const { cart, clearCart, notProducts, allPrice, allProducts } = useCart()

    return (
        <div>
            <h2 className="cart-container">Cart</h2>
            <button onClick={clearCart}>Remove all Products</button>
            {notProducts ? <p className="cart-no-product">There isn't any product yet.</p> : ""}
            <div className="container-all-products">
                {cart.map((product) => {
                    return (
                        <CartItem key={product.id} product={product} />
                    )
                })
                }
                <hr></hr>
                <p>Total: ${allPrice()}</p>
                <p>Items: {allProducts()}</p>
            </div>
        </div>
    )
}

export default Cart;