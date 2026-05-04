import SalaCard from './components/SalaCard.jsx'

//Práctica de mapeo de listas
const salas = [
  { id: 1, nombre: 'Sala 1', capacidad: 10, tipo: 'aula' },
  { id: 2, nombre: 'Sala 2', capacidad: 20, tipo: 'aula' },
  { id: 3, nombre: 'Sala 3', capacidad: 30, tipo: 'aula' }
]


export default function App() {
  //Práctica de los tres condicionales (Retorno temprano, operador ternario y &&)
  const autorizado = true
  const resuelta = false
  const prioridad = 'alta'


  if (!autorizado) {
    return (
      <main>
        <h1>Acceso Denegado</h1>
        <p>No tienes permiso para acceder a esta pagina</p>
      </main>
    )
  }

  return (
    <main>
      <h1>Indicencias</h1>
      <p>{resuelta ? 'La incidencia ha sido resuelta' : 'La incidencia no ha sido resuelta'}</p>

      {prioridad === 'alta' && (
        <strong>Esta incidencia tiene prioridad alta</strong>
      )}

      <hr />

      <h2>Salas</h2>
      {salas.map((sala) => (
        <SalaCard key={sala.id} sala={sala} />
      ))}
    </main>
  )
}