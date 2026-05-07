import { NavLink, Outlet } from 'react-router-dom'


function MainLayout() {
    return (
        <>
            <header>
                <h1>Prácticas Modulo 6 </h1>

                <nav>
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'fondo' : undefined)}>
                        Inicio</NavLink>
                    <NavLink to="/eventos" className={({ isActive }) => (isActive ? 'fondo' : undefined)}>
                        Eventos</NavLink>
                    <NavLink to="/contacto" className={({ isActive }) => (isActive ? 'fondo' : undefined)}>
                        Contacto</NavLink>
                </nav>
            </header>

            <Outlet />

            <footer>
                <p>Ejercicios prácticos del modulo 6</p>
            </footer>
        </>
    )
}

export default MainLayout