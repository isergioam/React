import { useState } from "react"

function Contador() {
    const [num, setNum] = useState(0)
    return (
        <div>
            <br />
            <button onClick={() => setNum(num - 1)}> Decrementar</button>
            <button onClick={() => setNum(num + 1)}>Incrementar</button>
            <button onClick={() => setNum(0)}>Reset</button>

            <h1>{num}</h1>

            <h3>Contador de Visitas</h3>

        </div>
    )
}

export default Contador