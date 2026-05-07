import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function FormularioBusqueda() {
    const [texto, setTexto] = useState('')
    const navigate = useNavigate()

    function enviarBusqueda(event) {
        event.preventDefault()

        const textoLimpio = texto.trim()

        if (textoLimpio === '') {
            alert('Escribe algo para buscar')
            return
        }

        navigate(`/resultados?q=${encodeURIComponent(textoLimpio)}`)
    }

    return (
        <main>
            <h1>Buscar contenido</h1>

            <form onSubmit={enviarBusqueda}>
                <label htmlFor="busqueda">Búsqueda</label>
                <input
                    id="busqueda"
                    type="text"
                    value={texto}
                    onChange={(event) => setTexto(event.target.value)}
                />

                <button type="submit">Buscar</button>
            </form>
        </main>
    )
}

export default FormularioBusqueda