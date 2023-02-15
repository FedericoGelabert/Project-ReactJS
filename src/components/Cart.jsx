import CartItem from "./CartItem";
import { useCart } from "./CartContext"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';

const Cart = () => {

    const { cart, clearCart, notProducts, subTotalPrice, allProducts, clearCartAfterBuy } = useCart()
    const [inputDisabled, setInputDisabled] = useState(true)
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [confirmDisabled, setConfirmDisabled] = useState(true)
    const [emailValue, setEmailValue] = useState("")
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [phone, setPhone] = useState("")
    const [country, setCountry] = useState("")
    const [email, setEmail] = useState("")
    const shipping = 49.99
    const totalPrice = subTotalPrice() + shipping
    const MySwal = withReactContent(Swal)
    const navigate = useNavigate();

    const activeEmail = (e) => {
        setEmailValue(e.target.value)
        if (e.target.value.includes("@")) {
            setInputDisabled(false)
        }
    }

    const nameInput = (e) => {
        setName(e.target.value)
    }

    const surnameInput = (e) => {
        setSurname(e.target.value)
    }

    const phoneInput = (e) => {
        setPhone(e.target.value)
    }

    const countryInput = (e) => {
        setCountry(e.target.value)
    }

    const emailInput = (e) => {
        setEmail(e.target.value)
    }

    const returnHome = () => {
        clearCartBuy()
        navigate("/")
    }

    const clearCartBuy = () => {
        clearCartAfterBuy()
    }

    const handleBuy = () => {

        const order = {
            user: {
                name: name,
                surname: surname,
                phone_number: phone,
                country: country,
                email: email,
            },
            products: [...cart],
            date: serverTimestamp()
        }

        const sellingsCollection = collection(db, "sells")
        const orderFirestore = addDoc(sellingsCollection, order)

        orderFirestore
            .then((res) => {
                const purchaseId = res.id
                MySwal.fire({
                    icon: 'success',
                    title: <p>Purchase Completed</p>,
                    html: <p>Buy ID: <strong>{purchaseId}</strong></p>,
                    confirmButtonText: <p onClick={returnHome}>⬅ Return to Home</p>,
                    allowOutsideClick: false,
                })
            })
            .catch((err) => {
                toast.error(err, {
                    position: "bottom-right",
                    autoClose: 2000,
                    closeOnClick: true,
                    draggable: false,
                    theme: "dark",
                })
            })

        setButtonDisabled(true)
    }

    const activeBuyButton = (e) => {
        e.preventDefault()
        if (confirmDisabled === false) {
            setButtonDisabled(false)
        }
    }

    const confirmButton = (e) => {
        if (e.target.value === emailValue) {
            setConfirmDisabled(false)
        } else {
            setConfirmDisabled(true)
        }
    }

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
                        <div className="checkout-container">
                            <div className="checkout-inputs-container">
                                <div className="checkout-inputs-header">
                                    <h4>Payment Information</h4>
                                </div>
                                <hr style={{ marginBottom: '15px' }} />
                                <form>
                                    <div className="checkout-inputs">
                                        <input type="text" placeholder="Name" onInput={nameInput} required />
                                        <input type="text" placeholder="Surname" onInput={surnameInput} required />
                                        <input type="number" placeholder="Phone Number" onInput={phoneInput} required />
                                        <input type="text" placeholder="Country" onInput={countryInput} />
                                        <input type="email" placeholder="Email" required onKeyUp={activeEmail} onInput={emailInput} />
                                        <input type="email" placeholder="Repeat email" required disabled={inputDisabled} onKeyUp={confirmButton} />
                                    </div>
                                    <div className="checkout-submit">
                                        {
                                            confirmDisabled ?
                                                <button className="checkout-submit-button" type="text" style={{ backgroundColor: 'rgb(200,200,200)' }} onClick={activeBuyButton} disabled={confirmDisabled}>Confirm</button> :
                                                <button className="checkout-submit-button" type="text" style={{ backgroundColor: 'black' }} onClick={activeBuyButton} disabled={confirmDisabled}>Confirm</button>
                                        }
                                        <button className="checkout-reset" type="reset">Reset</button>
                                    </div>
                                </form>
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
                                    {
                                        buttonDisabled ?
                                            <button className="checkout-button" style={{ backgroundColor: 'rgb(200,200,200)' }}>Buy</button> :
                                            <button className="checkout-button" style={{ backgroundColor: 'black' }} onClick={handleBuy}>Buy</button>
                                    }
                                    <img className="checkout-cards" src="https://res.cloudinary.com/federicog/image/upload/v1676238837/react-project/cards_jzjhvq.png" alt="Cards" />
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Cart;