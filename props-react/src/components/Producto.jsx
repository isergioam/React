function Producto({ nombre, precio, disponible }) {
    return (
        <article>
            <h2>{nombre}</h2>
            <p>Precio: {precio} €</p>
            <p>Estado: {disponible ? 'Disponible' : 'Agotado'}</p>
            <br />
        </article>
    )
}

export default Producto