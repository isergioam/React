import ActividadCard from "./components/ActividadCard"
import Sesiones from "./components/Sesiones"

const listaActividades = [
  { id: 1, nombre: "Senderismo", hora: "8:00", lugar: "Montañas" },
  { id: 2, nombre: "Kayak", hora: "9:00", lugar: "Mar" },
  { id: 3, nombre: "Rafting", hora: "10:00", lugar: "Rio" }
]

const listaSesiones = [
  { id: 1, hora: "8:00", titulo: "Introduccion" },
  { id: 2, hora: "9:00", titulo: "React" },
  { id: 3, hora: "10:00", titulo: "Componentes" }
]

export default function App() {

  return (
    <main>
      <h1>Actividades al aire libre</h1>
      <ul>

        {listaActividades.map(actividad =>
          (<li><ActividadCard key={actividad.id} actividad={actividad} /></li>))}
      </ul>

      <h2>Sesiones</h2>

      {listaSesiones.map(sesion =>
        (<Sesiones key={sesion.id} sesion={sesion} />))}


    </main>
  )
}