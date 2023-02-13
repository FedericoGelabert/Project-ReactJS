import CartItem from "./CartItem";
import { useCart } from "./CartContext"
import { Link } from "react-router-dom";

const Cart = () => {

    const { cart, clearCart, notProducts, subTotalPrice, allProducts } = useCart()
    const shipping = 49.99
    const totalPrice = subTotalPrice() + shipping

    console.log(cart)

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
                : ""
            }
            <div className="container-all-products">
                {cart.map((product, index) => {
                    return (
                        <CartItem key={index} product={product} />
                    )
                })
                }
                {
                    notProducts ? "" : <div className="cart-checkout">
                        <div className="checkout-img">
                            <img src="https://res.cloudinary.com/federicog/image/upload/v1676240472/react-project/46-466645_illustration-of-a-laptop-expertise-isometric-illustration-hd-removebg-preview_czkie0.png" alt="Razor Laptop"></img>
                        </div>
                        <div className="checkout-info">
                            <h4>Cart Totals</h4>
                            <div className="checkout-div">
                                <p>Sub-total: </p>
                                <p><strong>${subTotalPrice().toFixed(2)}</strong></p>
                            </div>
                            <div className="checkout-div">
                                <p style={{ color: 'rgba(150,150,150)' }}>Shipping: </p>
                                <p style={{ color: 'rgba(150,150,150)' }}>${shipping}</p>
                            </div>
                            <hr />
                            <div className="checkout-div">
                                <p>Total: </p>
                                <p><strong>${totalPrice.toFixed(2)}</strong></p>
                            </div>
                            <div className="checkout-container-button">
                                <Link to='/checkout'>
                                    <button className="checkout-button">Proceed to checkout</button>
                                </Link>
                                <img className="checkout-cards" src="https://res.cloudinary.com/federicog/image/upload/v1676238837/react-project/cards_jzjhvq.png" alt="Cards" />
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Cart;