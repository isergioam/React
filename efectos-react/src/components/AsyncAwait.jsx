import { useEffect, useState } from "react"

function AsyncAwait() {
    const [comentarios, setComentarios] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function cargarComentarios() {
            try {
                setIsLoading(true)
                const respuesta = await fetch('https://jsonplaceholder.typicode.com/comments')
                if (!respuesta.ok) {
                    throw new Error('Error al cargar los comentarios')
                }
                const datos = await respuesta.json()
                setComentarios(datos.slice(0, 5))
            } catch (error) {
                setError(error.message)
            } finally {
                setIsLoading(false)
            }
        }

        cargarComentarios()
    }, [])

    if (isLoading) {
        return <div>Cargando...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    return (
        <div class="container">
            {comentarios.map((comentario) => (
                <article key={comentario.id}>
                    <span class="comentario-contador">{comentario.id}.</span><span class="comentario-titulo">{comentario.name}</span>
                    <p class="comentario-email">{comentario.email}</p>
                    <p class="comentario-body">{comentario.body}</p>
                </article>
            ))
            }
        </div >
    )
}

export default AsyncAwait