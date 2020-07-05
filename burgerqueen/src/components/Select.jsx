import React, {Fragment} from 'react'
import { withRouter } from 'react-router-dom'

const Select = (props) => {

    const [name, setName ] = React.useState('')
    
    return (
        <Fragment>
            <select id="selectName" onChange = { (e) => setName(e.target.value)} value={name}>
                {
                    name && (
                        props.history.push('/mesas')
                    )
                }
                <option value="">Selecciona tu Nombre</option>
                <option to="/mesero" value="Marta Sánchez">Marta Sánchez</option>
                <option value="Juan Carlos Bodoque">Juan Carlos Bodoque</option>
                <option value="Felipe Pérez">Felipe Pérez</option>
            </select>
        </Fragment>
    )
}

export default withRouter(Select)
