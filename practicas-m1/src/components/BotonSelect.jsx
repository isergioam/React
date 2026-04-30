function BotonSelect() {
    function mostrarPrio() {
        alert("Prioridad: " + event.target.value)
    }

    return (
        <span>

            <h1>Selector de prioridad</h1>

            <select id="prio" onChange={mostrarPrio} defaultValue="">
                <option value="" disabled>Elige una prioridad</option>
                <option value="baja">Baja</option>
                <option value="media">Media</option>
                <option value="alta">Alta</option>
            </select>

        </span>
    )
}

export default BotonSelect