import ActividadCard from "./components/ActividadCard"

const listaActividades = [
  { id: 1, nombre: "Senderismo", hora: "8:00", lugar: "Montañas" },
  { id: 2, nombre: "Kayak", hora: "9:00", lugar: "Mar" },
  { id: 3, nombre: "Rafting", hora: "10:00", lugar: "Rio" }
]

export default function App() {

  return (
    <main>
      <h1>Actividades al aire libre</h1>
      <ul>

        {listaActividades.map(actividad =>
          (<li><ActividadCard key={actividad.id} actividad={actividad} /></li>))}
      </ul>


    </main>
  )
}