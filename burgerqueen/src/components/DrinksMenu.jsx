import React from 'react'
import '../components/componentsCss/DrinksMenu.css'
import { firebase } from '../firebase/firebase'
import Order from './Order'

const DrinksMenu = () => {

    const data = [
        {nameProduct: ''},
        {priceProduct: ''}
    ]

    const [products, setProducts] = React.useState([])
    const [coldDrinks, setColdDrinks] = React.useState([])
    const [teaDrinks, setTeaDrinks] =React.useState([])
    const [coffeDrinks, setCoffeDrinks] =React.useState([])
    const [objectProduct, setObjectProduct] =React.useState(data)

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

                console.log(arrayColdDrinks)

                setProducts(arrayData)
                setColdDrinks(arrayColdDrinks)
                setTeaDrinks(arrayTeaDrinks)
                setCoffeDrinks(arrayCoffeDrinks)
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
    }

    return (
        <div id="containerDrinks" key={objectProduct}>
            <Order objectProduct={objectProduct} key={objectProduct}/>
            <div className="containerTittle">
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
        </div>
    )
}

export default DrinksMenu