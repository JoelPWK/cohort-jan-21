import React from "react";
import { Route, Redirect } from "react-router-dom";

// TODO: Set up auth with database

const PrivateRoute = ({ component: Component, ...rest }) => {
    // TODO: Use auth state instead of hardcoding as true
    const isAuthenticated = Boolean(localStorage.getItem("userId"));
    return (
        <Route
            {...rest}
            render={(props) =>
                !isAuthenticated ? (
                    <Redirect to="/" />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
};

// TODO: Remove redux and replace with useContext()
// Using redux to connect the private routes with correct components through state mapping
export default PrivateRoute;
