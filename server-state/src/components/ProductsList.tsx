import { useEffect, useState } from 'react'
import { getProducts, type Product } from '../services/products.service'

export default function ProductsList() {
    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        async function loadProducts() {
            try {
                const data = await getProducts()
                setProducts(data)
            } catch {
                setError('No se pudieron cargar los productos')
            } finally {
                setIsLoading(false)
            }
        }

        loadProducts()
    }, [])

    if (isLoading) {
        return <p>Cargando productos...</p>
    }

    if (error) {
        return <p role="alert">{error}</p>
    }

    return (
        <ul>
            {products.map((product) => (
                <li key={product.id}>{product.title}</li>
            ))}
        </ul>
    )
}