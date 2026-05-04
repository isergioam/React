import { useState } from "react"

function TarjetaPerfil() {
    const [msjNombre, setMsjNombre] = useState("")
    const [msjProfesion, setMsjProfesion] = useState("")
    const [msjCiudad, setMsjCiudad] = useState("")

    return (
        <div>
            <br />
            <div>


                <h2>Introduzca sus datos</h2>
                <br />
                <label htmlFor="nombre">Nombre: </label>
                <input
                    value={msjNombre}
                    onChange={event => setMsjNombre(event.target.value)}
                    placeholder="Escribe tu nombre"
                />
                <br />
                <label htmlFor="profesion">Profesion: </label>
                <input
                    value={msjProfesion}
                    onChange={event => setMsjProfesion(event.target.value)}
                    placeholder="Escribe tu Profesion"
                />
                <br />
                <label htmlFor="ciudad">Ciudad: </label>
                <input
                    value={msjCiudad}
                    onChange={event => setMsjCiudad(event.target.value)}
                    placeholder="Escribe tu Ciudad"
                />
            </div>
            <br /><br />

            <hr style={{ background: '#aa3bff', height: '3px', width: '50%' }} />

            <br />

            <h1>Tarjeta de Perfil</h1>

            <div class="tarjeta-perfil">




                {(msjNombre.length > 0 || msjProfesion.length > 0 || msjCiudad.length > 0) &&
                    <section>

                        <p><b>Nombre:</b> {msjNombre}</p>
                        <p><b>Profesion:</b> {msjProfesion}</p>
                        <p><b>Ciudad:</b> {msjCiudad}</p>
                    </section>
                }

            </div>

        </div>
    )
}

export default TarjetaPerfil