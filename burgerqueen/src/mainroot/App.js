import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom"; 
import './App.css';
import Welcome from '../components/Welcome';
import Buttons from '../components/Buttons';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          INICIO
          <Welcome/>
          <Buttons/>

        </Route>
        <Route path="/Mesas" exact>
          MESAS
        </Route>

      </Switch>

    </Router>
  );
}

export default App;