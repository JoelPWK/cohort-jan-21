import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

// TODO: Set up auth with database

const PrivateRoute = ({ component: Component, ...rest }) => {
    // TODO: Use auth state instead of hardcoding as true
    const isAuthenticated = true;
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

// Forcing the auth prop to be required with a type of object
PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired,
};

// TODO: Remove redux and replace with useContext()
// Using redux to connect the private routes with correct components through state mapping
export default PrivateRoute;
