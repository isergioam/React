function BotonesAviso({ texto, mensaje }) {
    function mostrarAviso() {
        alert(mensaje)
    }

    return (
        <span>

            <button onClick={mostrarAviso}>{texto}</button>

        </span>
    )
}

export default BotonesAviso