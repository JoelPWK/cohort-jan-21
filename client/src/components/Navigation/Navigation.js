import Axios from "axios";
import React, { useState } from "react";
import LoggedNav from "./LoggedNav";
import LoggedOutNav from "./LoggedOutNav";

const Navigation = () => {
    const [loginData, setLoginData] = useState({
        LoggedIn: false,
        email: "",
        password: "",
    });

    const { email, password } = loginData;

    const onChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const toggleLogIn = async (e) => {
        setLoginData({
            LoggedIn: true,
            email: document.getElementById("emailAdd").value,
            password: document.getElementById("password").value,
        });
        const userData = {
            email: loginData.email,
            password: loginData.password,
        };
        await Axios.get("http://localhost:3001/", userData);
    };

    const toggleLogOut = () => {
        setLoginData({
            LoggedIn: false,
        });
    };

    if (loginData.LoggedIn === true) {
        return (
            <LoggedNav
                email={loginData.email}
                password={loginData.password}
                logout={toggleLogOut}
            />
        );
    } else {
        return (
            <LoggedOutNav
                email={loginData.email}
                password={loginData.password}
                login={toggleLogIn}
                onChange={(e) => onChange(e)}
            />
        );
    }
};

export default Navigation;
