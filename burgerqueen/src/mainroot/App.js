//<----------------Librerias----------------------->
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
  import OrderProvider from '../context/OrderProvider'
//<----------------Css----------------------------->
import './App.css';
import '../components/componentsCss/Menu.css'
import '../components/componentsCss/Order.css'
//<----------------Componentes--------------------->
import Welcome from '../components/Welcome';
import Buttons from '../components/Buttons';
import Select from '../components/Select';
import Background from '../components/Background';
import Header from '../components/Header';
import TableButton from '../components/TableButton';
import Menu from '../components/Menu';
import Order from '../components/Order';
import ButtonsMenu from '../components/ButtonsMenu';
import DrinksMenu from '../components/DrinksMenu';

//<----------------Función rutas------------------->
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Buttons/>
          <Welcome/>
        </Route>
        <Route path="/mesero">
          <Buttons/>
          <Welcome/>
          <Select/>
        </Route>
        <Route path="/mesas">
          <Header />
          <TableButton />
          <Background />
        </Route>
        
          <Route path="/ordenBebestibles">
            <Header/>
            <Menu/>
            <ButtonsMenu />
            <DrinksMenu />  
            {/* <OrderProvider>        */}
              <Order />
            {/* </OrderProvider> */}
            <Background/>
          </Route>
          <Route path="/ordenComestibles">
            <Header/>
            <Menu/>
            <ButtonsMenu />
            
            <Order/>
            <Background/>
          </Route>
          <Route path="/ordenAgregados">
            <Header/>
            <Menu/>
            <ButtonsMenu />

            <Order/>
            <Background/>
          </Route>
        
      </Switch>
    </Router>
  );
}

export default App;