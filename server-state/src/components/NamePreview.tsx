import { useState } from 'react'

export default function NamePreview() {
    const [name, setName] = useState('')

    return (
        <section>
            <label htmlFor="name">Nombre</label>
            <input
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <p>Vista previa: {name}</p>
        </section>
    )
}