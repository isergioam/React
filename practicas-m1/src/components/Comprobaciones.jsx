function Comprobaciones() {
    function enviarIncidencia(event) {
        event.preventDefault()

        const datos = new FormData(event.target)
        const nombre = datos.get("nombre")
        const codigoOK = datos.get("codigoOK")
        const archivosOK = datos.get("archivosOK")

        alert("Práctica " + nombre + ": \nCorrecta: " + (codigoOK ? "Sí" : "No") + "\nArchivos correctos: " + (archivosOK ? "Sí" : "No"))
    }

    return (
        <span>

            <h1>Comprobaciones</h1>

            <form onSubmit={enviarIncidencia}>
                <div>
                    <label htmlFor="nombre">Nombre de la práctica: </label>
                    <input id="nombre" type="text" name="nombre" />
                </div>

                <div>
                    <label htmlFor="codigoOK">Código OK: </label>
                    <input type="checkbox" name="codigoOK" value="true" />

                </div>

                <div>
                    <label htmlFor="archivosOK">Archivos OK: </label>
                    <input type="checkbox" name="archivosOK" value="true" />
                </div>

                <button type="submit">Comprobar</button>
            </form>

        </span>
    )
}

export default Comprobaciones