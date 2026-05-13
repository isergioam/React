import { useState } from 'react'
import { deleteProduct } from '../services/productsApi.js'

export default function ProductDeleteDemo() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [result, setResult] = useState(null)

    async function handleDelete() {
        const confirmed = window.confirm('¿Seguro que quieres borrar el producto 1 de forma simulada?')

        if (!confirmed) {
            return
        }

        try {
            setLoading(true)
            setError('')
            setResult(null)

            const deletedProduct = await deleteProduct(1)
            setResult(deletedProduct)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <section>
            <h2>Borrar producto</h2>
            <p className="section-intro">
                Esta pantalla lanza un DELETE simulado sobre el producto con id 1.
            </p>

            <button className="button primary" onClick={handleDelete} disabled={loading}>
                {loading ? 'Borrando...' : 'Borrar producto 1'}
            </button>

            {error && <p className="form-error">{error}</p>}

            {result && (
                <pre className="api-result">
                    {JSON.stringify(result, null, 2)}
                </pre>
            )}
        </section>
    )
}