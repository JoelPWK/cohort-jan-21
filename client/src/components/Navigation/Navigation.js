import "bootstrap/dist/css/bootstrap.min.css";
import LoggedNav from "./LoggedNav";
import LoggedOutNav from "./LoggedOutNav";
import React, { useState } from "react";

function Navigation() {
    const [state, setState] = useState({
        LoggedIn: false,
        email: "",
        password: "",
    });

    const toggleLogIn = () => {
        setState({
            LoggedIn: true,
            email: document.getElementById("emailAdd").value,
            password: document.getElementById("password").value,
        });
    };

    const toggleLogOut = () => {
        setState({
            LoggedIn: false,
        });
    };

    if (state.LoggedIn === true) {
        return (
            <LoggedNav
                email={state.email}
                password={state.password}
                logout={toggleLogOut}
            />
        );
    } else {
        return (
            <LoggedOutNav
                email={state.email}
                password={state.password}
                login={toggleLogIn}
            />
        );
    }
}

export default Navigation;
