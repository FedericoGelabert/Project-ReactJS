import { useState } from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = (props) => {

    const [hamDisabled, setHamDisabled] = useState(false)

    let activeStyle = {
        fontWeight: "600",
        backgroundColor: "#EAE5E3",
        borderRadius: "10px"
    }

    const hamActive = () => {
        setHamDisabled(true)
    }

    const closeHamMenu = () => {
        setHamDisabled(false)
    }

    if (props.navHeader === true) {
        return (
            <nav className="header-nav" >
                    <div className="ham-menu" onClick={hamActive} style={hamDisabled ? {display:'none'} : undefined}>
                        <span className="material-icons">menu</span>
                    </div>
                    <span className="material-icons icon-close" style={hamDisabled ? undefined : {display:'none'}} onClick={closeHamMenu}>close</span>
                <div className={hamDisabled ? "header-links active" : "header-links" }>
                    <NavLink className="header-link " to="/" style={({ isActive }) => isActive ? activeStyle : undefined} onClick={closeHamMenu}>Home</NavLink>
                    <NavLink className="header-link" to="/category/laptop" style={({ isActive }) => isActive ? activeStyle : undefined} onClick={closeHamMenu}>Laptop</NavLink>
                    <NavLink className="header-link" to="/category/tablet" style={({ isActive }) => isActive ? activeStyle : undefined} onClick={closeHamMenu}>Tablet</NavLink>
                    <NavLink className="header-link" to="/contact" style={({ isActive }) => isActive ? activeStyle : undefined} onClick={closeHamMenu}>Contact</NavLink>
                </div>
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