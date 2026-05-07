import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginSimulado() {
    const [usuario, setUsuario] = useState('')
    const navigate = useNavigate()

    function entrar(event) {
        event.preventDefault()

        if (usuario.trim() === '') {
            alert('Escribe un usuario')
            return
        }

        navigate('/dashboard', { replace: true })
    }

    return (
        <main>
            <h1>Login simulado</h1>

            <form onSubmit={entrar}>
                <label htmlFor="usuario">Usuario</label>
                <input
                    id="usuario"
                    type="text"
                    value={usuario}
                    onChange={(event) => setUsuario(event.target.value)}
                />

                <button type="submit">Entrar</button>
            </form>
        </main>
    )
}

export default LoginSimulado