import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';

const Contact = () => {

    const [submitDisabled, setSubmitDisabled] = useState(true)
    const MySwal = withReactContent(Swal)
    const navigate = useNavigate();

    const returnHome = () => {
        navigate("/")
    }

    const contactSubmit = (e) => {
        e.preventDefault()
        if(submitDisabled === false) {
            return MySwal.fire({
                icon: 'success',
                title: <p>Sended successfully</p>,
                text: "We'll be in contact with you soon!",
                confirmButtonText: <p onClick={returnHome}>OK!</p>
            })
        }

    }

    const submitActive = (e) => {
        if(e.target.value.length >= 50) {
            setSubmitDisabled(false)
        } else {
            setSubmitDisabled(true) 
        }
    }

    return (
        <div>
            <h2 className="cart-container">Contact</h2>
            <div className="contact-container">
                <div className="contact-form-container">
                    <h2>Contact Us</h2>
                    <hr />
                    <form className="contact-form">
                        <div className="form-inputs">
                            <input type="text" placeholder="Name" style={{marginTop: '20px'}} required/>
                            <input type="email" placeholder="Email" required/>
                            <input type="text" placeholder="Subject" style={{marginBottom: '20px'}}/>
                        </div>
                        <div className="form-textarea">
                            <textarea name="message" cols="30" rows="10" maxLength="150" placeholder="Type your message here..." onKeyUp={submitActive}></textarea>
                        </div>
                        <p className="textarea-characters">Max. 150 characters.</p>
                        <div className="form-buttons">
                            {
                                submitDisabled ? 
                                <button type="submit" style={{backgroundColor:'rgb(180,180,180)'}} onClick={contactSubmit} disabled={submitDisabled}>Submit</button> :
                                <button type="submit" style={{backgroundColor:'rgb(0,0,0)'}} onClick={contactSubmit} disabled={submitDisabled}>Submit</button>
                            }
                            <button type="reset">Reset</button>
                        </div>
                    </form>
                </div>
                <img src="https://res.cloudinary.com/federicog/image/upload/v1676240472/react-project/46-466645_illustration-of-a-laptop-expertise-isometric-illustration-hd-removebg-preview_czkie0.png" alt="Laptop Atractive Design" />
            </div>
        </div>
    )
}

export default Contact;