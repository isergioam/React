import { NavLink, Outlet } from 'react-router-dom'

function MainLayout() {
    return (
        <>
            <header>
                <h1>Ejercicios Prácticos 📖</h1>

                <nav>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? 'fondo' : undefined)}
                    >
                        Inicio
                    </NavLink>

                    <NavLink
                        to="/contacto"
                        className={({ isActive }) => (isActive ? 'fondo' : undefined)}
                    >
                        Contacto
                    </NavLink>


                    <NavLink
                        to="/ayuda"
                        className={({ isActive }) => (isActive ? 'fondo' : undefined)}
                    >
                        Ayuda
                    </NavLink>

                    <NavLink
                        to="/servicios"
                        className={({ isActive }) => (isActive ? 'fondo' : undefined)}
                    >
                        Servicios
                    </NavLink>

                    <NavLink
                        to="/busqueda-libros"
                        className={({ isActive }) => (isActive ? 'fondo' : undefined)}
                    >
                        Busqueda Libros
                    </NavLink>
                </nav>
            </header>

            <Outlet />

            <footer>
                <p>Aplicación de ejemplo con React Router</p>
            </footer>
        </>
    )
}

export default MainLayout