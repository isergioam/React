import { useNavigate } from 'react-router-dom'
import BotonVolver from '../components/BotonVolver.jsx'

function PanelNavegacion() {
    const navigate = useNavigate()

    function irAProductos() {
        navigate('/productos')
    }

    function irAContacto() {
        navigate('/contacto')
    }

    return (
        <main>
            <h1>Panel de navegación</h1>
            <p>Desde aquí navegaremos usando funciones.</p>

            <button onClick={irAProductos}>Ir a productos</button>
            <button onClick={irAContacto}>Ir a contacto</button>

            <BotonVolver />
        </main>
    )
}

export default PanelNavegacion