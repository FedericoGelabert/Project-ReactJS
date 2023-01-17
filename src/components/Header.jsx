import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="header-title-a">
                <h1 className="header-title">BuyIt!</h1>
            </Link>
            <NavBar navHeader={true}/>
        </header>
    )
}


export default Header;