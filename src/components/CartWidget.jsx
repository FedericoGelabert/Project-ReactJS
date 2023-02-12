import { NavLink } from 'react-router-dom';
import { useCart } from './CartContext'

const CartWidget = () => {

    const { allProducts } = useCart()

    return (
        <div className='cart-widget-container'>
            <p style={{ color: 'black', textDecoration: 'none' }}>{allProducts() || ""}</p>
            <NavLink to="/cart" className='cart-widget-a'>
                <span style={{ color: 'black' }} className="material-icons">shopping_cart</span>
            </NavLink>
        </div>
    )
}

export default CartWidget