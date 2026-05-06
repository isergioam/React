import { useSearchParams } from 'react-router-dom'

function Busqueda() {
    const [searchParams, setSearchParams] = useSearchParams()
    const q = searchParams.get('q') || ''

    function cambiarBusqueda(e) {

        const valor = e.target.value

        if (valor === '') {
            setSearchParams({})
        } else {
            setSearchParams({ q: valor })
        }
    }

    return (
        <main>
            <h1>Página de búsqueda</h1>

            <label htmlFor="busqueda">Buscar: </label>
            <input
                id="busqueda"
                type="text"
                value={q}
                onChange={cambiarBusqueda}
                placeholder="Escribe una búsqueda"
            />

            <p>Búsqueda actual: {q}</p>
        </main>
    )
}

export default Busqueda