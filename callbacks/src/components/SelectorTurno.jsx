function SelectorTurno({ onSelect }) {
    return (
        <section>
            <h2>Selecciona un turno:</h2>
            <button class="btn-mañana" onClick={() => onSelect('mañana')}>Mañana</button>
            <button class="btn-tarde" onClick={() => onSelect('tarde')}>Tarde</button>
            <button class="btn-noche" onClick={() => onSelect('noche')}>Noche</button>
        </section>
    )
}

export default SelectorTurno