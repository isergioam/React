import { useEffect, useState } from 'react'

function LocalStorage() {
    const [favoritos, setFavoritos] = useState(() => {
        const guardados = localStorage.getItem('favoritos')
        return guardados ? JSON.parse(guardados) : []
    })

    useEffect(() => {
        localStorage.setItem('favoritos', JSON.stringify(favoritos))
    }, [favoritos])

    function añadirFavorito(nombre) {
        setFavoritos([...favoritos, nombre])
    }

    function vaciarFavoritos() {
        setFavoritos([])
    }

    return (
        <main>
            <h1>Favoritos</h1>

            <button onClick={() => añadirFavorito('React')}>Añadir React</button>
            <button onClick={() => añadirFavorito('JavaScript')}>Añadir JavaScript</button>
            <button onClick={vaciarFavoritos}>Vaciar favoritos</button>

            <ul>
                {favoritos.map((favorito, index) => (
                    <li key={index}>{favorito}</li>
                ))}
            </ul>
        </main>
    )
}

export default LocalStorage