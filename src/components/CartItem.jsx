import { useCart } from "./CartContext"

const CartItem = ({ product }) => {

    const { removeProduct } = useCart()

    return (
            <div key={product.id} className="cart-card">
                <button onClick={()=>{removeProduct(product.id)}}>Remove product</button>
                <img src={product.img} alt={product.name}></img>
                <div className="cart-card-info">
                    <div className="cart-card-name" style={{ display: 'flex', flexDirection: 'column', margin: 10 }}>
                        <p>{product.name}</p>
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
                        <p>Subtotal: </p>
                        <span>${product.quantity * product.price}</span>
                    </div>
                </div>
            </div>
    )
}

export default CartItem;