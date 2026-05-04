function ActividadCard({ actividad }) {
    return (
        <article>
            <h2>{actividad.nombre}</h2>
            <p>Hora: {actividad.hora}</p>
            <p>Lugar: {actividad.lugar}</p>
        </article>
    )
}

export default ActividadCard