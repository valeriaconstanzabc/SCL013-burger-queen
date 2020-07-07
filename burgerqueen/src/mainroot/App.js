import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import './App.css';
import '../components/componentsCss/Menu.css'
import '../components/componentsCss/Order.css'



import Welcome from '../components/Welcome';
import Buttons from '../components/Buttons';
import Select from '../components/Select';
import Background from '../components/Background';
import Header from '../components/Header';
import TableButton from '../components/TableButton';
import Menu from '../components/Menu';
import Order from '../components/Order';


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
        <Route path="/orden">
         
          <Header/>
         
          <Menu/>
          <Order/>
          
          <Background/>
          
          
        </Route>
      </Switch>
    </Router>
  );
}

export default App;