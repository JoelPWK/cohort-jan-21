import React, { Fragment } from "react";
import { Nav, Navbar } from "react-bootstrap";

const LoggedOutNav = (props) => {
    return (
        <Fragment>
            <Navbar.Collapse>
                <Nav className="inline mx-auto">
                    <form className="form" onSubmit={(e) => props.login(e)}>
                        <input
                            id="emailAdd"
                            className="mr-2"
                            placeholder="Email Address"
                            name="email"
                            onChange={(e) => props.changeLoginData(e)}
                            required
                        />
                        <input
                            id="password"
                            placeholder="Password"
                            name="password"
                            onChange={(e) => props.changeLoginData(e)}
                            required
                        />

                        <input type="submit" value="Log In" />
                    </form>
                    <Nav.Link href="/register">Register</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Fragment>
    );
};

export default LoggedOutNav;
