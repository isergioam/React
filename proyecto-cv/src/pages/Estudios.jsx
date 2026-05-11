import { estudios } from '../data/estudios'

function Estudios() {
    return (
        <main>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>🎓 Estudios</h2>

            <ul className="cv-timeline">
                {estudios.map((estudio) => (
                    <li key={estudio.id} className="cv-timeline__item">
                        <span className="cv-timeline__time">{estudio.tiempo}</span>
                        <h3 className="cv-timeline__title">{estudio.titulo}</h3>
                        <p className="cv-timeline__subtitle">{estudio.centro}</p>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Estudios