import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = (props) => {

    let activeStyle = {
        fontWeight: "600",
        backgroundColor: "#EAE5E3",
        borderRadius: "10px"
    }

    if (props.navHeader === true) {
        return (
            <nav className="header-nav">
                <NavLink className="header-link " to="/" style={({ isActive}) => isActive ? activeStyle : undefined}>Home</NavLink>
                <NavLink className="header-link" to="/category/laptop" style={({ isActive}) => isActive ? activeStyle : undefined}>Laptop</NavLink>
                <NavLink className="header-link" to="/category/tablet" style={({ isActive}) => isActive ? activeStyle : undefined}>Tablet</NavLink>
                <NavLink className="header-link" to="/contact" style={({ isActive}) => isActive ? activeStyle : undefined}>Contact</NavLink>
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