import { useSearchParams } from 'react-router-dom'
import { libros } from '../data/libros'

function BusquedaLibros() {
    const [searchParams, setSearchParams] = useSearchParams()

    const q = searchParams.get('q') || ''
    const categoria = searchParams.get('categoria') || ''

    const librosFiltrados = libros
        .filter((libro) =>
            libro.titulo.toLowerCase().includes(q.toLowerCase())
        )
        .filter((libro) => (categoria === '' ? true : libro.categoria === categoria))


    function actualizarParametro(clave, valor) {
        const nuevosParametros = new URLSearchParams(searchParams)

        if (valor === '') {
            nuevosParametros.delete(clave)
        } else {
            nuevosParametros.set(clave, valor)
        }

        setSearchParams(nuevosParametros)
    }

    return (
        <main>
            <h1>Búsqueda de libros</h1>

            <div>
                <label htmlFor="busqueda">Buscar libro</label>
                <input
                    id="busqueda"
                    type="text"
                    value={q}
                    onChange={(event) => actualizarParametro('q', event.target.value)}
                    placeholder="Ejemplo: JavaScript"
                />
            </div>

            <div>
                <label htmlFor="categoria">Categoría</label>
                <select
                    id="categoria"
                    value={categoria}
                    onChange={(event) => actualizarParametro('categoria', event.target.value)}
                >
                    <option value="">Todas</option>
                    <option value="programacion">Programación</option>
                    <option value="diseno">Diseño</option>
                    <option value="marketing">Marketing</option>
                </select>
            </div>

            <section>
                <h2>Resultados</h2>

                {librosFiltrados.length === 0 ? (
                    <p>No hay libros que coincidan con la búsqueda.</p>
                ) : (
                    <ul>
                        {librosFiltrados.map((libro) => (
                            <li key={libro.id}>
                                {libro.titulo} — {libro.autor} — {libro.paginas} páginas
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </main>
    )
}

export default BusquedaLibros