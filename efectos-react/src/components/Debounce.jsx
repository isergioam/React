import { useEffect, useState } from 'react'

function Debounce() {
    const [texto, setTexto] = useState('')
    const [resultados, setResultados] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (texto.trim() === '') {
            setResultados([])
            return
        }

        const id = setTimeout(async () => {
            setLoading(true)

            const respuesta = await fetch('https://jsonplaceholder.typicode.com/users')
            const datos = await respuesta.json()

            setResultados(
                datos.filter((usuario) =>
                    usuario.name.toLowerCase().includes(texto.toLowerCase())
                )
            )

            setLoading(false)
        }, 800)

        return () => {
            clearTimeout(id)
        }
    }, [texto])

    return (
        <main>
            <h1>Buscador con debounce</h1>

            <input
                value={texto}
                onChange={(event) => setTexto(event.target.value)}
                placeholder="Nombre de usuario"
            />

            {loading && <p>Buscando...</p>}

            {resultados.map((usuario) => (
                <article key={usuario.id}>
                    <h2>{usuario.name}</h2>
                    <p>{usuario.email}</p>
                </article>
            ))}
        </main>
    )
}

export default Debounce