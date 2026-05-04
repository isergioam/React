import { useState } from "react"

function EditorNombre() {
    const [msj, setMsj] = useState("")
    return (
        <div>
            <h1>Título del Videojuego</h1>

            <input
                value={msj}
                onChange={event => setMsj(event.target.value)}
                placeholder="Escribe el título del videojuego"
            />

            <p>Título: {msj}</p>
            <p>Número de caracteres: {msj.length}</p>

            <section>
                {msj.length > 20 && <p style={{ color: 'red' }} >Has escrito más de 20 caracteres</p>}
            </section>

        </div>
    )
}

export default EditorNombre