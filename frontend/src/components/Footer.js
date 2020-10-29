
import React from "react";
import {LinkContainer} from "react-router-bootstrap"// this does the same aas Link but rap the nave bar
import {Container,Navbar,Nav,Row,Col} from "react-bootstrap"


const Footer = () => {
    return (
        <Navbar bg="light"  variant="dark" expand="lg" collapseOnSelect>
        <Container>
           <LinkContainer to="/">
              <Navbar.Brand>ADDIS RESORT</Navbar.Brand>
            </LinkContainer>                
                <Nav className="m-auto">
                <Row><Col className="text-center py-3">  copyright &copy; addis resort</Col></Row>
                </Nav>

           
         </Container>
  </Navbar>
       
    )
}

export default Footer
