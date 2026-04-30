import { useState } from "react"

function InputControlado() {
    const [msj, setMsj] = useState("")
    return (
        <div>
            <h1>Input controlado</h1>

            <input
                value={msj}
                onChange={event => setMsj(event.target.value)}
                placeholder="Escribe algo"
            />

            <p>Has escrito: {msj}</p>
            <p>Número de caracteres: {msj.length}</p>

        </div>
    )
}

export default InputControlado