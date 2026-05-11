import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <p>
            404 — Página no encontrada. Vuelve al <Link to="/">inicio</Link>.
        </p>
    )
}

export default NotFound