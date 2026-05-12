import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
    return (
        <article className="product-card">
            <h3>{product.title}</h3>
            <p>{product.category}</p>
            <p><strong>{product.price} €</strong></p>
            <Link to={`/products/${product.id}`}>Ver detalle</Link>
        </article>
    )
}