import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar.jsx'

function MainLayout() {
    return (
        <div className="app-shell">
            <header className="app-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontSize: '2.5rem', filter: 'drop-shadow(0 0 10px rgba(249, 115, 22, 0.5))' }}>🍳</span>
                    <div>
                        <h1 className="app-header__title" style={{ fontSize: '2rem' }}>GourmetLab</h1>
                        <p className="app-header__eyebrow" style={{ marginTop: '0.2rem', color: '#94a3b8' }}>Donde la magia ocurre</p>
                    </div>
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