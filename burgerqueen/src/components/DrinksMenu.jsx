import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import '../components/componentsCss/DrinksMenu.css'
import '../components/componentsCss/ButtonsMenu.css'
import Order from './Order'

//Componente que ingresa todos los productos al menu.
const DrinksMenu = () => {

    let { objectProduct, sum, sumName, activateClickProduct, 
        coldDrinks, teaDrinks, coffeDrinks, 
        BurgerFood, SandwichFood, DessertFood, SweetsFood, 
        Toppings} = useContext(UserContext)

    return (
        <div id="containerDrinks" key={objectProduct}>
            <div id="containerbtnFoods">
                <a href="#Bebestibles">
                    <button className="btnFoodss">Bebestibles</button>
                </a>

                <a href="#Comestibles">
                    <button className="btnFoodss">Comestibles</button>
                </a>

                <a href="#Agregados">
                    <button className="btnFoodss">Agregados</button>
                </a>
            </div>

            {/* Entregamos nuestro componente y le pasamos todos los hooks 
            necesarios que se utilizarán en la orden. objectProduct donde tenemos toda
            la info de los productos, sum y sumname donde hacemos la suma de ellos.  */}
            <Order objectProduct={objectProduct} sum={sum} sumName={sumName} key={objectProduct} />
            <div className="containerTittle">
                <a name="Bebestibles" id="Bebestibles">
                    <hr className="hr" />
                    <h3>Bebidas frias</h3>
                    <hr className="hr" />
                </a>
            </div>
            <div className="containerProductDrinks">
                <div className="containerbtnDrinks">
                    {
                        coldDrinks.map(item => (

                            //Hacemos un filtro solo de nuestras bebidas frias y la llamamos 
                            //aca para crear un apartado y sectorizarlas. activateClickProduct
                            //es la función a la que le pasamos la suma y le asignamos valor, id y
                            //nombre a cada producto. 
                            <button type="button" className="btnDrinks" onClick={() => activateClickProduct(item)} key={item.nameproduct}>
                                <img src={item.img} alt="" className="imgDrinks" ></img>
                                <p className="textDrinks" key={item.nameproduct}>
                                    {item.nameproduct}</p>
                            </button>
                        ))
                    }
                </div>
            </div>

            <div className="containerTittle">
                <hr className="hr" />
                <h3>Tés</h3>
                <hr className="hr" />
            </div>
            <div className="containerProductDrinks">
                <div className="containerbtnDrinks">
                    {
                        teaDrinks.map(item => (
                            <button type="button" className="btnDrinks" onClick={() => activateClickProduct(item)} key={item.nameproduct}>
                                <img src={item.img} alt="" className="imgDrinks"></img>
                                <p className="textDrinks" key={item.nameproduct}>
                                    {item.nameproduct}</p>
                            </button>
                        ))
                    }
                </div>
            </div>

            <div className="containerTittle">
                <hr className="hr" />
                <h3>Cafés</h3>
                <hr className="hr" />
            </div>
            <div className="containerProductDrinks">
                <div className="containerbtnDrinks">
                    {
                        coffeDrinks.map(item => (
                            <button type="button" className="btnDrinks" onClick={() => activateClickProduct(item)} key={item.nameproduct}>
                                <img src={item.img} alt="" className="imgDrinks"></img>
                                <p className="textDrinks" key={item.nameproduct}>
                                    {item.nameproduct}</p>
                            </button>
                        ))
                    }
                </div>
            </div>

            <div className="containerTittle">
                <a name="Comestibles" id="Comestibles">
                    <hr className="hr" />
                    <h3>Hamburguesas</h3>
                    <hr className="hr" />
                </a>
            </div>
            <div className="containerProductDrinks">
                <div className="containerbtnDrinks">
                    {
                        BurgerFood.map(item => (
                            <button type="button" className="btnDrinks" onClick={() => activateClickProduct(item)} key={item.nameproduct}>
                                <img src={item.img} alt="" className="imgDrinks"></img>
                                <p className="textDrinks" key={item.nameproduct}>
                                    {item.nameproduct}</p>
                            </button>
                        ))
                    }
                </div>
            </div>

            <div className="containerTittle">
                <hr className="hr" />
                <h3>Sandwich</h3>
                <hr className="hr" />
            </div>
            <div className="containerProductDrinks">
                <div className="containerbtnDrinks">
                    {
                        SandwichFood.map(item => (
                            <button type="button" className="btnDrinks" onClick={() => activateClickProduct(item)} key={item.nameproduct}>
                                <img src={item.img} alt="" className="imgDrinks"></img>
                                <p className="textDrinks" key={item.nameproduct}>
                                    {item.nameproduct}</p>
                            </button>
                        ))
                    }
                </div>
            </div>

            <div className="containerTittle">
                <hr className="hr" />
                <h3>Antojos</h3>
                <hr className="hr" />
            </div>
            <div className="containerProductDrinks">
                <div className="containerbtnDrinks">
                    {
                        DessertFood.map(item => (
                            <button type="button" className="btnDrinks" onClick={() => activateClickProduct(item)} key={item.nameproduct}>
                                <img src={item.img} alt="" className="imgDrinks"></img>
                                <p className="textDrinks" key={item.nameproduct}>
                                    {item.nameproduct}</p>
                            </button>
                        ))
                    }
                </div>
            </div>

            <div className="containerTittle">
                <hr className="hr" />
                <h3>Dulces</h3>
                <hr className="hr" />
            </div>
            <div className="containerProductDrinks">
                <div className="containerbtnDrinks">
                    {
                        SweetsFood.map(item => (
                            <button type="button" className="btnDrinks" onClick={() => activateClickProduct(item)} key={item.nameproduct}>
                                <img src={item.img} alt="" className="imgDrinks"></img>
                                <p className="textDrinks" key={item.nameproduct}>
                                    {item.nameproduct}</p>
                            </button>
                        ))
                    }
                </div>
            </div>
            <div className="containerTittle">
                <a name="Agregados" id="Agregados">
                    <hr className="hr" />
                    <h3>Agregados</h3>
                    <hr className="hr" />
                </a>
            </div>
            <div className="containerProductDrinks">
                <div className="containerbtnDrinks">
                    {
                        Toppings.map(item => (
                            <button type="button" className="btnDrinks" onClick={() => activateClickProduct(item)} key={item.nameproduct}>
                                <img src={item.img} alt="" className="imgDrinks"></img>
                                <p className="textDrinks" key={item.nameproduct}>
                                    {item.nameproduct}</p>
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default DrinksMenu
