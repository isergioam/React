import { useNavigate } from 'react-router-dom'

function EditarProducto() {
    const navigate = useNavigate()

    function cancelarEdicion() {
        navigate('/productos')
    }

    function guardarCambios() {
        alert('Cambios guardados correctamente')
        navigate('/productos')
    }

    return (
        <main>
            <h1>Editar producto</h1>
            <p>Este ejemplo simula una pantalla de edición.</p>

            <button onClick={guardarCambios}>Guardar cambios</button>
            <button onClick={cancelarEdicion}>Cancelar</button>
        </main>
    )
}

export default EditarProducto