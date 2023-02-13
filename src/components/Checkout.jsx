
import { useCart } from "./CartContext";

const Checkout = () => {

    const { cart, allProducts, subTotalPrice } = useCart()
    const shipping = 49.99

    return (
        <div>
            <h2 className="cart-container">Checkout</h2>
            <div className="space"></div>
            <div className="checkout-container">
                <div className="checkout-inputs-container">
                    <div className="checkout-inputs-header">
                        <h4>Payment Information</h4>
                    </div>
                    <hr style={{marginBottom:'15px'}}/>
                    <div className="checkout-inputs">
                        <input type="text" placeholder="Name" required />
                        <input type="text" placeholder="Surname" required />
                        <input type="tel" placeholder="Phone Number" required />
                        <input type="email" placeholder="Email" required />
                        <input type="email" placeholder="Repeat email" required />
                    </div>
                    <div className="checkout-submit">
                        <input type="submit" placeholder="Sumbit"/>
                    </div>
                </div>
                <div className="checkout-details-container">
                    <div>
                        <div className="checkout-details-header">
                            <h4>Cart Details</h4>
                            <p>Item(s): <strong>{allProducts()}</strong></p>
                        </div>
                        <hr />
                        {cart.map((product) => {
                            return (
                                <div className="checkout-details-products" key={product.id}>
                                    <img src={product.img} alt={product.name}></img>
                                    <div className="checkout-details-products-info">
                                        <div className="checkout-details-products-name-price">
                                            <p className="checkout-details-products-name">{product.name}</p>
                                            <strong className="checkout-details-products-price">${product.price}</strong>
                                        </div>
                                        <strong className="checkout-details-quantity">{product.quantity}</strong>
                                    </div>
                                </div>
                            )
                        })
                        }
                        <div className="checkout-details-price">
                            <div>
                                <p>Sub-total: </p>
                                <strong>${subTotalPrice().toFixed(2)}</strong>
                            </div>
                            <div>
                                <p style={{ color: 'rgba(150,150,150)' }}>Shipping: </p>
                                <p style={{ color: 'rgba(150,150,150)' }}>${shipping}</p>
                            </div>
                            <hr />
                            <div>
                                <p>Total: </p>
                                <strong>${subTotalPrice() + shipping}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space"></div>
        </div>
    )
}

export default Checkout;