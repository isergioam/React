import { useEffect, useState } from "react"

function Efecto() {
    const [productos, setProductos] = useState(0)

    useEffect(() => {
        document.title = `Hay ${productos} productos`
    }, [productos])

    return (
        <div>
            <h1>Has añadido {productos} productos</h1>
            <button onClick={() => setProductos(productos + 1)}>Añadir</button>
            <button onClick={() => setProductos(0)}>Vaciar</button>
        </div>
    )
}

export default Efecto