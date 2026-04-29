function BotonAccion({ txt, msj }) {
    return <button onClick={() => alert(msj)}>{txt}</button>
}

export default BotonAccion