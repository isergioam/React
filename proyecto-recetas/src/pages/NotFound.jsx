import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <section className="page-section">
            <h1>404</h1>
            <p>La página que buscas no existe.</p>
            <Link className="text-link" to="/">
                Volver al inicio
            </Link>
        </section>
    )
}

export default NotFound