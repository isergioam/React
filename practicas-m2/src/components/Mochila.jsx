import { useState } from "react";

function Mochila() {
    const [obj, setObj] = useState(['Portátil', 'Cargador', 'Ratón'])

    const [newObj, setNewObj] = useState('')


    function addObj() {
        const txt = newObj.trim()
        if (!txt) return

        setObj([...obj, txt])
        setNewObj('')
    }

    function removeObj(objRemove) {
        setObj(obj.filter((obj) => obj !== objRemove))
    }

    return (
        <div>
            <h2>Mochila</h2>
            <br />


            <input
                value={newObj}
                onChange={event => setNewObj(event.target.value)}
                placeholder="Nuevo objeto"
            />

            <button onClick={addObj}>Añadir</button>



            <ul>
                {obj.map((obj, index) => (
                    <li key={index}>{obj} <button onClick={() => removeObj(obj)}>
                        X
                    </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Mochila