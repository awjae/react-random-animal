import React from 'react';
import './App_custom.css';
import {BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from './components/views/LandingPage';
import AnimalPage from './components/views/AnimalPage';
import DFItemList from './components/views/DFItemList/DFItemList'



function App() {

  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Switch>
            {
            <Route exact path="/" component={DFItemList} />
            /* <Route exact path="/" component={LandingPage} />
            <Route exact path="/:en_name" component={AnimalPage} /> */
            }
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
