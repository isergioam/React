import { Link } from 'react-router-dom'
import { libros } from '../data/libros.js'

function Libros() {
    return (
        <section>

            {libros.map((libro) => (
                <article key={libro.id}>
                    <h3>{libro.titulo}</h3>
                    <Link to={`/libros/${libro.id}`}> 📖 +info </Link>
                </article>
            ))}
        </section>
    )
}

export default Libros
