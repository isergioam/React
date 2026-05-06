import { useEffect, useState } from 'react'

function InputLocalStorage() {
    const [nombre, setNombre] = useState(() => {
        return localStorage.getItem('nombre') || ''
    })

    useEffect(() => {
        localStorage.setItem('nombre', nombre)
    }, [nombre])

    return (
        <main>
            <h1>Guardar Nombre en LocalStorage</h1>
            <input type="text" placeholder='Escribe tu nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} />
            <p>Bienvenido, {nombre || 'Invitado'}.</p>
            <button onClick={() => localStorage.removeItem('nombre')}>Limpiar nombre</button>
        </main>
    )
}

export default InputLocalStorage