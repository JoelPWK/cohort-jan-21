import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
// TODO: Import all page components here

const Routes = () => {
    return (
        <div>
            <Switch>
                {/*TODO: Link routes up with their components */}
                <Route exact path="/" />
                <Route exact path="/register" />
                <Route exact path="/login" />
                <PrivateRoute exact path="/dashboard" />
                <PrivateRoute exact path="/recipe/:id" />
                <PrivateRoute exact path="/my-recipes" />
                <PrivateRoute exact path="/create-recipe" />
                <PrivateRoute exact path="/edit-recipe" />
                <PrivateRoute exact path="/ingredients" />
                <PrivateRoute exact path="/add-ingredient" />
                <PrivateRoute exact path="/edit-ingredient" />

                {/*TODO: Add a 'NotFound' route and component:
                <Route component={NotFound} */}
            </Switch>
        </div>
    );
};

export default Routes;
