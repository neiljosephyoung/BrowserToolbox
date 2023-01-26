import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Container, Row,Col  } from 'react-bootstrap'
import './HomeComp.css';

function HomeComp(){
  return (
    <Container>
      <Row className="home-row">
        <Col>
          <h1 className="home-title">Welcome to BrowserToolbox!</h1>
          <p className="home-content">
              Thank you for visiting. BrowserToolbox is an OpenSource environment
              to assist with everyday tasks for Developers. This is an ongoing project currently in an uncomplete state.
          </p>
          <p className="home-content">
              If you have any questions or comments, please feel free to contact me through the <Link to="/contact" className="home-link">Contact</Link>  page.
          </p>
          <p className="home-content">
          
              You can find the source code <a href="https://www.github.com/neiljosephyoung/">Here</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeComp;