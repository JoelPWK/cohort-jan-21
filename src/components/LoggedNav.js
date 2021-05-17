import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
// import "../App.css";
import logo from "../logo.png";

function LoggedNav(){

    return (
      <div>
        <Navbar bg="nav" variant="light" expand="lg" collapseOnSelect>
          <Navbar.Brand>
            <img src={logo} height="75vh" alt="logo" className="pr-3" />
            Recipe Book
          </Navbar.Brand>
    
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="form-inline my-2 mx-auto">
              <Nav.Link>Create Recipe</Nav.Link>
              <Nav.Link>Ingredients List</Nav.Link>
    
              <NavDropdown title="Recipes" className='mr-5'>
                <NavDropdown.Item>My Recipes</NavDropdown.Item>
    
                <NavDropdown.Item>Saved Recipes</NavDropdown.Item>
    
                <NavDropdown.Item>Browse Recipes</NavDropdown.Item>
              </NavDropdown>
              
              <input  className='mr-1'type="text" placeholder="Search.." />
              <button className='mr-3'type="submit">
                search
              </button>
    
    
              <Nav.Link >Sign Out</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
}

  
  


export default LoggedNav;
