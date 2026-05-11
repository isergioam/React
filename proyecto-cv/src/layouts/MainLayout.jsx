import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'

function MainLayout() {
    return (
        <div className="app-shell">
            <header className="app-header">
                <NavBar />
            </header>

            <main className="app-main">
                <Outlet />
            </main>

            <footer className="app-footer">
                <Footer />
            </footer>
        </div>
    )
}

export default MainLayout