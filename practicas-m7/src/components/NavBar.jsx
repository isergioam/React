import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <nav className="navbar" aria-label="Navegación principal">
            <NavLink className="navbar__link" to="/" end>
                Inicio
            </NavLink>

            <NavLink className="navbar__link" to="/books">
                Libros
            </NavLink>

            <NavLink className="navbar__link" to="/favorites">
                Favoritos
            </NavLink>
        </nav>
    )
}

export default NavBar