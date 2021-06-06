import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../../Images/logo.png";

const LoggedOutNav = (props) => {
    return (
        <div>
            <Navbar bg="nav" variant="light" expand="lg" collapseOnSelect>
                <Navbar.Brand>
                    <img src={logo} height="75vh" alt="logo" className="pr-3" />
                    Recipe Book
                </Navbar.Brand>

                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="inline mx-auto">
                        <input
                            id="emailAdd"
                            className="mr-2"
                            placeholder="Email Address"
                            onChange={(event) => props.onChange(event)}
                            value={props.email}
                        />
                        <input
                            id="password"
                            placeholder="Password"
                            onChange={(event) => props.onChange(event)}
                            value={props.password}
                        />

                        <Nav.Link onClick={() => props.login()}>
                            Log in
                        </Nav.Link>
                        <Nav.Link href="/register">Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default LoggedOutNav;
