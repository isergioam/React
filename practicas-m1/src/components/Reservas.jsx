function Reservas() {
    function enviarIncidencia(event) {
        event.preventDefault()

        const datos = new FormData(event.target)
        const nombre = datos.get("nombre")
        const pax = datos.get("pax")
        const fecha = datos.get("fecha")

        alert("Reserva guardada correctamente: " + nombre + " - " + pax + " - " + fecha)
    }

    return (
        <span>

            <h1>Reservas</h1>

            <form onSubmit={enviarIncidencia}>
                <div>
                    <label htmlFor="nombre">Nombre: </label>
                    <input id="nombre" type="text" name="nombre" />
                </div>

                <div>
                    <label htmlFor="pax">PAX: </label>
                    <input id="pax" name="pax" type="number" />

                </div>

                <div>
                    <label htmlFor="fecha">Fecha: </label>
                    <input type="date" id="fecha" name="fecha" />
                </div>

                <button type="submit">Guardar reserva</button>
            </form>

        </span>
    )
}

export default Reservas