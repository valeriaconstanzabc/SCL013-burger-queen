import React from 'react'
import mesa from '../img/mesa.png'

const TableButton = () => {
    return (
        <main id="tableContainer">
            <div id="clientTitle">
            <h1>Seleccione mesa de cliente:</h1>
            </div>
            <div id="tableButtons">
            <button type="button" className="btnTable">
                <p className="labelTable">Mesa 1</p>
                <img src={mesa} alt="mesa" className="imgTable"></img>
            </button>
            <button type="button" className="btnTable">
                <p className="labelTable">Mesa 2</p>
                <img src={mesa} alt="mesa" className="imgTable"></img>
                </button>
            <button type="button" className="btnTable">
                <p className="labelTable">Mesa 3</p>
                <img src={mesa} alt="mesa" className="imgTable"></img>
                </button>
            <button type="button" className="btnTable">
                <p className="labelTable">Mesa 4</p>
                <img src={mesa} alt="mesa" className="imgTable"></img>
            </button>
            <button type="button" className="btnTable">
                <p className="labelTable">Mesa 5</p>
                <img src={mesa} alt="mesa" className="imgTable"></img>
            </button>
            <button type="button" className="btnTable">
                <p className="labelTable">Mesa 6</p>
                <img src={mesa} alt="mesa" className="imgTable"></img>
            </button>
            </div>
        </main>
    )
}

export default TableButton
