import { useNavigate } from 'react-router-dom'

function AccesoDemo() {
    const navigate = useNavigate()

    function entrar() {
        navigate('/dashboard', { replace: true })
    }

    return (
        <main>
            <h1>Acceso demo</h1>
            <p>Este ejemplo simula una entrada correcta.</p>

            <button onClick={entrar}>Entrar</button>
        </main>
    )
}

export default AccesoDemo