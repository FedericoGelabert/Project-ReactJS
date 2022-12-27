import NavBar from "./NavBar";

const Header = () => {
    return (
        <header className="header">
            <h1 className="header-title">BuyIt!</h1>
            <NavBar navHeader={true}/>
        </header>
    )
}


export default Header;