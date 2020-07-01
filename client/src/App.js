import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Team from "./components/pages/Team";
import Elements from "./components/pages/Elements";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/elements'>
          <Elements />
          
        </Route>
        <Route exact path='/team'>
          <Team />
        </Route>
        <Route exact path='/'>
        <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
