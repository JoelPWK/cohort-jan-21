import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PrivateRoute = ({
    component: Component,
    auth: { isAuthenticated },
    ...rest
}) => (
    <Route
        {...rest}
        render={(props) =>
            !isAuthenticated ? (
                <Redirect to="/login" />
            ) : (
                <Component {...props} />
            )
        }
    />
);

// Forcing the auth prop to be required with a type of object
PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired,
};

// TODO: Use auth state instead of hardcoding as true
const mapStateToProps = () => ({
    auth: true,
});

// Using redux to connect the private routes with correct components through state mapping
export default connect(mapStateToProps)(PrivateRoute);
