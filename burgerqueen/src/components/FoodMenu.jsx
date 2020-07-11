import React from 'react'
import '../components/componentsCss/FoodMenu.css'
import { firebase } from '../firebase/firebase'
import Order from './Order'

const FoodMenu = () => {

    const data = [
        {nameProduct: ''},
        {priceProduct: ''}
    ]

    const [products, setProducts] = React.useState([])
    const [BurgerFood, setBurgerFood] = React.useState([])
    const [SandwichFood, setSandwichFood]=React.useState([])
    const [DessertFood, setDessertFood]=React.useState([])
    const [objectProduct, setObjectProduct] =React.useState(data)

    //Trayendo data de Firebase
    React.useEffect (() =>{
        const getProducts = async () =>{
            try {
                const db = firebase.firestore()
                //trae todos los documentos de mesas
                const data = await db.collection('productos').get()
                console.log(data.docs)
                //con (doc => ({ id: doc.id,...doc.data() accedemos a la informacion que esta en la data deja la informacion dentro de un objeto
                const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data()}))
                console.log(arrayData)
                const arrayBurgerFoods = arrayData.filter(arrayData => arrayData.category === "burger")
                const arraySandwichFoods = arrayData.filter(arrayData => arrayData.category === "sandwich")
                const arrayDessertFoods = arrayData.filter(arrayData => arrayData.category === "antojos")

                console.log(arrayBurgerFoods)
                console.log(arraySandwichFoods)
                console.log(arrayDessertFoods)

                setProducts(arrayData)
                setBurgerFood(arrayBurgerFoods)
                setSandwichFood(arraySandwichFoods)
                setDessertFood(arrayDessertFoods)
            }catch (error) {
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
    }

    //"Pintando" la pagina de comestibles
    return (
        <div id="containerFoods">
            <Order objectProduct={objectProduct}/>
            <div className="containerTittle">
                <hr className="hr"/>
                <h3>Hamburguesas</h3>
                <hr className="hr"/>
            </div>

            <div className="containerProductFoods">
                <div className="containerbtnFoods">
                    {
                        BurgerFood.map(item => (
                            <button type="button" className="btnFoods" onClick={() => activateClickProduct(item)} key={item.nameproduct}>
                                <img src={item.img} alt="" className="imgFoods"></img>
                                <p className="textFoods" key={item.nameproduct}>
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

            <div className="containerProductFoods">
                <div className="containerbtnFoods">
                    {
                        SandwichFood.map(item => (
                            <button type="button" className="btnFoods" onClick={() => activateClickProduct(item)} key={item.nameproduct}>
                                <img src={item.img} alt="" className="imgFoods"></img>
                                <p className="textFoods" key={item.nameproduct}>
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

            <div className="containerProductFoods">
                <div className="containerbtnFoods">
                    {
                        DessertFood.map(item => (
                            <button type="button" className="btnFoods" onClick={() => activateClickProduct(item)} key={item.nameproduct}>
                                <img src={item.img} alt="" className="imgFoods"></img>
                                <p className="textFoods" key={item.nameproduct}>
                                    {item.nameproduct}</p>
                            </button>
                        ))
                    }            
                </div>
            </div>
        </div>
    )
}

export default FoodMenu