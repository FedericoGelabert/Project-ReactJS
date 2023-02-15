import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';

const Contact = () => {

    const MySwal = withReactContent(Swal)

    const contactSubmit = (e) => {
        e.preventDefault()
        return MySwal.fire({
            icon: 'success',
            title: <p>Sended successfully</p>,
            text: "We'll be in contact with you soon!"
        })
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
                            <input type="text" placeholder="Name" style={{marginTop: '20px'}}/>
                            <input type="email" placeholder="Email" style={{marginBottom: '20px'}}/>
                        </div>
                        <div className="form-textarea">
                            <textarea name="message" cols="30" rows="10" maxlength="100" placeholder="Introduce your message..."></textarea>
                        </div>
                        <div className="form-buttons">
                            <button type="submit" onClick={contactSubmit}>Submit</button>
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