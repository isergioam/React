function Pelicula({ nombre, genero, duracion }) {
    return (
        <article>
            <h2>{nombre}</h2>
            <p>Género: {genero}</p>
            <p>Duración: {duracion} minutos</p>
        </article>
    )
}

export default Pelicula