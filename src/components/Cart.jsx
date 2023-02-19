import CartItem from "./CartItem";
import Checkout from "./Checkout";
import { useCart } from "./CartContext"
import { Link } from "react-router-dom";

const Cart = () => {

    const { cart, clearCart, notProducts, allProducts } = useCart()

    return (
        <div>
            <h2 className="cart-container">Cart</h2>
            <div className="cart-header">
                <div className="cart-header-title">
                    <span style={{ color: 'black' }} className="material-icons">shopping_cart</span>
                    <h3>Shopping Cart</h3>
                </div>
                <div className="cart-header-items">
                    <p className="cart-remove-all" onClick={clearCart}>Remove all Products</p>
                    <p className="items-in-cart">Cart Item(s): <span>{allProducts()}</span></p>
                </div>
            </div>
            <hr />
            {notProducts ?
                <div className="cart-no-product-container">
                    <img src="https://res.cloudinary.com/federicog/image/upload/v1676227889/react-project/empty-cart_gjnfxk.png" alt="Empty Cart" />
                    <p className="cart-no-product">Your cart is empty</p>
                    <Link to={'/'}><p className="cart-no-product-return">⬅ Return to Shop</p></Link>
                </div>
                : <div>
                    <div className="container-all-products">
                        {cart.map((product, index) => {
                            return (
                                <CartItem key={index} product={product} />
                            )
                        })
                        }
                    </div>
                    <Checkout />
                </div>
            }
        </div>
    )
}

export default Cart;