import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import './ContactComp.css';

const ContactComp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO send the contact request using the state values
        console.log(name, email, message);
    };

    return (
        <Container>
            <Row className="contact-row">
                <Col>
                <Card className='customCard'>
                 <Card.Body>
                    <h1 className="contact-title">Contact Us</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                        </Form.Group>
                        <Form.Group controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter your message" />
                        </Form.Group>
                        <br></br>
                        <Button variant="primary" type="submit" className="w-100">
                            Submit
                        </Button>
                    </Form>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactComp;