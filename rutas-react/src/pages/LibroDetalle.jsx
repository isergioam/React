import { useParams, Link } from 'react-router-dom'
import { libros } from '../data/libros.js'

function LibroDetalle() {
    const { libroId } = useParams()
    const libro = libros.find((libro) => libro.id === Number(libroId))

    if (!libro) {
        return (
            <section>
                <h2>Libro no encontrado</h2>
                <p>No existe ningún libro con el identificador {libroId}.</p>
                <Link to="/libros">Volver al listado</Link>
            </section>
        )
    }

    return (
        <section>
            <h2>{libro.titulo}</h2>
            <p>Autor: {libro.autor}</p>
            <p>Páginas: {libro.paginas}</p>
            <Link to="/libros">Volver al listado</Link>
        </section>
    )
}

export default LibroDetalle