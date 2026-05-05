import { useState } from 'react'

function Formulario() {
    const [form, setForm] = useState({
        nombre: '',
        email: '',
        confirmacion: ''
    })

    const [confirmacion, setConfirmacion] = useState('')

    function cambiarNombre(event) {
        setForm({ ...form, nombre: event.target.value })
    }

    function cambiarEmail(event) {
        setForm({ ...form, email: event.target.value })
    }

    function enviar(event) {
        event.preventDefault()


        setConfirmacion(`Reserva registrada para ${form.nombre} con email ${form.email}`)
        setNombre('')
        setEmail('')
    }

    return (
        <main>
            <h1>Reservas</h1>

            <form onSubmit={enviar}>

                {/* NOMBRE */}
                <label htmlFor="nombre">Nombre: </label>
                <input
                    id="nombre"
                    placeholder='Introduce tu nombre'
                    value={form.nombre}
                    onChange={cambiarNombre}

                />
                <br />

                {/* EMAIL */}
                <label htmlFor="email">Email: </label>
                <input
                    id="email"
                    placeholder='Introduce tu email'
                    value={form.email}
                    onChange={cambiarEmail}
                />
                <br />

                <br />
                <button type="submit">Reservar</button>

                {confirmacion && <p>{confirmacion}</p>}
            </form>
        </main>
    )
}

export default Formulario