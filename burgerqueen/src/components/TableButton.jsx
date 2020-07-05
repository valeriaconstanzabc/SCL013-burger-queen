import React from 'react'
import mesa from '../img/mesa.png'
import { withRouter } from 'react-router-dom'

const TableButton = (props) => {

    const [table1,  setTable1] = React.useState('')
    const [table2,  setTable2] = React.useState('')
    const [table3,  setTable3] = React.useState('')
    const [table4,  setTable4] = React.useState('')
    const [table5,  setTable5] = React.useState('')
    const [table6,  setTable6] = React.useState('')

    return (
        <main id="tableContainer">
            <div id="clientTitle">
            <h1>Seleccione mesa de cliente:</h1>
            </div>
            <div id="tableButtons">
            <button type="button"  className="btnTable" onClick ={() => setTable1("1")} value={table1}>
                <p className="labelTable">Mesa 1</p>
                <img  src={mesa} alt="mesa" className="imgTable"></img>
                {
                    table1 && (
                        props.history.push('/nuevaOrden')
                    )
                }
            </button>
            <button type="button" className="btnTable" onClick ={() => setTable2("2")} value={table2}>
                <p className="labelTable">Mesa 2</p>
                <img src={mesa} alt="mesa" className="imgTable"></img>
                {
                    table2 && (
                        props.history.push('/nuevaOrden')
                    )
                }
            </button>
            <button type="button" className="btnTable" onClick = {() => setTable3("3")} value={table3}>
                <p className="labelTable">Mesa 3</p>
                <img src={mesa} alt="mesa" className="imgTable"></img>
                {
                    table3 && (
                        props.history.push('/nuevaOrden')
                    )
                }
            </button>
            <button type="button" className="btnTable" onClick = {() => setTable4("4")} value={table4}>
                <p className="labelTable">Mesa 4</p>
                <img src={mesa} alt="mesa" className="imgTable"></img>
                {
                    table4 && (
                        props.history.push('/nuevaOrden')
                    )
                }
            </button>
            <button type="button" className="btnTable" onClick = {() => setTable5("5")} value={table5}>
                <p className="labelTable">Mesa 5</p>
                <img src={mesa} alt="mesa" className="imgTable"></img>
                {
                    table5 && (
                        props.history.push('/nuevaOrden')
                    )
                }
            </button>
            <button type="button" className="btnTable" onClick = {() => setTable6("6")} value={table6}>
                <p className="labelTable">Mesa 6</p>
                <img src={mesa} alt="mesa" className="imgTable"></img>
                {
                    table6 && (
                        props.history.push('/nuevaOrden')
                    )
                }
            </button>
            </div>
        </main>
    )
}

export default withRouter(TableButton)
