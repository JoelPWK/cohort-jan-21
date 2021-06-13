import React, { Fragment, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Routes from "./components/Routing/Routes";

const App = () => {
    const [loginData, setLoginData] = useState({
        loggedIn: false,
    });

    return (
        <Fragment>
            <Router>
                <Navigation loginData={loginData} setLoginData={setLoginData} />
                <Switch>
                    <Route component={Routes} />
                </Switch>
            </Router>
        </Fragment>
    );
};

export default App;
