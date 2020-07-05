import React from 'react'
import mesa from '../img/mesa.png'
//import { withRouter } from 'react-router-dom'

const TableButton = () => {

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
            <button className="btnTable" onClick = { (e) => setTable1(e.target.value)} value={table1}>
                <p className="labelTable">Mesa 1</p>
                <img  src={mesa} alt="mesa" className="imgTable"></img>
            </button>
            <button type="button" className="btnTable" onClick = { (e) => setTable2(e.target.value)} value={table2}>
                <p className="labelTable">Mesa 2</p>
                <img src={mesa} alt="mesa" className="imgTable"></img>
                </button>
            <button type="button" className="btnTable" onClick = { (e) => setTable3(e.target.value)} value={table3}>
                <p className="labelTable">Mesa 3</p>
                <img src={mesa} alt="mesa" className="imgTable"></img>
                </button>
            <button type="button" className="btnTable" onClick = { (e) => setTable4(e.target.value)} value={table4}>
                <p className="labelTable">Mesa 4</p>
                <img src={mesa} alt="mesa" className="imgTable"></img>
            </button>
            <button type="button" className="btnTable" onClick = { (e) => setTable5(e.target.value)} value={table5}>
                <p className="labelTable">Mesa 5</p>
                <img src={mesa} alt="mesa" className="imgTable"></img>
            </button>
            <button type="button" className="btnTable" onClick = { (e) => setTable6(e.target.value)} value={table6}>
                <p className="labelTable">Mesa 6</p>
                <img src={mesa} alt="mesa" className="imgTable"></img>
            </button>
            </div>
        </main>
    )
}

export default TableButton
