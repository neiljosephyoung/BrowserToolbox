import React from 'react';
import Editor from '@monaco-editor/react';
import { Container, Row,Col  } from 'react-bootstrap'

function TextEditor() {
  
  return (
    <Container>
      <Row className="home-row">
        <Col>
        <h2>Javascript Text Editor</h2>
          <Editor 
          height="70vh" 
          language="javascript" 
          value="console.log('Hello, World!');" 
          theme="vs-dark"
          />
        </Col>
      </Row>      
    </Container>
    
  );
}
export default TextEditor