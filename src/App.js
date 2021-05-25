import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Navigation from "./components/Navigation";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <Switch>
          <Route exact path='/'>
            Hi
            </Route>
          <Route exact path='/register'>
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
