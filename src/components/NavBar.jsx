import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";


const NavBar = (props) => {


    if(props.navHeader === true) {
    return (
        <nav className="header-nav">
            <Link className="header-link" to="/">Home</Link>
            <Link className="header-link" to="/category/laptop">Laptop</Link>
            <Link className="header-link" to="/category/tablet">Tablet</Link>
            <Link className="header-link" to="/favourites">Favourites</Link>
            <CartWidget />
        </nav>
    )          
    } else if(props.navHeader === false) {
        return (
            <nav className="footer-nav">
                <a className="footer-link" href="https://instagram.com/">Instagram</a>
                <a className="footer-link" href="https://facebook.com/">Facebook</a>
                <a className="footer-link" href="https://tiktok.com/">TikTok</a>
            </nav>
        )
    }
}

export default NavBar;