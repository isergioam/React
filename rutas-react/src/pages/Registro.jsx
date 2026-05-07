import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Registro() {
    const [nombre, setNombre] = useState('')
    const navigate = useNavigate()

    function enviarFormulario(event) {
        event.preventDefault()

        const nombreLimpio = nombre.trim()

        if (nombreLimpio === '') {
            alert('El nombre es obligatorio')
            return
        }

        navigate('/confirmacion', {
            replace: true,
            state: { nombre: nombreLimpio },
        })
    }

    return (
        <main>
            <h1>Registro</h1>

            <form onSubmit={enviarFormulario}>
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        id="nombre"
                        type="text"
                        value={nombre}
                        onChange={(event) => setNombre(event.target.value)}
                    />
                </div>

                <button type="submit">Enviar registro</button>
            </form>
        </main>
    )
}

export default Registro