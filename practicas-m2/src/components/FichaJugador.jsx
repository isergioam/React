import { useState } from "react"

function FichaJugador() {
    const [nombre, setNombre] = useState("")
    const [legendario, setLegendario] = useState(false)
    const [poder, setPoder] = useState(0)

    return (
        <div>
            <br />
            <label htmlFor="nombre">Jugador: </label>
            <input type="text" name="nombre" value={nombre} onChange={e => setNombre(e.target.value)} />

            <label htmlFor="legendario">Legendario: </label>
            <input type="checkbox" name="legendario" onChange={e => setLegendario(!legendario)} />
            <br />
            <label htmlFor="poder">Poder inicial: </label>
            <input type="number" name="poder" value={poder} onChange={e => setPoder(e.target.value)} />
            <br />

            <h1>Ficha de jugador</h1>

            <h3>Jugador: {nombre}</h3>
            <h3>Legendario: {legendario ? "Sí" : "No"}</h3>
            <h3>Poder: {legendario ? Number(poder) + 100 : poder}</h3>

        </div>
    )
}

export default FichaJugador