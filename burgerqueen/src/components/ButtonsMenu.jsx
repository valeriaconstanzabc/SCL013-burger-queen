import React from 'react'
import '../components/componentsCss/ButtonsMenu.css'
import { Link } from "react-router-dom";

const ButtonsMenu = () => {
    return (
        <div id="containerbtnFoods">
            <Link to="/ordenBebestibles">
                <button className="btnFoodss">Bebestibles</button>
            </Link>
            <Link to="/ordenComestibles">
                <button className="btnFoodss">Comestibles</button>
            </Link>
            <Link to="/ordenAgregados">
                <button className="btnFoodss">Agregados</button>
            </Link>
        </div>
    )
}

export default ButtonsMenu
