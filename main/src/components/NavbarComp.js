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
                  <Nav.Link href="/TextEditor">Text Editor</Nav.Link>
                  <Nav.Link href="/Login">Admin Login</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>  
          
        </div>
    }
}