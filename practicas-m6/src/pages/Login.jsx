import { Navigate, useNavigate } from 'react-router-dom'

function Login({ isAuthed, onLogin }) {
    const navigate = useNavigate()

    if (isAuthed) {
        return <Navigate to="/dashboard" replace />
    }

    function handleLogin() {
        onLogin()
        navigate('/dashboard', { replace: true })
    }

    return (
        <main>
            <h1>Login</h1>
            <p>Este login es una simulación didáctica.</p>

            <button onClick={handleLogin}>Entrar</button>
        </main>
    )
}

export default Login