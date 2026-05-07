import { eventos } from "../data/eventos";
import { Link, useParams } from "react-router-dom";

function EventoDetalle() {
    const { id } = useParams();
    const evento = eventos.find((evento) => evento.id === Number(id));
    if (!evento) {
        return (
            <main>
                <h1>Detalle del Evento</h1>
                <p>El evento no existe</p>
            </main>
        )
    }

    return (
        <main>
            <h1>Detalle del Evento</h1>
            <h2>{evento.titulo}</h2>
            <p>{evento.fecha}</p>
            <p>{evento.descripcion}</p>

            <Link to="/eventos">Volver a la lista</Link>
        </main>
    )
}
export default EventoDetalle