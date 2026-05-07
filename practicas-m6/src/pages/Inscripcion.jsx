import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Inscripcion() {
    const navigate = useNavigate()
    const [nombre, setNombre] = useState('')
    const [curso, setCurso] = useState('React básico')

    function enviarInscripcion(event) {
        event.preventDefault()

        const nombreLimpio = nombre.trim()

        if (nombreLimpio === '') {
            alert('Debes escribir un nombre')
            return
        }

        navigate('/inscripcion-confirmada', {
            state: {
                nombre: nombreLimpio,
                curso,
            },
        })
    }

    return (
        <main>
            <h1>Formulario de Inscripción</h1>

            <form onSubmit={enviarInscripcion}>
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        id="nombre"
                        type="text"
                        value={nombre}
                        onChange={(event) => setNombre(event.target.value)}
                        placeholder="Ingrese su nombre"
                    />
                </div>

                <div>
                    <label htmlFor="curso">Seleccione el curso: </label>
                    <select
                        id="curso"
                        defaultValue="React básico"
                        onChange={(event) => setCurso(event.target.value)}
                    >
                        <option value="">Todos</option>
                        <option value="react">React básico</option>
                        <option value="javascript">JavaScript moderno</option>
                        <option value="css">CSS práctico</option>
                        <option value="node">Node desde cero</option>
                        <option value="accesibilidad">Accesibilidad web</option>
                    </select>
                </div>
                <button type="submit">Inscribirse</button>
            </form>
        </main>
    )
}

export default Inscripcion