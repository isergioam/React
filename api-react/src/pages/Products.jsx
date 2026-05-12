import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Products() {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        async function load() {
            try {
                setLoading(true)
                setError('')

                const r = await fetch('https://dummyjson.com/products')
                if (!r.ok) throw new Error('HTTP ' + r.status)

                const data = await r.json()
                setItems(data.products)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        load()
    }, [])

    if (loading) return <p>Cargando productos…</p>
    if (error) return <p>Error: {error}</p>

    return (
        <main>
            <h1>Productos</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <Link to={`/products/${item.id}`}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Products