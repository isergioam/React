function BotonAccion({ txt, msj }) {
    function mostrarMsj() {
        alert(msj)
    }
    return <button onClick={mostrarMsj}>{txt}</button>
}
export default BotonAccion