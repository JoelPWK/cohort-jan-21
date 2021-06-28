import React, { Fragment } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const LoggedNav = (props) => {
    function logoutBtn() {
        // props.setLogInData(false)
        window.location.reload(false);
        localStorage.removeItem("userId");
        localStorage.removeItem("gravatar");
    }

    return (
        <Fragment>
            <Navbar.Collapse>
                <Nav className="form-inline my-2 mx-auto">
                    <Nav.Link href="/create-recipe">Create Recipe</Nav.Link>
                    <Nav.Link href="/ingredients">Ingredients List</Nav.Link>

                    <NavDropdown title="Recipes" className="mr-5">
                        <NavDropdown.Item href="/my-recipes">
                            My Recipes
                        </NavDropdown.Item>
                        <NavDropdown.Item>Saved Recipes</NavDropdown.Item>
                        <NavDropdown.Item>Browse Recipes</NavDropdown.Item>
                    </NavDropdown>

                    <input
                        className="mr-1"
                        type="text"
                        placeholder="Search.."
                    />
                    <button className="mr-3" type="submit">
                        search
                    </button>
                    <img
                        className="gravatarImg"
                        src={localStorage.getItem("gravatar")}
                        alt="user gravatar"
                    />

                    <Nav.Link
                        onClick={logoutBtn}
                        // onClick={() => {
                        //     props.logout();
                        // }}
                    >
                        Sign Out
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Fragment>
    );
};

export default LoggedNav;
