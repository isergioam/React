import { useState } from 'react'

const zonas = [
    { id: 'centro', nombre: 'Centro' },
    { id: 'norte', nombre: 'Norte' },
    { id: 'sur', nombre: 'Sur' }
]

const salas = [
    { id: 's1', zonaId: 'centro', nombre: 'Sala Ágora' },
    { id: 's2', zonaId: 'centro', nombre: 'Sala Mirador' },
    { id: 's3', zonaId: 'norte', nombre: 'Aula Norte 1' },
    { id: 's4', zonaId: 'sur', nombre: 'Laboratorio Sur' }
]


function Salas() {
    const [zonaId, setZonaId] = useState('centro')
    const [salaId, setSalaId] = useState('s1')

    const salasFiltradas = salas.filter(sala => sala.zonaId === zonaId)
    const salaSeleccionada = salas.find(sala => sala.id === salaId)

    function manejarCambioZona(event) {
        const nuevaZonaId = event.target.value
        const nuevasSalas = salas.filter(sala => sala.zonaId === nuevaZonaId)

        setZonaId(nuevaZonaId)
        setSalaId(nuevasSalas[0]?.id ?? '')
    }

    function manejarCambioSala(event) {
        setSalaId(event.target.value)
    }


    return (

        <main>
            <h1>Reserva de sala</h1>

            <label htmlFor="zona">Zona</label>
            <select id="zona" value={zonaId} onChange={manejarCambioZona}>
                {zonas.map(zona => (
                    <option key={zona.id} value={zona.id}>
                        {zona.nombre}
                    </option>
                ))}
            </select>

            <label htmlFor="sala">Sala</label>
            <select id="sala" value={salaId} onChange={manejarCambioSala}>
                {salasFiltradas.map(sala => (
                    <option key={sala.id} value={sala.id}>
                        {sala.nombre}
                    </option>
                ))}
            </select>

            <p>Sala seleccionada: {salaSeleccionada?.nombre ?? 'Ninguna'}</p>
        </main>

    )
}

export default Salas