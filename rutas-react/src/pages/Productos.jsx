import { Link } from 'react-router-dom'
import { productos } from '../data/productos.js'

function Productos() {
    return (
        <section>
            <h2>Listado de productos</h2>

            {productos.map((producto) => (
                <article key={producto.id}>
                    <h3>{producto.nombre}</h3>
                    <p>Precio: {producto.precio} €</p>
                    <Link to={`/productos/${producto.id}`}>Ver detalle</Link>
                </article>
            ))}
        </section>
    )
}

export default Productos