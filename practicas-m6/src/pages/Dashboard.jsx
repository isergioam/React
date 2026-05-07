import { useNavigate } from 'react-router-dom'

function Dashboard({ onLogout }) {
    const navigate = useNavigate()

    function handleLogout() {
        onLogout()
        navigate('/login', { replace: true })
    }

    return (
        <main>
            <h1>Dashboard privado</h1>
            <p>Solo puedes ver esta página si has iniciado sesión.</p>

            <button onClick={handleLogout}>Cerrar sesión</button>
        </main>
    )
}

export default Dashboard