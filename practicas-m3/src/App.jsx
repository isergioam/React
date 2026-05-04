
export default function App() {
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
    </main>
  )
}