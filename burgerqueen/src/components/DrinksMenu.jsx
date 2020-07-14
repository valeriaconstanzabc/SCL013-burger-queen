import React from 'react'
import '../components/componentsCss/DrinksMenu.css'
import '../components/componentsCss/ButtonsMenu.css'
import { firebase } from '../firebase/firebase'
import Order from './Order'

const DrinksMenu = () => {

    const data = [
        {nameProduct: ''},
        {priceProduct: ''}
    ]

    const [products, setProducts] = React.useState([])
    const [objectProduct, setObjectProduct] =React.useState(data)
    
    const [coldDrinks, setColdDrinks] = React.useState([])
    const [teaDrinks, setTeaDrinks] =React.useState([])
    const [coffeDrinks, setCoffeDrinks] =React.useState([])
    
    const [BurgerFood, setBurgerFood] = React.useState([])
    const [SandwichFood, setSandwichFood]=React.useState([])
    const [DessertFood, setDessertFood]=React.useState([])

    const [totalPrice, setTotalPrice] = React.useState([]);
    const [sum] = React.useState([]);


    React.useEffect(() => {
        // traigo la data desde firebase
        const getProducts = async () => {
            try {
                const db = firebase.firestore()
                //trae todos los documentos de mesas
                const data = await db.collection('productos').get()
                console.log(data.docs)
                //con (doc => ({ id: doc.id,...doc.data() accedemos a la informacion que esta en la data deja la informacion dentro de un objeto
                const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data()}))
                console.log(arrayData)
                const arrayColdDrinks = arrayData.filter(arrayData => arrayData.category === "bebidas frias")
                const arrayTeaDrinks = arrayData.filter(arrayData => arrayData.category === "tes")
                const arrayCoffeDrinks = arrayData.filter(arrayData => arrayData.category === "cafes")

                const arrayBurgerFoods = arrayData.filter(arrayData => arrayData.category === "burger")
                const arraySandwichFoods = arrayData.filter(arrayData => arrayData.category === "sandwich")
                const arrayDessertFoods = arrayData.filter(arrayData => arrayData.category === "antojos")

                console.log(arrayColdDrinks)

                setProducts(arrayData)
                setColdDrinks(arrayColdDrinks)
                setTeaDrinks(arrayTeaDrinks)
                setCoffeDrinks(arrayCoffeDrinks)

                setBurgerFood(arrayBurgerFoods)
                setSandwichFood(arraySandwichFoods)
                setDessertFood(arrayDessertFoods)
            } catch (error) {
                console.log(error)
            }
        }
        getProducts()
    }, [])

    const activateClickProduct = (item) => {

        let objectProductt = {
            nameProduct: item.nameproduct,
            priceProduct: item.price
        }

        console.log(objectProductt)
        console.log(products)

        setObjectProduct([...objectProduct, objectProductt])

        const productPrice = parseInt(item.price);

        sum.push = totalPrice.reduce((price1, price2) => price1 + price2, item.price)
        
        totalPrice.push(productPrice)
        setTotalPrice([...totalPrice])
        console.log(sum)
    }

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


            <Order objectProduct={objectProduct} sum={sum} key={objectProduct}/>
            <div className="containerTittle">
                <a name="Bebestibles" id="Bebestibles"></a>
                <hr className="hr"/>
                <h3>Bebidas frias</h3>
                <hr className="hr"/>
            </div>
            <div className="containerProductDrinks">
                <div className="containerbtnDrinks">
                    {
                        coldDrinks.map(item => (
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
                <hr className="hr"/>
                <h3>Tés</h3>
                <hr className="hr"/>
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
                <hr className="hr"/>
                <h3>Cafés</h3>
                <hr className="hr"/>
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
                <hr className="hr"/>
                <h3>Hamburguesas</h3>
                <hr className="hr"/>
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
                <hr className="hr"/>
                <h3>Sandwich</h3>
                <hr className="hr"/>
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
                <hr className="hr"/>
                <h3>Antojos</h3>
                <hr className="hr"/>
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
        </div>
    )
}

export default DrinksMenu