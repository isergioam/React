import { useState } from 'react'

function validar(form) {
    const errores = {}

    if (form.titulo.trim().length < 3) {
        errores.titulo = 'El titulo debe tener al menos 3 caracteres.'
    }

    if (form.descripcion.trim().length < 10) {
        errores.descripcion = 'La descripcion debe tener al menos 10 caracteres.'
    }

    if (!form.acepta) {
        errores.acepta = 'Debes aceptar la revisión del parte.'
    }

    return errores
}

function Formulario() {
    const [form, setForm] = useState({
        titulo: '',
        descripcion: '',
        prioridad: 'media',
        acepta: false
    })

    const [errores, setErrores] = useState({})
    const [enviado, setEnviado] = useState(false)

    function cambiarNombre(event) {
        setForm({ ...form, titulo: event.target.value })
    }

    function cambiarDescripcion(event) {
        setForm({ ...form, descripcion: event.target.value })
    }

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
            setEnviado(false)
            return
        }

        setEnviado(true)
    }

    return (
        <main>
            <h1>Incidencia</h1>

            <form onSubmit={enviar}>
                <label htmlFor="titulo">Título: </label>
                <input
                    id="titulo"
                    name="titulo"
                    placeholder='Escribe el título...'
                    value={form.titulo}
                    onChange={cambiarNombre}
                    aria-invalid={Boolean(errores.titulo)}
                />
                {errores.titulo && <p role="alert">{errores.titulo}</p>}
                <br />
                <label htmlFor="descripcion">Descripción: </label>
                <textarea
                    id="descripcion"
                    name="descripcion"
                    value={form.descripcion}
                    onChange={cambiarDescripcion}
                    aria-invalid={Boolean(errores.descripcion)}
                />
                {errores.descripcion && <p role="alert">{errores.descripcion}</p>}
                <br />
                <label htmlFor="prioridad">Prioridad: </label>
                <select
                    id="prioridad"
                    name="prioridad"
                    value={form.prioridad}
                    onChange={manejarCambio}
                >
                    <option value="baja">Baja</option>
                    <option value="media">Media</option>
                    <option value="alta">Alta</option>
                </select>
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="acepta"
                        checked={form.acepta}
                        onChange={manejarCambio}
                        aria-invalid={Boolean(errores.acepta)}
                    /> Aceptar revisión
                </label>
                {errores.acepta && <p role="alert">{errores.acepta}</p>}
                <br />
                <button type="submit">Enviar</button>
            </form>
            {enviado && <p>Formulario enviado correctamente</p>}
        </main>
    )
}

export default Formulario