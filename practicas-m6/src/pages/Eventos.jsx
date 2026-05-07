import { eventos } from "../data/eventos";
import { Link } from "react-router-dom";

function Eventos() {
    return (
        <main>
            <h1>Eventos</h1>
            <p>Próximos Eventos</p>
            <ul>
                {eventos.map((evento) => (
                    <li key={evento.id}>
                        <h2>{evento.titulo}</h2>
                        <p>{evento.fecha}</p>
                        <p>{evento.descripcion}</p>
                        <Link to={`/eventos/${evento.id}`}>Ver Evento</Link>
                    </li>
                ))}
            </ul>
            <br />
        </main>
    )
}

export default Eventos