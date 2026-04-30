function Inputs() {
    function mostrarTarea(event) {
        document.getElementById("tareaEscrita").innerHTML = "Tarea: " + event.target.value
    }

    return (
        <span>

            <h1>Seguimiento de tarea</h1>

            <label htmlFor="tarea">Nombre de la tarea</label>
            <input type="text" id="tarea" placeholder="Describe la tarea a realizar" onChange={mostrarTarea} />

            <br />
            <br />

            <p id="tareaEscrita"></p>

        </span>
    )
}

export default Inputs