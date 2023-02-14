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
            autoClose: 800,
            closeOnClick: true,
            theme: "dark",
            pauseOnHover: false,
            delay: 10
        })
        if (isInCart(product.id)) {
            setCart(
                cart.map(prod => {
                    if (prod.id === product.id) {
                        return { ...prod, quantity: prod.quantity + quantity }
                    }
                    return prod;
                })
            );
        } else {
            setCart([...cart, { ...product, quantity }])
            setNotProducts(false)
        }

    }

    const removeProduct = (id) => {
        toast.error('Product removed.', {
            position: "bottom-right",
            autoClose: 1000,
            closeOnClick: true,
            theme: "dark",
        })
        const filterProduct = cart.filter(product => product.id !== id)
        setCart(filterProduct)
        if (cart.length === 1) {
            setNotProducts(true)
        } else {
            setNotProducts(false)
        }
    }

    const clearCart = () => {
        toast.error('All products removed.', {
            position: "bottom-right",
            autoClose: 1000,
            closeOnClick: true,
            theme: "dark",
        })
        setCart([])
        setNotProducts(true)
    }

    const clearCartAfterBuy = () => {
        setCart([])
        setNotProducts(true)
    }

    const isInCart = (id) => cart.find(prod => prod.id === id) ? true : false;
    const allProducts = () => cart.reduce((acc, currentProduct) => acc + currentProduct.quantity, 0)
    const subTotalPrice = () => cart.reduce((prev, act) => prev + act.quantity * act.price, 0)

    const contextValue = {
        cart,
        notProducts,
        allProducts,
        subTotalPrice,
        addProduct,
        removeProduct,
        clearCart,
        clearCartAfterBuy,
        isInCart,
    }

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default CustomProvider;

