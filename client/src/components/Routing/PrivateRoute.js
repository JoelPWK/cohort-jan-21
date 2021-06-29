import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = Boolean(localStorage.getItem(`userId`));
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

export default PrivateRoute;
