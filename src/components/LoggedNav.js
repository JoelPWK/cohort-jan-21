import React, { Component } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import '../App.css';
import logo from '../logo.png';


 

export class LoggedNav extends Component {
    render() {
        return (
            <div>
                <Navbar bg='nav' variant='light' expand='lg' collapseOnSelect>
                    <Navbar.Brand>
                        <img src={logo} height='75vh' alt='logo' className='pr-3' />
                        Recipe Book
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse>

                    <Nav>

                    <Nav.Link href='test1'>Create Recipe</Nav.Link>
                    <Nav.Link href='test2'>Ingredients List</Nav.Link>
                    
                        <NavDropdown title='Recipes'>

                            <NavDropdown.Item>
                                My Recipes
                            </NavDropdown.Item>

                            <NavDropdown.Item>
                                Saved Recipes
                            </NavDropdown.Item>

                            <NavDropdown.Item>
                                Browse Recipes
                            </NavDropdown.Item>

                        </NavDropdown>
                        
                    <Nav.Link href='test2'>Sign Out</Nav.Link>
                    
                    </Nav>
                    </Navbar.Collapse>
                    

                </Navbar>
                
            </div>
        )
         
    }
}

export default LoggedNav
