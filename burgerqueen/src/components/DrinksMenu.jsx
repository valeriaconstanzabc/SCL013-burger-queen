import React from 'react'
import Agua from '../img/agua.png'
import Batido from '../img/batido.png'
import Cafe1 from '../img/cafe1.png'
import Cafe3 from '../img/cafe3.png'
import Cafe4 from '../img/cafe4.png'
import Jugo from '../img/jugo.png'
import Soda from '../img/soda.png'
import Te1 from '../img/te1.png'
import Te2 from '../img/te2.png'
import '../components/componentsCss/DrinksMenu.css'

const DrinksMenu = () => {
    return (
        <div id="containerDrinks">
            <div className="containerTittle">
                    <hr className="hr"/>
                    <h3>Cafés</h3>
                    <hr className="hr"/>
            </div>

            <div className="containerProductDrinks">
                <div className="containerbtnDrinks">
                    <button type="button" className="btnDrinks">
                        <img src={Cafe3} alt="" className="imgDrinks"></img>
                        <p className="textDrinks">Café con leche</p>
                    </button>
                </div>
                <div className="containerbtnDrinks">
                    <button type="button" className="btnDrinks">
                        <img src={Cafe4} alt="" className="imgDrinks"></img>
                        <p className="textDrinks">Café expresso</p>
                    </button>
                </div>
                <div className="containerbtnDrinks">
                    <button type="button" className="btnDrinks">
                        <img src={Cafe1} alt="" className="imgDrinks"></img>
                        <p className="textDrinks">Café macchiato</p>
                    </button>
                </div>
            </div>

            <div className="containerTittle">
                <hr className="hr"/>
                <h3>Tés</h3>
                <hr className="hr"/>
            </div>

            <div className="containerProductDrinks">
                <div className="containerbtnDrinks">
                    <button type="button" className="btnDrinks">
                        <img src={Te2} alt="" className="imgDrinks"></img>
                        <p className="textDrinks">Té helado</p>
                    </button>
                </div>
                <div className="containerbtnDrinks">
                    <button type="button" className="btnDrinks">
                        <img src={Te1} alt="" className="imgDrinks"></img>
                        <p className="textDrinks">Té de hoja</p>
                    </button>
                </div>
            </div>

            <div className="containerTittle">
                <hr className="hr"/>
                <h3>Bebidas Frías</h3>
                <hr className="hr"/>
            </div>

            <div className="containerProductDrinks">
                <div className="containerbtnDrinks">
                    <button type="button" className="btnDrinks">
                        <img src={Agua} alt="" className="imgDrinks"></img>
                        <p className="textDrinks">Agua</p>
                    </button>
                </div>
                <div className="containerbtnDrinks">
                    <button type="button" className="btnDrinks">
                        <img src={Jugo} alt="" className="imgDrinks"></img>
                        <p className="textDrinks">Jugo</p>
                    </button>
                </div>
                <div className="containerbtnDrinks">
                    <button type="button" className="btnDrinks">
                        <img src={Soda} alt="" className="imgDrinks"></img>
                        <p className="textDrinks">Soda</p>
                    </button>
                </div>
                <div className="containerbtnDrinks">
                    <button type="button" className="btnDrinks">
                        <img src={Batido} alt="" className="imgDrinks"></img>
                        <p className="textDrinks">Batido</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DrinksMenu
