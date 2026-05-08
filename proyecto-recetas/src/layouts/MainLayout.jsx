import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar.jsx'

function MainLayout() {
    return (
        <div className="app-shell">
            <header className="app-header">
                <div>
                    <p className="app-header__eyebrow">Recetas</p>
                    <h1 className="app-header__title">Recetario</h1>
                </div>

                <NavBar />
            </header>

            <main className="app-main">
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout