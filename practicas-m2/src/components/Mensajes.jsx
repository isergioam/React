import { useState } from "react"

function Mensajes() {
    const [msj, setMsj] = useState("Hola que ase?")
    return (
        <div>
            <br />

            <button onClick={() => setMsj("Buenos días")}> Saludo 01</button>
            <button onClick={() => setMsj("Buenas tardes")}> Saludo 02</button>
            <button onClick={() => setMsj("Buenas noches")}> Saludo 03</button>

            <h1>{msj}</h1>

        </div>
    )
}

export default Mensajes