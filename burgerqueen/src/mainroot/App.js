import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import './App.css';
import Welcome from '../components/Welcome';
import Buttons from '../components/Buttons';
import Select from '../components/Select';
import Background from '../components/Background';
import Header from '../components/Header';
import InputClient from '../components/InputClient';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Buttons/>
          <Welcome/>
        </Route>
        <Route path="/mesero" exact>
          <Buttons/>
          <Welcome/>
          <Select/>
        </Route>
        <Route path="/mesas" exact>
          <InputClient />
          <Header />
          <Background />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;