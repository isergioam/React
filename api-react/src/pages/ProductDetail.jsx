import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function ProductDetail() {
    const { productId } = useParams()
    const navigate = useNavigate()

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        async function load() {
            try {
                setLoading(true)
                setError('')

                const r = await fetch(`https://dummyjson.com/products/${productId}`)
                if (!r.ok) throw new Error('HTTP ' + r.status)

                const data = await r.json()
                setItem(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        load()
    }, [productId])

    if (loading) return <p>Cargando detalle…</p>
    if (error) return <p>Error: {error}</p>

    return (
        <article>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>Precio: {item.price}</p>
            <p>Categoría: {item.category}</p>
            <button onClick={() => navigate(-1)}>← Volver</button>
        </article>
    )
}

export default ProductDetail