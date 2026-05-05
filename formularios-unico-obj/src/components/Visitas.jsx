import { useState } from "react";

function Visitas() {
    const [form, setForm] = useState({
        nombre: "",
        email: "",
        fecha: "",
        zona: "centro",
        comentarios: "",
        acepta: false,
    });

    function cambiarNombre(event) {
        setForm({ ...form, nombre: event.target.value });
    }

    function cambiarEmail(event) {
        setForm({ ...form, email: event.target.value });
    }

    function cambiarFecha(event) {
        setForm({ ...form, fecha: event.target.value });
    }

    function cambiarZona(event) {
        setForm({ ...form, zona: event.target.value });
    }

    function cambiarComentarios(event) {
        setForm({ ...form, comentarios: event.target.value });
    }

    function cambiarAcepta(event) {
        setForm({ ...form, acepta: event.target.checked });
    }

    return (
        <main>
            <h1>Solicitud de visita</h1>

            <label htmlFor="nombre">Nombre</label>
            <input
                id="nombre"
                name="nombre"
                value={form.nombre}
                onChange={cambiarNombre}
            />
            <br />
            <label htmlFor="email">Email</label>
            <input
                id="email"
                name="email"
                value={form.email}
                onChange={cambiarEmail}
            />
            <br />
            <label htmlFor="fecha">Fecha preferida</label>
            <input
                id="fecha"
                name="fecha"
                type="date"
                value={form.fecha}
                onChange={cambiarFecha}
            />
            <br />
            <label htmlFor="zona">Zona</label>
            <select id="zona" name="zona" value={form.zona} onChange={cambiarZona}>
                <option value="centro">Centro</option>
                <option value="norte">Norte</option>
                <option value="sur">Sur</option>
            </select>
            <br />
            <label htmlFor="comentarios">Comentarios</label>
            <textarea
                id="comentarios"
                name="comentarios"
                value={form.comentarios}
                onChange={cambiarComentarios}
            />
            <br />
            <label>
                <input
                    type="checkbox"
                    name="acepta"
                    checked={form.acepta}
                    onChange={cambiarAcepta}
                />
                Acepto las condiciones de la visita
            </label>

            <pre>{JSON.stringify(form, null, 2)}</pre>
        </main>
    );
}

export default Visitas;