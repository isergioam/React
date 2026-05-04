function SelectorTurno({ onselect }) {
    return (
        <section>
            <h2>Selecciona un turno:</h2>
            <button class="btn-mañana" onClick={() => onselect('mañana')}>Mañana</button>
            <button class="btn-tarde" onClick={() => onselect('tarde')}>Tarde</button>
            <button class="btn-noche" onClick={() => onselect('noche')}>Noche</button>
        </section>
    )
}

export default SelectorTurno