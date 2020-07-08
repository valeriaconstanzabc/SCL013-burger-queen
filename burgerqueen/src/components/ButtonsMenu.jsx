import React from 'react'
import '../components/componentsCss/ButtonsMenu.css'

const ButtonsMenu = () => {
    return (
        <div id="containerbtnFoods">
            <button className="btnFoods">Bebestibles</button>
            <button className="btnFoods">Comestibles</button>
            <button className="btnFoods">Agregados</button>
        </div>
    )
}

export default ButtonsMenu
