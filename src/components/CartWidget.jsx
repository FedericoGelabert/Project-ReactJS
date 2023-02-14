import { useCart } from './CartContext'

const CartWidget = () => {

    const { allProducts } = useCart()

    return (
        <div className='cart-widget-container'>
            <p style={{ color: 'black', textDecoration: 'none' }}>{allProducts() || ""}</p>
            <span style={{ color: 'black' }} className="material-icons">shopping_cart</span>
        </div>
    )
}

export default CartWidget