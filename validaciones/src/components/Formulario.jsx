import { useState } from 'react'

function validar(form) {
    const errores = {}

    if (form.nombre.trim().length < 2) {
        errores.nombre = 'El nombre debe tener al menos 2 caracteres.'
    }

    if (!form.email.includes('@')) {
        errores.email = 'Introduce un email válido.'
    }

    if (!form.acepta) {
        errores.acepta = 'Debes aceptar las condiciones.'
    }

    return errores
}

function Formulario() {
    const [form, setForm] = useState({
        nombre: '',
        email: '',
        acepta: false
    })

    const [errores, setErrores] = useState({})

    function manejarCambio(event) {
        const { name, value, type, checked } = event.target

        setForm(prevForm => ({
            ...prevForm,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    function enviar(event) {
        event.preventDefault()

        const nuevosErrores = validar(form)
        setErrores(nuevosErrores)

        if (Object.keys(nuevosErrores).length > 0) {
            return
        }

        alert('Formulario válido')
    }

    return (
        <main>
            <h1>Formulario validado</h1>

            <form onSubmit={enviar}>
                <label htmlFor="nombre">Nombre</label>
                <input
                    id="nombre"
                    name="nombre"
                    value={form.nombre}
                    onChange={manejarCambio}
                    aria-invalid={Boolean(errores.nombre)}
                />
                {errores.nombre && <p role="alert">{errores.nombre}</p>}
                <br />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={manejarCambio}
                    aria-invalid={Boolean(errores.email)}
                />
                {errores.email && <p role="alert">{errores.email}</p>}
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="acepta"
                        checked={form.acepta}
                        onChange={manejarCambio}
                        aria-invalid={Boolean(errores.acepta)}
                    />
                    Acepto las condiciones
                </label>
                {errores.acepta && <p role="alert">{errores.acepta}</p>}
                <br />
                <button type="submit">Enviar</button>
            </form>
        </main>
    )
}

export default Formulario