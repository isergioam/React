import { useState } from "react"

function SalaGamer() {
    const [jugadores, setJugadores] = useState(0)
    const aforoMaximo = 8

    function entrarJugador() {
        setJugadores(valorAnterior => Math.min(valorAnterior + 1, aforoMaximo))
    }

    function salirJugador() {
        setJugadores(valorAnterior => Math.max(valorAnterior - 1, 0))
    }

    function vaciarSala() {
        setJugadores(0)
    }

    return (
        <main>
            <h1>Sala gamer</h1>
            <p>Jugadores dentro: {jugadores}</p>

            {jugadores === 0 && <p>Sala vacía</p>}
            {jugadores === aforoMaximo && <p>Sala completa</p>}

            {jugadores !== aforoMaximo && jugadores !== 0 && <p>Quedan {aforoMaximo - jugadores} plazas</p>}

            <button onClick={entrarJugador}>Entrar jugador</button>
            <button onClick={salirJugador}>Salir jugador</button>
            <button onClick={vaciarSala}>Vaciar sala</button>
        </main>
    )
}

export default SalaGamer