//<----------------Librerias----------------------->
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
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

import ButtonsMenu from '../components/ButtonsMenu';
import DrinksMenu from '../components/DrinksMenu';
import FoodMenu from '../components/FoodMenu';
import {UserProvider} from '../context/UserContext'

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
          <UserProvider>
          <Header />
          <TableButton />
          <Background />
          </UserProvider>
        </Route>
          <Route path="/ordenBebestibles">
            <UserProvider>
            <Header/>
            <Menu/>
            <ButtonsMenu />
            <DrinksMenu />       
            <Background/>
            </UserProvider>
          </Route>
          <Route path="/ordenComestibles">
            <Header/>
            <Menu/>
            <ButtonsMenu />
            <FoodMenu/>
            <Background/>
          </Route>
          <Route path="/ordenAgregados">
            <Header/>
            <Menu/>
            <ButtonsMenu />
            <Background/>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;