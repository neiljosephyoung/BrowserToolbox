import React, { Component, useState, useEffect  } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody, 
  }
  from 'mdb-react-ui-kit';
import './LoginComp.css'
import Alert from 'react-bootstrap/Alert';

function LoginComp(props){ 
  const [show, setShow] = useState(false);

       return (<div>  
       <MDBContainer fluid>
       <MDBRow className='d-flex justify-content-center align-items-center h-100'>
         <MDBCol col='12'>
 
           <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
             <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
 
               <h2 className="fw-bold mb-2 ">Admin Login</h2>
               <p className="text-white-50 mb-5">Enter your email and password below</p>
              

               <div class="inputs">
               <input type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"/>
                <br class="brSmall"/>
                <input type="pass" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"/>
              </div>
               <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="gotoPasswordRecovery">Forgot password?</a></p>
               <Button variant="outline-primary" size="lg" 
               onClick={() => setShow(true)}
               >
                Login
               </Button>
             
               <Alert show={show} variant="success" style={{ width: "42rem" }}>
                  <Alert.Heading>Login Pressed</Alert.Heading>
                  <p>
                    Functionality to be added
                  </p>
                  <hr />
                  <Button variant="outline-primary" size="sm" 
                  onClick={() => setShow(false)}
                  >Close</Button>
                </Alert>
               
             </MDBCardBody>
           </MDBCard>
        
         </MDBCol>
       </MDBRow>
       
     </MDBContainer>
     </div>
       );
}
export default (LoginComp);