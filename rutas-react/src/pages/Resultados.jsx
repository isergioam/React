import { Link, useSearchParams } from 'react-router-dom'

function Resultados() {
    const [searchParams] = useSearchParams()
    const q = searchParams.get('q') || ''

    return (
        <main>
            <h1>Resultados</h1>
            <p>Búsqueda realizada: {q}</p>

            <Link to="/buscar">Hacer otra búsqueda</Link>
        </main>
    )
}

export default Resultados