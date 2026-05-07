import { Link, useLocation } from 'react-router-dom'

function Confirmacion() {
    const location = useLocation()
    const nombre = location.state?.nombre

    return (
        <main>
            <h1>Registro completado</h1>

            {nombre ? (
                <p>Los datos de {nombre} se han recibido correctamente.</p>
            ) : (
                <p>Los datos se han recibido correctamente.</p>
            )}

            <Link to="/">Volver al inicio</Link>
        </main>
    )
}

export default Confirmacion