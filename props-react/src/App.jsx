
import Producto from './components/Producto.jsx'
import Bloque from './components/Bloque.jsx'
import Pelicula from './components/Pelicula.jsx'
import ParadaRuta from './components/ParadaRuta.jsx'

export default function App() {
  return (
    <main>
      <h1>Ruta de una mañana</h1>
      <br />
      <ParadaRuta nombre="Mirador del puerto" tiempo="20 minutos">
        <p>Buen lugar para empezar la visita y ver la ciudad desde arriba.</p>
      </ParadaRuta>

      <ParadaRuta nombre="Mercado antiguo" tiempo="45 minutos">
        <p>Parada recomendada para probar productos locales.</p>
        <strong>No olvides mirar los puestos de artesanía.</strong>
      </ParadaRuta>

      <br />
      <br />
      <hr />
      <br />

      <h1>Listado de Peliculas</h1>
      <br />
      <Pelicula nombre="El Señor de los Anillos" genero="Fantasia" duracion={178} />
      <br />
      <Pelicula nombre="Harry Potter" genero="Fantasia" duracion={152} />
      <br />
      <Pelicula nombre="Star Wars" genero="Ciencia Fiction" duracion={125} />

      <br />
      <hr />
      <br />

      <h1>Guía del visitante</h1>
      <br />
      <Bloque titulo="Antes de entrar">
        <p>Prepara tu entrada y revisa el horario de acceso.</p>
      </Bloque>

      <Bloque titulo="Durante la visita">
        <ul>
          <li>Respeta las zonas señalizadas.</li>
          <li>No uses flash en las fotografías.</li>
        </ul>
      </Bloque>

      <br />
      <hr />
      <br />

      <h1>Productos destacados</h1>
      <br />
      <Producto nombre="Mochila urbana" precio={25.99} />
      <Producto nombre="Botella térmica" precio={12.50} disponible />
      <Producto nombre="Lámpara de escritorio" precio={18.90} />


      <br />
      <br />

    </main>
  )
}