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
                        to="/panel"
                        className={({ isActive }) => (isActive ? 'fondo' : undefined)}
                    >
                        Panel de Navegación
                    </NavLink>
                    <NavLink
                        to="/contacto"
                        className={({ isActive }) => (isActive ? 'fondo' : undefined)}
                    >
                        Contacto
                    </NavLink>

                    <NavLink
                        to="/registro"
                        className={({ isActive }) => (isActive ? 'fondo' : undefined)}
                    >
                        Registro
                    </NavLink>
                    <NavLink
                        to="/reserva"
                        className={({ isActive }) => (isActive ? 'fondo' : undefined)}
                    >
                        Reserva
                    </NavLink>
                    <NavLink
                        to="/buscar"
                        className={({ isActive }) => (isActive ? 'fondo' : undefined)}
                    >
                        Buscar
                    </NavLink>
                    <NavLink
                        to="/editar-producto"
                        className={({ isActive }) => (isActive ? 'fondo' : undefined)}
                    >
                        Editar Producto
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