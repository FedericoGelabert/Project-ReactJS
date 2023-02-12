import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const context = createContext()
const Provider = context.Provider

export const useCart = () => {
    const contextValue = useContext(context)
    return contextValue
}

const CustomProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [notProducts, setNotProducts] = useState(true)

    const addProduct = (product, quantity) => {
        toast.success('Product added.', {
            position: "bottom-right",
            autoClose: 1000,
            closeOnClick: true,
            theme: "dark",
        })
        if (isInCart(product.id)) {
            setCart(cart.map(prod => {
                return prod.id === product.id ? { ...product, quantity: prod.quantity + quantity } : product
            }))
        } else {
            setCart([...cart, { ...product, quantity }])
            setNotProducts(false)
        }

    }

    console.log(cart)

    const removeProduct = (id) => {
        toast.error('Product removed.', {
            position: "bottom-right",
            autoClose: 1000,
            closeOnClick: true,
            theme: "dark",
        })
        const filterProduct = cart.filter(product => product.id !== id) 
        setCart(filterProduct)
    }

    const clearCart = () => {
        toast.error('All products removed.', {
            position: "bottom-right",
            autoClose: 1000,
            closeOnClick: true,
            theme: "dark",
        })
        setCart([])
    }

    const isInCart = (id) => cart.find(prod => prod.id === id) ? true : false;
    const allProducts = () => cart.reduce((acc, currentProduct) => acc + currentProduct.quantity, 0)
    const allPrice = () => cart.reduce((prev, act) => prev + act.quantity * act.price, 0)

    const contextValue = {
        cart,
        notProducts,
        allProducts,
        allPrice,
        addProduct,
        removeProduct,
        clearCart,
        isInCart
    }

    return (
            <Provider value={contextValue}>
                {children}
            </Provider>
    )
}

export default CustomProvider;

