import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap'
import './NavbarComp.css';

export default class NavbarComp extends Component{
    render(){
       return <div>
          <Navbar bg="clear" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand href="/Home">Browser Toolbox</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/ApiTester">API Tester</Nav.Link>
                  <Nav.Link href="/TodolistComp">TODO List</Nav.Link>
                  <Nav.Link href="/Contact">Contact</Nav.Link>
                  <Nav.Link href="/Login">Admin Login</Nav.Link>
                  {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>  
          
        </div>
    }
}