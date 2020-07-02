import React from 'react'
import mesa from '../img/mesa.png'

const TableButton = () => {
    return (
        <main id="tableContainer">
            <h1>Seleccione mesa de cliente:</h1>
            <button type="button" className="btnTable">
                <label className="labelTable">Mesa 1</label>
                <img src={mesa} alt="mesa" className="imgTable"></img>
            </button>
            <button type="button" className="btnTable">
                <label className="labelTable">Mesa 2</label>
                <img src={mesa} alt="mesa" className="imgTable"></img>
                </button>
            <button type="button" className="btnTable">
                <label className="labelTable">Mesa 3</label>
                <img src={mesa} alt="mesa" className="imgTable"></img>
                </button>
            <button type="button" className="btnTable">
                <label className="labelTable">Mesa 4</label>
                <img src={mesa} alt="mesa" className="imgTable"></img>
            </button>
            <button type="button" className="btnTable">
                <label className="labelTable">Mesa 5</label>
                <img src={mesa} alt="mesa" className="imgTable"></img>
            </button>
            <button type="button" className="btnTable">
                <label className="labelTable">Mesa 6</label>
                <img src={mesa} alt="mesa" className="imgTable"></img>
            </button>
        </main>
    )
}

export default TableButton
