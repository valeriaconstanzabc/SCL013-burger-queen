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

import DrinksMenu from '../components/DrinksMenu';
import {UserProvider} from '../context/UserContext'
import Order from '../components/Order';

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
          <Route path="/orden">
            <UserProvider>
            <Header/>
            <Menu/>
            <DrinksMenu />       
            <Background/>
            </UserProvider>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;