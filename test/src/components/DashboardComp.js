import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Container>
          <Row>
              <Col xs={12} md={2}>
                  <Card>
                      <Card.Body>
                          <Card.Title>Quick Links</Card.Title>
                          <Card.Text>
                              <ul>
                                  <li><a href="#">Link 1</a></li>
                                  <li><a href="#">Link 2</a></li>
                                  <li><a href="#">Link 3</a></li>
                              </ul>
                          </Card.Text>
                      </Card.Body>
                  </Card>
              </Col>
              <Col xs={12} md={3}>
                  <Card>
                      <Card.Body>
                          <Card.Title>Recent Transactions</Card.Title>
                          <Card.Text>
                             
                          </Card.Text>
                      </Card.Body>
                  </Card>
              </Col>
              <Col xs={12} md={3}>
                  <Card>
                      <Card.Body>
                          <Card.Title>Recent Transactions</Card.Title>
                          <Card.Text>
                            
                          </Card.Text>
                      </Card.Body>
                  </Card>
              </Col>
              <Col xs={12} md={3}>
                  <Card>
                      <Card.Body>
                          <Card.Title>Recent Transactions</Card.Title>
                          <Card.Text>
                             
                          </Card.Text>
                      </Card.Body>
                  </Card>
              </Col>
          </Row>
      </Container>
  );
};

export default Dashboard;
