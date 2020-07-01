import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 
import './App.css';
import Welcome from '../components/Welcome';
import Buttons from '../components/Buttons';


const App = () =>{
  return ( 
    <Router>
     <Switch></Switch>
       <Route path= "/" exact>
          <Welcome />
      <Buttons />
          </Route>
        
      </Switch>
    </Router>
     


  );

export default App;
