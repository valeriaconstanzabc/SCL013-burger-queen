//<----------------Librerias----------------------->
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import {UserProvider} from '../context/UserContext'
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
import Kitchen from '../components/Kitchen';
import OrdersToDeliver from '../components/OrdersToDeliver';
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
          <UserProvider>
            <Welcome/>
            <Select/>
          </UserProvider>
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

        <Route path="/entregas">
          <UserProvider>
            <Header/>           
            <Background/>
            <OrdersToDeliver />  
          </UserProvider>
        </Route>

        <Route path="/cocina">
          <UserProvider>
            <Header/>        
            <Kitchen />       
            <Background/>
          </UserProvider>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
