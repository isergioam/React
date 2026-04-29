const nombreExpo = "Exposición de Arte Moderno"
const museo = "Museo de Louvre"
const ciudad = "Paris"
const horario = "De 9:00 a 20:00"
const imgLorem = "https://picsum.photos/250/250"
const descripcion = "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"

function InfoExpo() {
    return (
        <main>
            <h1>{nombreExpo}</h1>
            <p>{museo}, {ciudad} - {horario}</p>
            <br />
            <img src={imgLorem} alt="Lorem Picsum" />
            <br />
            <h3>{descripcion}</h3>
        </main>
    )
}

export default InfoExpo