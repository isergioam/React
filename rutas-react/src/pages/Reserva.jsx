import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Reserva() {
    const [nombre, setNombre] = useState('')
    const [turno, setTurno] = useState('mañana')
    const navigate = useNavigate()

    function enviarReserva(event) {
        event.preventDefault()

        const nombreLimpio = nombre.trim()

        if (nombreLimpio === '') {
            alert('Debes escribir un nombre')
            return
        }

        navigate('/reserva-confirmada', {
            state: {
                nombre: nombreLimpio,
                turno,
            },
        })
    }

    return (
        <main>
            <h1>Reserva de plaza</h1>

            <form onSubmit={enviarReserva}>
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        id="nombre"
                        type="text"
                        value={nombre}
                        onChange={(event) => setNombre(event.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="turno">Turno</label>
                    <select
                        id="turno"
                        value={turno}
                        onChange={(event) => setTurno(event.target.value)}
                    >
                        <option value="mañana">Mañana</option>
                        <option value="tarde">Tarde</option>
                    </select>
                </div>

                <button type="submit">Reservar</button>
            </form>
        </main>
    )
}

export default Reserva