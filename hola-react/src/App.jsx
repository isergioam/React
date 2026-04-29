const titulo = 'Resumen de compra'
const unidades = 3
const precioUnidad = 12

const imgLorem = "https://picsum.photos/150/150"

const actividad = 'Programación en JAVA'
const lugar = 'Centro Público de FPE Remedios Rojo'
const duracion = '300 horas'
const plazas = 15

export default function App() {
  return (
    <main>
      <h1 className='destacado'>{titulo}</h1>
      <p>Unidades: {unidades} </p>
      <p>Precio por unidad: {precioUnidad} €</p>
      <p><strong>Total: {unidades * precioUnidad} €</strong></p>
      <br />

      <h1>{actividad}</h1>
      <p>Lugar: {lugar}</p>
      <p>Duración: {duracion}</p>
      <p>Plazas: {plazas}</p>
      <br />
      <img className='img-lorem' src={imgLorem} alt="Lorem Picsum" />


    </main>
  )
}


