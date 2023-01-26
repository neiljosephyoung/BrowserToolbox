import React, { useState } from 'react';
import { Container, Row, Col, Form, ListGroup, Button, Modal, Card  } from 'react-bootstrap';

const TodolistComp = () => {
  //callback action functions set defaults for vars
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState('Are you sure you want to delete this item');
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [modalInfoText, setModalInfoText] = useState('Are you sure you want to delete this item');
  const [removeIndex, setRemoveIndex] = useState(null);

  // function to handle adding a new todo
  const handleAddTodo = () => {
    if(!inputValue){
      setModalInfoText("Please enter some text for the todo title");
      setShowInfoModal(true)
      return;
    }
    // add the new todo to the list of todos
    setTodos([...todos, inputValue]);
    // clear the input field
    setInputValue('');
  };

  // function to handle removing a todo
  const handleRemoveTodo = (index) => {
    // set the index of the todo to be removed
    setRemoveIndex(index);
    // open the modal
    setShowModal(true);
  };

  // function to handle confirming the removal of a todo
  const handleConfirmRemove = () => {
    // create a new array with the todo removed
    const newTodos = [...todos];
    newTodos.splice(removeIndex, 1);
    setTodos(newTodos);
    // close the modal
    setShowModal(false);
  };

  return (
    <Container>
      <Row>
        <Col >
        <Card className='customCard'>
         <Card.Body>
          <h1 className="text-center">Todo List</h1>
          <Form>
            <Form.Group>
              <Form.Control type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Add a new todo" />
            </Form.Group>
            <br></br>
            <Button variant="primary" onClick={handleAddTodo} className="w-100">Add Todo</Button>
          </Form>
          <br></br>
          <ListGroup>
            {todos.map((todo, index) => (
              <ListGroup.Item key={index}  className="d-flex align-items-center py-2">
                {todo} <Button variant="danger" className="ml-auto" onClick={() => handleRemoveTodo(index)}>Remove</Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
          </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalText}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmRemove}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showInfoModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalInfoText}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowInfoModal(false)}>
            Cancel
          </Button>

        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default TodolistComp;