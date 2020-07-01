import React, {Fragment}from 'react'
//import Select from './Select'




const Buttons = () => {

    const eventClick = () => {
      
   
    }

    return (
        <Fragment>
            <div id="cookButtonContainer">
                <button id="cookButton" onClick = { () =>eventClick() }>Cocinero</button>
            </div>
            <div id="waiterButtonContainer">
                <button id="waiterButton"> Mesero</button>
            </div>
        </Fragment>
      
    )
}

export default Buttons



