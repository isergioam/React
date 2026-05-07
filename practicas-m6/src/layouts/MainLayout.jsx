import { NavLink, Outlet } from 'react-router-dom'


function MainLayout() {
    return (
        <>
            <header>
                <h1>Prácticas Modulo 6 </h1>

                <nav>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? 'fondo' : undefined)}
                    >
                        Inicio
                    </NavLink>
                    <NavLink
                        to="/inscripcion"
                        className={({ isActive }) => (isActive ? 'fondo' : undefined)}
                    >
                        Inscripción
                    </NavLink>
                    <NavLink
                        to="/login"
                        className={({ isActive }) => (isActive ? 'fondo' : undefined)}
                    >
                        Login
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