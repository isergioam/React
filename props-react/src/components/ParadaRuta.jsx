function ParadaRuta({ nombre, tiempo, children }) {
    return (
        <section>
            <h2>{nombre}</h2>
            <p>Tiempo estimado: {tiempo}</p>
            {children}
        </section>
    )
}

export default ParadaRuta