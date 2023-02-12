import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = (props) => {

    if (props.navHeader === true) {
        return (
            <nav className="header-nav">
                <NavLink className="header-link" to="/">Home</NavLink>
                <NavLink className="header-link" to="/category/laptop">Laptop</NavLink>
                <NavLink className="header-link" to="/category/tablet">Tablet</NavLink>
                <NavLink className="header-link" to="/favourites">Favourites</NavLink>
                <NavLink to="/cart"><CartWidget /></NavLink>
            </nav>
        )
    } else if (props.navHeader === false) {
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