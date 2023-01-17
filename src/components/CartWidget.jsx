

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { itemsInCart } from './App'

const CartWidget = () => {


    const notify = () => {
        toast.info('You have ' + itemsInCart + ' items in the cart.', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
            })
    }

    return (
        <>
            <span className="material-icons" onClick={notify}>shopping_cart</span>
            <ToastContainer />
        </>
    )
}


export default CartWidget