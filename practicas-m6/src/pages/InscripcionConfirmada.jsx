import { Link, useLocation } from 'react-router-dom'

function InscripcionConfirmada() {
    const location = useLocation()
    const nombre = location.state?.nombre
    const curso = location.state?.curso

    return (
        <main>
            <h1>Inscripción confirmada</h1>

            {nombre && curso ? (
                <p>
                    Inscripción confirmada para {nombre} en el curso de {curso}.
                </p>
            ) : (
                <p>La inscripción se ha registrado correctamente.</p>
            )}

            <br />

            <Link to="/">Volver al inicio</Link>
        </main>
    )
}

export default InscripcionConfirmada