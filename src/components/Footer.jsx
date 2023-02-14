import NavBar from "./NavBar";

const Footer = () => {
    return (
        <footer className="footer">
            <NavBar navHeader={false} />
            <p>Copyright &copy; 2023</p>
        </footer>
    )
}

export default Footer;