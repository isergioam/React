const titulo = "Panel de herramientas"
const titulo2 = "MENSAJES"
const titulo3 = "Centro de notificaciones"
const txtAyuda = "Ver ayuda"
const txtComprobar = "Comprobar conexión"
const txtVersion = "Mostrar versión"
const txtMsj1 = "Bienvenido!!"
const txtMsj2 = "Pausado!"
const txtMsj3 = "Cerrado"
const btnMsj1 = "Mensaje de bienvenida"
const btnMsj2 = "Mensaje de pausa"
const btnMsj3 = "Mensaje de cierre"


function ayuda() {
    alert("Ayuda")
}

function comprobar() {
    alert("Comprobar")
}

function version() {
    alert("Versión")
}

function msj(txt) {
    alert("Has presionado el botón: " + txt)
}

function Botones() {
    return (
        <div>
            <h1>{titulo}</h1>
            <button onClick={ayuda}>{txtAyuda}</button>
            <button onClick={comprobar}>{txtComprobar}</button>
            <button onClick={version}>{txtVersion}</button>

            <br />
            <br />

            <hr />

            <h1>{titulo2}</h1>

            <button onClick={() => msj(txtMsj1)}>{btnMsj1}</button>
            <button onClick={() => msj(txtMsj2)}>{btnMsj2}</button>
            <button onClick={() => msj(txtMsj3)}>{btnMsj3}</button>

            <br />
            <br />

            <hr />

            <h1>{titulo3}</h1>

        </div >
    )
}

export default Botones