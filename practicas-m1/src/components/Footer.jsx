function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer>
            <div className="footer-bottom">
                <p>&copy; {year} Todos los derechos reservados.</p>
                <p>Zaragoza, España</p>
            </div>
        </footer>
    );
}

export default Footer;