import React, { Fragment } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./LoggedOutNav.css";

const LoggedOutNav = (props) => {
    return (
        <Fragment>
            <Navbar.Collapse>
                <Nav className="inline mx-auto">
                    <form
                        className="form mt-1"
                        onSubmit={(e) => props.login(e)}
                    >
                        <input
                            id="emailAdd"
                            className="mx-2"
                            placeholder="Email Address"
                            name="email"
                            onChange={(e) => props.changeLoginData(e)}
                            required
                        />
                        <input
                            id="password"
                            placeholder="Password"
                            name="password"
                            className="mx-2"
                            onChange={(e) => props.changeLoginData(e)}
                            required
                        />
                        <input
                            type="submit"
                            value="Log In"
                            className="form-button mx-2"
                        />
                    </form>
                    <Nav.Link href="/register" className="form-button mx-2">
                        Register
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Fragment>
    );
};

export default LoggedOutNav;
