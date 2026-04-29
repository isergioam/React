const lugar = "Pabellón Príncipe Felipe"
const ciudad = "Zaragoza"
const horario = "21:30"
const imgLorem = "https://picsum.photos/250/250"
const descripcion = "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"

function Cuerpo() {
    return (
        <div>
            <p>{lugar}, {ciudad} - {horario}</p>
            <br />
            <img src={imgLorem} alt="Lorem Picsum" />
            <br />
            <h3>{descripcion}</h3>
        </div>
    )
}

export default Cuerpo