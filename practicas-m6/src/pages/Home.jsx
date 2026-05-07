import { cursos } from '../data/cursos'

function Home() {
    return (
        <main>
            <h1>Inicio</h1>
            <p>Bienvenido/a a la aplicación de cursos. </p>
            <br />
            <h2>Cursos disponibles:</h2>
            <ul>
                {cursos.map((curso) => (
                    <li key={curso.id}>
                        <h3>{curso.nombre}</h3>
                        <p>{curso.descripcion}</p>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Home