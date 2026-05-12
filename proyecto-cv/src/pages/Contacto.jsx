import { useState } from 'react'

function Contacto() {
    const [form, setForm] = useState({
        nombre: '',
        email: '',
        descripcion: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const destinatario = 'isergioam@gmail.com'
        const asunto = encodeURIComponent(`Nuevo contacto web de: ${form.nombre}`)
        const cuerpo = encodeURIComponent(
            `Nombre: ${form.nombre}\n` +
            `Email: ${form.email}\n\n` +
            `Mensaje:\n${form.descripcion}`
        )
        
        window.location.href = `mailto:${destinatario}?subject=${asunto}&body=${cuerpo}`
    }

    return (
        <main>
            <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>📬 Contacto</h2>
            <p style={{ textAlign: 'center', marginBottom: '2.5rem', color: 'var(--text)', fontSize: '1rem' }}>
                ¿Tienes un proyecto en mente o quieres colaborar? Escríbeme.
            </p>

            <div className="contact-container">
                <form
                    onSubmit={handleSubmit}
                    className="contact-form"
                >
                    <div className="contact-form__group">
                        <label htmlFor="nombre" className="contact-form__label">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={form.nombre}
                            onChange={handleChange}
                            className="contact-form__input"
                            placeholder="Tu nombre"
                            required
                        />
                    </div>

                    <div className="contact-form__group">
                        <label htmlFor="email" className="contact-form__label">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="contact-form__input"
                            placeholder="tu@email.com"
                            required
                        />
                    </div>

                    <div className="contact-form__group">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <label htmlFor="descripcion" className="contact-form__label">Nota o Descripción</label>
                            <span style={{ 
                                fontSize: '0.8rem', 
                                fontFamily: 'var(--mono)', 
                                color: 500 - form.descripcion.length <= 50 ? '#f87171' : 'var(--text)',
                                background: 'rgba(255,255,255,0.05)',
                                padding: '0.1rem 0.4rem',
                                border: '1px solid var(--border)'
                            }}>
                                {500 - form.descripcion.length} restantes
                            </span>
                        </div>
                        <textarea
                            id="descripcion"
                            name="descripcion"
                            value={form.descripcion}
                            onChange={handleChange}
                            maxLength={500}
                            className="contact-form__textarea"
                            placeholder="Háblame sobre tu idea, proyecto o consulta..."
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="contact-form__button">
                        Enviar Mensaje 🚀
                    </button>
                </form>
            </div>
        </main>
    )
}

export default Contacto