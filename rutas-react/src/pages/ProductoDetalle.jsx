import { Link, useParams } from 'react-router-dom'
import { productos } from '../data/productos.js'

function ProductoDetalle() {
    const { productoId } = useParams()
    const producto = productos.find((item) => item.id === Number(productoId))

    if (!producto) {
        return (
            <section>
                <h2>Producto no encontrado</h2>
                <p>No existe ningún producto con el identificador {productoId}.</p>
                <Link to="/productos">Volver al listado</Link>
            </section>
        )
    }

    return (
        <section>
            <h2>{producto.nombre}</h2>
            <p>Precio: {producto.precio} €</p>
            <p>{producto.descripcion}</p>

            <Link to="/productos">Volver al listado</Link>
        </section>
    )
}

export default ProductoDetalle