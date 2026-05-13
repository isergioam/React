import { useState } from 'react'
import { updateProduct } from '../services/productsApi.js'

export default function ProductEditDemo() {
    const [title, setTitle] = useState('Producto editado desde React')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [result, setResult] = useState(null)

    async function handleUpdate() {
        if (!title.trim()) {
            setError('El título no puede estar vacío.')
            return
        }

        try {
            setLoading(true)
            setError('')
            setResult(null)

            const updatedProduct = await updateProduct(1, { title })
            setResult(updatedProduct)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <section>
            <h2>Editar producto</h2>
            <p className="section-intro">
                Esta pantalla modifica de forma simulada el producto con id 1 usando PATCH.
            </p>

            <div className="api-form">
                <label>
                    Nuevo título
                    <input value={title} onChange={e => setTitle(e.target.value)} />
                </label>

                <button className="button primary" onClick={handleUpdate} disabled={loading}>
                    {loading ? 'Guardando...' : 'Guardar cambios'}
                </button>
            </div>

            {error && <p className="form-error">{error}</p>}

            {result && (
                <pre className="api-result">
                    {JSON.stringify(result, null, 2)}
                </pre>
            )}
        </section>
    )
}