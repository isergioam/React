import { experiencia } from '../data/experiencia'

function Experiencia() {
    return (
        <main>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>💼 Experiencia Profesional</h2>

            <ul className="cv-timeline">
                {experiencia.map((item) => (
                    <li key={item.id} className="cv-timeline__item">
                        <span className="cv-timeline__time">{item.tiempo}</span>
                        <h3 className="cv-timeline__title">{item.cargo}</h3>
                        {item.empresa && <div className="cv-timeline__company">{item.empresa}</div>}
                        <p className="cv-timeline__description">{item.descripcion}</p>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Experiencia