import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProductById } from '../services/productsApi.js'

export default function ProductDetail() {
    const { productId } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        async function loadProduct() {
            try {
                setLoading(true)
                setError('')

                const productFromApi = await getProductById(productId)
                setProduct(productFromApi)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        loadProduct()
    }, [productId])

    if (loading) return <p>Cargando detalle...</p>
    if (error) return <p>Error: {error}</p>
    if (!product) return <p>No se encontró el producto.</p>

    return (
        <article className="product-detail">


            <h2>{product.title}</h2>
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.description}</p>
            <p><strong>Precio:</strong> {product.price} €</p>
            <p><strong>Categoría:</strong> {product.category}</p>
            <p><strong>Marca:</strong> {product.brand}</p>

            <Link to="/products">← Volver al listado</Link>
        </article>
    )
}