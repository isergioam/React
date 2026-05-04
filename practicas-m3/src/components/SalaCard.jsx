function SalaCard({ sala }) {
    return (
        <div>
            <h3>Sala: {sala.nombre}</h3>
            <p>Aforo: {sala.capacidad}</p>
            <p>Tipo: {sala.tipo}</p>
        </div>
    )
}

export default SalaCard