import { useState } from 'react'
import { createProduct } from '../services/productsApi.js'

const INITIAL_FORM = {
    title: '',
    price: '',
    category: ''
}

export default function ProductCreate() {
    const [form, setForm] = useState(INITIAL_FORM)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [result, setResult] = useState(null)

    function handleChange(e) {
        const { name, value } = e.target
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }))
        setError('')
    }

    async function handleSubmit(e) {
        e.preventDefault()

        if (!form.title.trim() || !form.price.trim() || !form.category.trim()) {
            setError('Completa título, precio y categoría.')
            return
        }

        try {
            setLoading(true)
            setError('')
            setResult(null)

            const createdProduct = await createProduct({
                title: form.title,
                price: Number(form.price),
                category: form.category
            })

            setResult(createdProduct)
            setForm(INITIAL_FORM)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <section>
            <h2>Crear producto</h2>
            <p className="section-intro">
                Este formulario envía un POST simulado a DummyJSON. La respuesta sirve
                para practicar el flujo, aunque el producto no queda guardado de forma permanente.
            </p>

            <form className="api-form" onSubmit={handleSubmit}>
                <label>
                    Título
                    <input
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        placeholder="Nombre del producto"
                    />
                </label>

                <label>
                    Precio
                    <input
                        name="price"
                        value={form.price}
                        onChange={handleChange}
                        placeholder="99"
                    />
                </label>

                <label>
                    Categoría
                    <input
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        placeholder="smartphones"
                    />
                </label>

                <button className="button primary" type="submit" disabled={loading}>
                    {loading ? 'Enviando...' : 'Crear producto'}
                </button>
            </form>

            {error && <p className="form-error">{error}</p>}

            {result && (
                <pre className="api-result">
                    {JSON.stringify(result, null, 2)}
                </pre>
            )}
        </section>
    )
}