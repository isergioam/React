import { useState } from 'react'

function GestorTareas() {
    const [etiquetas, setEtiquetas] = useState(['nuevo', 'popular'])
    const [nuevaEtiqueta, setNuevaEtiqueta] = useState('')

    function añadirEtiqueta() {
        const textoLimpio = nuevaEtiqueta.trim()

        if (!textoLimpio) return

        setEtiquetas([...etiquetas, textoLimpio])
        setNuevaEtiqueta('')
    }

    function borrarEtiqueta(etiquetaABorrar) {
        setEtiquetas(etiquetas.filter(etiqueta => etiqueta !== etiquetaABorrar))
    }

    return (
        <main>
            <h1>Gestor de Tareas</h1>

            <input
                value={nuevaEtiqueta}
                onChange={event => setNuevaEtiqueta(event.target.value)}
                placeholder="Nueva etiqueta"
            />

            <button onClick={añadirEtiqueta}>Añadir</button>

            <ul>
                {etiquetas.map((etiqueta, index) => (
                    <li key={index}>
                        {etiqueta}
                        <button onClick={() => borrarEtiqueta(etiqueta)}>X</button>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default GestorTareas