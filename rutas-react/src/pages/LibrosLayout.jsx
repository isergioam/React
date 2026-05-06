import { Outlet } from "react-router-dom"

function LibrosLayout() {
    return (
        <main>
            <header>
                <h1>Nuestro listado de Libros 📚</h1>
                <p>Consulta el catálogo y entra en el detalle de cada libro.</p>
            </header>

            <Outlet />
        </main>
    )
}

export default LibrosLayout