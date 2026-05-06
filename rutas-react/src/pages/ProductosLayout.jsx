import { Outlet } from 'react-router-dom'

function ProductosLayout() {
    return (
        <main>
            <header>
                <h1>Sección de productos</h1>
                <p>Consulta el catálogo y entra en el detalle de cada producto.</p>
            </header>

            <Outlet />
        </main>
    )
}

export default ProductosLayout