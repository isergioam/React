import { Link, useLocation } from 'react-router-dom'

function ReservaConfirmada() {
    const location = useLocation()
    const nombre = location.state?.nombre
    const turno = location.state?.turno

    return (
        <main>
            <h1>Reserva confirmada</h1>

            {nombre && turno ? (
                <p>
                    Reserva registrada para {nombre} en el turno de {turno}.
                </p>
            ) : (
                <p>La reserva se ha registrado correctamente.</p>
            )}

            <Link to="/">Volver al inicio</Link>
        </main>
    )
}

export default ReservaConfirmada