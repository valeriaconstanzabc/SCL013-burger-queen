import React, {Fragment}from 'react'
import { Link } from "react-router-dom";

const Buttons = () => {

    const [select, setSelect] = React.useState(true)

    return (
        <Fragment>
            <div id="cookButtonContainer">
                <button id="cookButton">Cocinero</button>
            </div>
            <Link to="/mesero" id="waiterButtonContainer">
                <button id="waiterButton" onClick={() => setSelect(!select)}>Mesero</button>
            </Link>
        </Fragment>

    )
}

export default Buttons



