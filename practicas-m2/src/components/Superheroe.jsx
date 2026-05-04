import { useState } from "react"

function Superheroe() {
    const [mostrar, setMostrar] = useState(false)

    function cambiarEstado() {
        setMostrar(superheroe => !superheroe)
    }

    return (
        <main>
            <h1>Mostrar Superhéroe</h1>
            <button onClick={cambiarEstado}>
                {mostrar ? 'Ocultar' : 'Mostrar Superheroe'}
            </button>

            {mostrar && (
                <section>
                    <p>Super Paquito el chocolatero!</p>
                </section>
            )}
        </main>
    )


}

export default Superheroe
