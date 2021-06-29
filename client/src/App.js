import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import BackToTop from "./components/BackToTop/BackToTop";
import Routes from "./components/Routing/Routes";

const App = () => {
    const [loginData, setLoginData] = useState({
        loggedIn: Boolean(localStorage.getItem(`userId`)),
        userId: ``,
    });

    return (
        <Fragment>
            <Router>
                <Navigation loginData={loginData} setLoginData={setLoginData} />
                <BackToTop />
                <Switch>
                    <Route component={Routes} />
                </Switch>
            </Router>
        </Fragment>
    );
};

export default App;
