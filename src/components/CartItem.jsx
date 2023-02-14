import { useCart } from "./CartContext"

const CartItem = ({ product, id }) => {

    const { removeProduct } = useCart()
    const subTotal = product.quantity * product.price

    return (
        <div>
            <div key={id} className="cart-card">
                <img src={product.img} alt={product.name}></img>
                <div className="cart-card-info">
                    <div className="cart-card-name" style={{ display: 'flex', flexDirection: 'column', margin: 10 }}>
                        <p>{product.name}</p>
                        <p className="cart-card-desc">{product.description}</p>
                        <p className="cart-card-remove" onClick={() => { removeProduct(product.id) }}>Remove product</p>
                    </div>
                    <div className="cart-card-quantity" style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', margin: 10 }}>
                        <p>Quantity: </p>
                        <span>{product.quantity}</span>
                    </div>
                    <div className="cart-card-price" style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', margin: 10 }}>
                        <p>Each: </p>
                        <span>${product.price}</span>
                    </div>
                    <div className="cart-card-subtotal" style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', margin: 10 }}>
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