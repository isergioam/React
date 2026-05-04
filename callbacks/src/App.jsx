import { useState } from "react"
import SelectorTurno from "./components/SelectorTurno"


function App() {
  const [turno, setTurno] = useState('')

  return (
    <main>
      <SelectorTurno onselect={setTurno} />
      {turno === 'mañana' && <h1 style={{ color: 'beige' }}>Turno de {turno}</h1>}
      {turno === 'tarde' && <h1 style={{ color: 'orange' }}>Turno de {turno}</h1>}
      {turno === 'noche' && <h1 style={{ color: 'purple' }}>Turno de {turno}</h1>}
    </main>
  )
}

export default App