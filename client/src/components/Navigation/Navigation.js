import Axios from "axios";
import React, { useState, Fragment } from "react";
import { Navbar } from "react-bootstrap";
import { Route, Redirect } from "react-router-dom";
import LoggedNav from "./LoggedNav";
import LoggedOutNav from "./LoggedOutNav";
import logo from "../../Images/logo.png";
import "./Navigation.css";

const Navigation = (props) => {
    const [loginRequest, setLoginRequest] = useState();
    const [alert, setAlert] = useState({
        msg: ``,
        type: ``,
        showing: false,
    });

    const alertHandler = (msg, type, showing = true) => {
        setAlert({ ...alert, msg: msg, type: type, showing: showing });
        if (msg.length > 0) {
            setTimeout(() => {
                alertHandler(``, ``, false);
            }, 5000);
        }
    };

    const changeLoginData = (e) => {
        setLoginRequest({
            ...loginRequest,
            [e.target.name]: e.target.value,
        });
    };

    const toggleLogIn = async (e) => {
        e.preventDefault();
        if (loginRequest.email && loginRequest.password) {
            try {
                await Axios.post(
                    `http://localhost:3001/users/login`,
                    loginRequest
                ).then((response) => {
                    if (response.data) {
                        props.setLoginData({
                            loggedIn: true,
                            userId: response.data,
                        });
                        localStorage.setItem(`userId`, response.data.userId);
                        localStorage.setItem(
                            `gravatar`,
                            response.data.userAvatar
                        );
                        localStorage.setItem(
                            `userEmail`,
                            response.data.userEmail
                        );
                        setLoginRequest();
                        console.log(window.location);
                        if (
                            window.location.pathname === `/` ||
                            window.location.pathname === `/register`
                        ) {
                            window.location.pathname = `/dashboard`;
                        }
                    } else {
                        alertHandler(
                            `Invalid login credentials`,
                            `alert-danger`
                        );
                    }
                });
            } catch {
                alertHandler(`Invalid login credentials`, `alert-danger`);
            }
        }
    };

    const toggleLogOut = () => {
        props.setLoginData(
            localStorage.removeItem(`userId`),
            localStorage.removeItem(`gravatar`),
            localStorage.removeItem(`userEmail`),
            {
                loggedIn: false,
            }
        );
    };

    return (
        <div className="navbar-area">
            <Navbar bg="nav" variant="light" expand="lg" collapseOnSelect>
                <Navbar.Brand
                    href={props.loginData.loggedIn ? "/dashboard" : "/"}
                >
                    <img src={logo} height="75vh" alt="logo" className="pr-3" />
                    Recipe Book
                </Navbar.Brand>
                <Navbar.Toggle />
                {props.loginData.loggedIn ? (
                    <LoggedNav logout={toggleLogOut} />
                ) : (
                    <LoggedOutNav
                        login={(e) => toggleLogIn(e)}
                        changeLoginData={(e) => changeLoginData(e)}
                    />
                )}
            </Navbar>
            {alert.showing ? (
                <div
                    className={`inline-block mb-4 w-50 mx-auto alert ${alert.type}`}
                >
                    {alert.msg}
                </div>
            ) : (
                <Fragment />
            )}
        </div>
    );
};

export default Navigation;
