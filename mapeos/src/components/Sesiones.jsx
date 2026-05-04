function Sesiones({ sesion }) {
    return (
        <ul>
            <li>{sesion.hora} - {sesion.titulo}</li>
        </ul>
    )
}

export default Sesiones