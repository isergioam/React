function Bloque({ titulo, children }) {
    return (
        <section>
            <h2>{titulo}</h2>
            <div>{children}</div>
        </section>
    )
}

export default Bloque