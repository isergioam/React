import BotonAccion from "./components/BotonAccion"

const textoMensaje = "Hola, Mundo"
const textoBoton = "Enviar mensaje"

export default function App() {
  function saludar() {
    alert('Hola, React')
  }
  function iniciar() {
    alert('La actividad comienza ahora.')
  }

  function pausar() {
    alert('La actividad se ha pausado.')
  }

  function finalizar() {
    alert('La actividad ha terminado.')
  }

  function elegirSala(sala) {
    alert('Has elegido: ' + sala)
  }

  return (
    <main>
      <h1>Envio de mensajes</h1>
      <BotonAccion txt={textoBoton} msj={textoMensaje} />
      <br />
      <br />
      <hr />
      <br />
      <h1>Eventos básicos</h1>
      <button onClick={saludar}>Saludar</button>
      <br />
      <br />
      <hr />
      <br />
      <h1>Panel de actividad</h1>
      <p>Elige una acción.</p>

      <button onClick={iniciar}>Iniciar</button>
      <button onClick={pausar}>Pausar</button>
      <button onClick={finalizar}>Finalizar</button>
      <br />
      <br />
      <hr />
      <br />
      <h1>Audioguía del museo</h1>

      <button onClick={() => elegirSala('Sala romana')}>
        Sala romana
      </button>

      <button onClick={() => elegirSala('Sala medieval')}>
        Sala medieval
      </button>
    </main>
  )
}