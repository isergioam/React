import { useEffect, useState } from "react"

function Fetch() {
    const [tareas, setTareas] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function cargarTareas() {
            try {
                setIsLoading(true)
                const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos')
                if (!respuesta.ok) {
                    throw new Error('Error al cargar las tareas')
                }
                const datos = await respuesta.json()
                setTareas(datos.slice(0, 10))
            } catch (error) {
                setError(error.message)
            } finally {
                setIsLoading(false)
            }
        }

        cargarTareas()
    }, [])

    if (isLoading) {
        return <div>Cargando...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    return (
        <main>
            <h1>Tareas</h1>

            {tareas.map((tarea) => (
                <article key={tarea.id}>
                    <h2>{tarea.title}</h2>
                    <p>{tarea.completed ? 'Completada' : 'Pendiente'}</p>
                </article>
            ))}
        </main>
    )
}

export default Fetch