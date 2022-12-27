import CartWidget from "./CartWidget";


const NavBar = (props) => {


    if(props.navHeader === true) {
    return (
        <nav className="header-nav">
            <a className="header-link" href="#">Home</a>
            <a className="header-link" href="#">Shop</a>
            <a className="header-link" href="#">Favourites</a>
            <a className="header-link" href="#">Contact</a>
            <CartWidget />
        </nav>
    )          
    } else if(props.navHeader === false) {
        return (
            <nav className="footer-nav">
                <a className="footer-link" href="#">Instagram</a>
                <a className="footer-link" href="#">Facebook</a>
                <a className="footer-link" href="#">Linkedin</a>
            </nav>
        )
    }
}

export default NavBar;