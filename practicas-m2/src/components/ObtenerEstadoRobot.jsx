import { useState } from "react"

function ObtenerEstadoRobot() {
    const [energia, setEnergia] = useState(50)

    function subirEnergia() {
        setEnergia(valorAnterior => Math.min(valorAnterior + 10, 100))
    }

    function bajarEnergia() {
        setEnergia(valorAnterior => Math.max(valorAnterior - 10, 0))
    }

    function recargar() {
        setEnergia(100)
    }

    function obtenerEstadoRobot() {
        if (energia === 0) return 'Robot apagado'
        if (energia <= 30) return 'Energía crítica'
        if (energia <= 70) return 'Funcionamiento normal'
        return 'Robot en plena forma'
    }

    return (
        <main>
            <h1>Simulador de energía de un robot</h1>
            <p>Energía actual: {energia}</p>
            <p>Estado: {obtenerEstadoRobot()}</p>

            <button onClick={subirEnergia}>+10 energía</button>
            <button onClick={bajarEnergia}>-10 energía</button>
            <button onClick={recargar}>Recargar al 100</button>
        </main>
    )
}

export default ObtenerEstadoRobot