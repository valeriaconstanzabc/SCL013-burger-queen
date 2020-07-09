import React from 'react'

export const orderContext = React.createContext()

const OrderProvider = (props) => {

    const [] = React.useState()

    return (
        <orderContext.Provider>
            {props.children}
        </orderContext.Provider>
    )
}

export default OrderProvider
