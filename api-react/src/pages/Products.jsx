import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import { searchProducts } from '../services/productsApi.js'

export default function Products() {
    const [params, setParams] = useSearchParams()
    const q = params.get('q') || ''

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        async function loadProducts() {
            try {
                setLoading(true)
                setError('')

                const productsFromApi = await searchProducts(q)
                setProducts(productsFromApi)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        loadProducts()
    }, [q])

    function handleSearchChange(e) {
        const value = e.target.value

        if (!value.trim()) {
            setParams({})
            return
        }

        setParams({ q: value })
    }

    if (loading) return <p>Cargando productos...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <section>
            <h2>Productos</h2>
            <p className="section-intro">
                Busca productos usando una petición remota a DummyJSON. La búsqueda se
                guarda en la URL para poder compartirla o recargar la página.
            </p>

            <label className="search-box">
                Buscar producto
                <input
                    value={q}
                    onChange={handleSearchChange}
                    placeholder="Ejemplo: phone"
                />
            </label>

            <p className="results-count">Resultados: {products.length}</p>

            {products.length === 0 ? (
                <p>No hay productos para esta búsqueda.</p>
            ) : (
                <div className="products-grid">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </section>
    )
}