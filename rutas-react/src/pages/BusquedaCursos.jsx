import { useSearchParams } from 'react-router-dom'
import { cursos } from '../data/cursos.js'

function BusquedaCursos() {
    const [searchParams, setSearchParams] = useSearchParams()

    const q = searchParams.get('q') || ''
    const nivel = searchParams.get('nivel') || ''

    const cursosFiltrados = cursos
        .filter((curso) =>
            curso.nombre.toLowerCase().includes(q.toLowerCase())
        )
        .filter((curso) => (nivel === '' ? true : curso.nivel === nivel))

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
            <h1>Búsqueda de cursos</h1>

            <div>
                <label htmlFor="busqueda">Buscar curso</label>
                <input
                    id="busqueda"
                    type="text"
                    value={q}
                    onChange={(event) => actualizarParametro('q', event.target.value)}
                    placeholder="Ejemplo: react"
                />
            </div>

            <div>
                <label htmlFor="nivel">Nivel</label>
                <select
                    id="nivel"
                    value={nivel}
                    onChange={(event) => actualizarParametro('nivel', event.target.value)}
                >
                    <option value="">Todos</option>
                    <option value="basico">Básico</option>
                    <option value="intermedio">Intermedio</option>
                    <option value="avanzado">Avanzado</option>
                </select>
            </div>

            <section>
                <h2>Resultados</h2>

                {cursosFiltrados.length === 0 ? (
                    <p>No hay cursos que coincidan con la búsqueda.</p>
                ) : (
                    <ul>
                        {cursosFiltrados.map((curso) => (
                            <li key={curso.id}>
                                {curso.nombre} — {curso.nivel} — {curso.duracion} horas
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </main>
    )
}

export default BusquedaCursos