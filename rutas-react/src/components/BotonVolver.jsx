import { useNavigate } from 'react-router-dom'

function BotonVolver() {
    const navigate = useNavigate()

    function volver() {
        navigate(-1)
    }

    return <button onClick={volver}>← Volver</button>
}

export default BotonVolver