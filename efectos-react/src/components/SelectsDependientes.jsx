import { useEffect, useState } from "react";

function SelectsDependientes() {
    const [tareas, setTareas] = useState([])
    const [usuarios, setUsuarios] = useState([])
    const [usuarioId, setUsuarioId] = useState('')
    const [loadingPosts, setLoadingPosts] = useState(false)
    const [error, setError] = useState(null)


    useEffect(() => {
        async function cargarUsuarios() {
            try {
                const respuesta = await fetch('https://jsonplaceholder.typicode.com/users')

                if (!respuesta.ok) {
                    throw new Error('No se pudieron cargar los usuarios')
                }

                const datos = await respuesta.json()
                setUsuarios(datos)
            } catch (error) {
                setError(error.message)
            }
        }

        cargarUsuarios()
    }, [])

    useEffect(() => {
        if (usuarioId === '') {
            setTareas([])
            return
        }

        async function cargarTareas() {
            try {
                setLoadingPosts(true)
                setError(null)

                const respuesta = await fetch(
                    `https://jsonplaceholder.typicode.com/tareas?userId=${usuarioId}`
                )

                if (!respuesta.ok) {
                    throw new Error('No se pudieron cargar las publicaciones')
                }

                const datos = await respuesta.json()
                setPosts(datos)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoadingPosts(false)
            }
        }

        cargarPosts()
    }, [usuarioId])

    return (
        <main>
            <h1>Publicaciones por usuario</h1>

            <label htmlFor="usuario">Selecciona un usuario</label>
            <select
                id="usuario"
                value={usuarioId}
                onChange={(event) => setUsuarioId(event.target.value)}
            >
                <option value="">-- Elige un usuario --</option>
                {usuarios.map((usuario) => (
                    <option key={usuario.id} value={usuario.id}>
                        {usuario.name}
                    </option>
                ))}
            </select>

            {loadingPosts && <p>Cargando publicaciones...</p>}
            {error && <p>Error: {error}</p>}

            {tareas.map((tarea) => (
                <article key={tarea.id}>
                    <h2>{tarea.title}</h2>
                    <p>{tarea.completed ? 'Completada' : 'Pendiente'}</p>
                </article>
            ))}
        </main>
    )
}

export default SelectsDependientes