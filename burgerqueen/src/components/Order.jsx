import React, { Fragment } from 'react'

const Order = (props) => {
    console.log(props.objectProduct)
    return (
        <div id="containerOrderandButtons">
            <div id="containerOrder">
                <div id="orderTitle">
                    <h1>Mesa 1</h1>
                    <p className="dateAndHour">Fecha:</p>
                </div>
      import React, { Fragment } from 'react'

const Order = (props) => {
    console.log(props.objectProduct)
    return (
        <div id="containerOrderandButtons">
            <div id="containerOrder">
                <div id="orderTitle">
                    <h1>Mesa 1</h1>
                    <p className="dateAndHour">Fecha:</p>
                </div>
                <hr />
                <div id="detailOrder">
                    <div id="orderList">
                        {
                            props.objectProduct.map(obj => (
                            <th >

                            <h3>{obj.nameProduct}</h3>
                            <h3>{obj.priceProduct}</h3>
                            </th>
                                
                            ))
                            }
                        {/*<h3>{props.objectProduct.nameProduct}</h3>
                        <h3>{props.objectProduct.priceProduct}</h3>*/}
                    </div>
                    <hr />
                    <div>

                    </div>
                    <div id="orderTotal">
                        <hr />
                        <h3>Total:</h3>
                    </div>
                </div>
            </div>
            <div id="containerButtonsOrder">
                <button id="returnButton">
                    Volver
            </button>
                <button id="sendToKitchenButton">
                    A la cocina
            </button>
            </div>
        </div>
    )
}

export default Order
          <hr />
                <div id="detailOrder">
                    <div id="orderList">
                        {
                            props.objectProduct.map(obj => (
                            <th >

                            <h3>{obj.nameProduct}</h3>
                            <h3>{obj.priceProduct}</h3>
                            </th>
                                
                            ))
                            }
                        {/*<h3>{props.objectProduct.nameProduct}</h3>
                        <h3>{props.objectProduct.priceProduct}</h3>*/}
                    </div>
                    <hr />
                    <div>

                    </div>
                    <div id="orderTotal">
                        <hr />
                        <h3>Total:</h3>
                    </div>
                </div>
            </div>
            <div id="containerButtonsOrder">
                <button id="returnButton">
                    Volver
            </button>
                <button id="sendToKitchenButton">
                    A la cocina
            </button>
            </div>
        </div>
    )
}

export default Order

