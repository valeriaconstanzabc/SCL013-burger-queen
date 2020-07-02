import React, {Fragment}from 'react'
import { Link } from "react-router-dom";

const Buttons = () => {

    return (
        <Fragment>
            <div id="cookButtonContainer">
                <button id="cookButton">Cocinero</button>
            </div>
            <Link to="/mesero" id="waiterButtonContainer">
                <button id="waiterButton"> Mesero</button>
            </Link>
        </Fragment>

    )
}

export default Buttons



