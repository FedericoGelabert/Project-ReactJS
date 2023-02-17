import { useCart } from "./CartContext"

const CartItem = ({ product, id }) => {

    const { removeProduct } = useCart()
    const subTotal = product.quantity * product.price

    return (
        <div>
            <div key={id} className="cart-card">
                <div className="cart-card-info-res">

                <img src={product.img} alt={product.name}></img>
                <p className="cart-card-name-res">{product.name}</p>
                <p className="cart-card-desc-res">{product.description}</p>
                <p className="cart-card-remove-res" onClick={() => { removeProduct(product.id) }}>Remove product</p>
                </div>
                <div className="cart-card-info">
                    <div className="cart-card-name">
                        <p className="cart-card-name-prod">{product.name}</p>
                        <p className="cart-card-desc">{product.description}</p>
                        <p className="cart-card-remove" onClick={() => { removeProduct(product.id) }}>Remove product</p>
                    </div>
                    <div className="cart-card-quantity">
                        <p>Quantity: </p>
                        <span>{product.quantity}</span>
                    </div>
                    <div className="cart-card-price">
                        <p>Each: </p>
                        <span>${product.price}</span>
                    </div>
                    <div className="cart-card-subtotal">
                        <p>Total: </p>
                        <span>${subTotal.toFixed(2)}</span>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default CartItem;