import React, { useEffect, useState } from 'react';
import { Form, InputGroup, DropdownButton, Dropdown, Button, Container, Row, Col,Card, Modal } from 'react-bootstrap';
import './ApiComp.css'


function ApiComp(props){ 
    const [requestMethod, setRequestMethod] = useState('Select Request Type');
    const handleSelect = (eventKey) => {
        setRequestMethod(eventKey);
      };

    const [url, setUrl] = useState('');
   
    // const [text, setText] = useState('');
    // const handleCopy = () => {
    //     navigator.clipboard.writeText(text);
    // };
    // const handleDelete = () => {
    //     setText('');
    // };

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const [bearerToken, setBearer] = useState('');
const [requestBody, setBody] = useState('');
const [savedInputs, setSavedInputs] = useState([]);

const handleSave = () => {
  setSavedInputs([...savedInputs, bearerToken, requestBody]);
};
//do api call and log the response to textarea
const [responseData, setResponseData] = useState('');
const handleNetworkCall = async () => {
  try {
    const response = await fetch('https://my-api.com/endpoint');
    const data = await response.json();
    setResponseData(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error(error);
    setResponseData('Error: failed to fetch data');
  }
};

  return (
  <div>
   <Container>
      
          <Row>
              <Col xs={12} md={12}>
                  <Card className='customCard'>
                  <Card.Body>
                    <div>
                    <h1 style={{ color: 'white' }}>API Tester</h1>  
                    </div>                
              <InputGroup className="mb-3" id="nav-dropdown">
                  <DropdownButton
                      id="nav-dropdown"
                      variant="dark"
                      title={requestMethod}
                      onSelect={handleSelect}
                    >
                    
                    <Dropdown.Item eventKey="Get" >Get</Dropdown.Item>
                    <Dropdown.Item eventKey="Post" >Post</Dropdown.Item>
                    <Dropdown.Item eventKey="Put" >Put</Dropdown.Item>
                    </DropdownButton>
                    <Form.Control 
                     type="text"
                     placeholder="Enter a URL"
                     value={url}
                     onChange={(event) => setUrl(event.target.value)}
                     />
                </InputGroup>
                <Form.Control
                        type="text"
                        placeholder="Enter bearer token here"
                        name="name"
                        value={bearerToken}
                        onChange={(event) => setBearer(event.target.value)}
                      />
                      <br></br>
                <InputGroup>
                <Form.Control 
                    className='requestData'
                    type="text"
                    as="textarea"
                    rows="15"
                    placeholder="Request to Send"
                    
                    style={{
                        backgroundColor: '#181a1b',
                        ':focus': {
                          backgroundColor: '#181a1b',
                        },
                      }}
                />
                <Form.Control 
                    className='responseData'
                    type="text"
                    as="textarea"
                    rows="15"
                    placeholder="Response From Server"
                    value={responseData}
                    style={{
                        backgroundColor: '#181a1b',
                        ':focus': {
                          backgroundColor: '#181a1b',
                        },
                      }}
                />
                </InputGroup>
               <br></br> 
                    <Button variant="success" size="lg" onClick={handleSave}>
                    Send Request
                    </Button>
                    &nbsp;
                    <Button variant="warning" size="lg" >
                    Copy Response to Clipboard
                    </Button>
                    &nbsp;
                    <Button variant="danger" size="lg"  height="auto" width="auto">
                    Clear Response
                    </Button>
                    &nbsp;
                    {/* <Button variant="primary" size="lg" onClick={handleShow}>
                      Settings
                    </Button> */}
                    <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Settings</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form onSubmit={handleNetworkCall}>
                    <Form.Group>
                      <Form.Label>Bearer Token</Form.Label>
                       <div className="d-grid gap-2 align-items-right">
                       </div>
                    </Form.Group>
                    </Form>
                    </Modal.Body>
                    </Modal>
                    <p>Saved request method: {requestMethod}</p>
                    <p>Saved url: {url}</p>
                    <p>Saved bearer token: {bearerToken}</p>
                    <p>Saved response body: {responseData}</p>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    </div>
  )
};

export default (ApiComp);