import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <nav className="navbar" aria-label="Navegación principal">
            <NavLink className="navbar__link" to="/" end>
                Inicio
            </NavLink>

            <NavLink className="navbar__link" to="/experiencia">
                Experiencia
            </NavLink>

            <NavLink className="navbar__link" to="/estudios">
                Estudios
            </NavLink>

            <NavLink className="navbar__link" to="/contacto">
                Contacto
            </NavLink>
        </nav>
    )
}

export default NavBar