import { useState } from 'react'

function Boolean() {
    const [nombreSala, setNombreSala] = useState('Sala principal')
    const [visible, setVisible] = useState(true)

    return (
        <main>
            <h1>Editor de sala</h1>

            <input
                value={nombreSala}
                onChange={event => setNombreSala(event.target.value)}
                placeholder="Nombre de la sala"
            />

            <button onClick={() => setVisible(!visible)}>
                {visible ? 'Ocultar nombre' : 'Mostrar nombre'}
            </button>

            {visible && <p>Sala seleccionada: {nombreSala}</p>}
        </main>
    )
}

export default Boolean