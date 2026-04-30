function Incidencias() {

    function enviarIncidencia(event) {
        event.preventDefault()

        const datos = new FormData(event.target)
        const aula = datos.get("aula")
        const descripcion = datos.get("descripcion")
        const prioridad = datos.get("prioridad")

        alert("Incidencia enviada correctamente: " + aula + " - " + descripcion + " - " + prioridad)
    }

    return (
        <span>

            <h1>Incidencias</h1>

            <form onSubmit={enviarIncidencia}>
                <div>
                    <label htmlFor="aula">Aula</label>
                    <input id="aula" type="text" name="aula" />
                </div>

                <div>
                    <label htmlFor="descripcion">Descripción</label>
                    <textarea id="descripcion" name="descripcion" />
                </div>

                <div>
                    <label htmlFor="prioridad">Prioridad</label>
                    <select id="prioridad" name="prioridad" defaultValue="media">
                        <option value="baja">Baja</option>
                        <option value="media">Media</option>
                        <option value="alta">Alta</option>
                    </select>
                </div>

                <button type="submit">Enviar incidencia</button>
            </form>

        </span>
    )
}

export default Incidencias