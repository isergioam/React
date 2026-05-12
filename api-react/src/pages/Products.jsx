import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard.jsx'
import { getProducts } from '../services/productsApi.js'

export default function Products() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        async function loadProducts() {
            try {
                setLoading(true)
                setError('')

                const productsFromApi = await getProducts()
                setProducts(productsFromApi)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        loadProducts()
    }, [])

    if (loading) return <p>Cargando productos...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <section>
            <h1>Productos</h1>
            <p className="section-intro">
                Listado de productos cargados desde una API pública externa.
            </p>

            <div className="products-grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    )
}