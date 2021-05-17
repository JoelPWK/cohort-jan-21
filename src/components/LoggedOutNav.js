import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import '../App.css';
import logo from '../logo.png';

function LoggedOutNav(props){

         
        return (
            <div>
                <Navbar bg='nav' variant='light' expand='lg' collapseOnSelect>
                    <Navbar.Brand>
                        <img src={logo} height='75vh' alt='logo' className='pr-3' />
                        Recipe Book
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse>

                    <Nav className="inline mx-auto">

                    <Nav.Link onClick={props.login}>Log in</Nav.Link>
                    <Nav.Link>Register</Nav.Link>         
                   
                    </Nav>
                    </Navbar.Collapse>
                    

                </Navbar>
                
            </div>
        )
         
    }


export default LoggedOutNav



