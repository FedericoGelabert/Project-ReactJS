import NavBar from "./NavBar";


const Footer = () => {
    return (
        <footer className="footer">
            <p>Copyright &copy; 2023</p>
            <NavBar navHeader={false}/>
        </footer>
    )
}

export default Footer;