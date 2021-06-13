import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
// TODO: Import all page components here
import Register from "../Pages/Register";
import CarouselBootstrap from "../Carousel/CarouselBootstrap";
import CreateRecipe from "../Pages/CreateRecipe";
import Ingredients from "../Pages/Ingredients";
import Dashboard from "../Pages/Dashboard";

const Routes = () => {
    return (
        <Fragment>
            <Switch>
                {/*TODO: Link routes up with their components */}
                <Route exact path="/" component={CarouselBootstrap} />
                <Route exact path="/register" component={Register} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute exact path="/recipe/:id" />
                <PrivateRoute exact path="/my-recipes" />
                <PrivateRoute
                    exact
                    path="/create-recipe"
                    component={CreateRecipe}
                />
                <PrivateRoute exact path="/edit-recipe" />
                <PrivateRoute
                    exact
                    path="/ingredients"
                    component={Ingredients}
                />
                <PrivateRoute exact path="/add-ingredient" />
                <PrivateRoute exact path="/edit-ingredient" />

                {/*TODO: Add a 'NotFound' route and component:
                <Route component={NotFound} /> */}
            </Switch>
        </Fragment>
    );
};

export default Routes;
