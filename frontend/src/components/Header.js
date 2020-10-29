import React, { Component } from "react";
// import { Link} from "react-router-dom";
import {LinkContainer} from "react-router-bootstrap"// this does the same aas Link but rap the nave bar
import {Container,Navbar,Nav} from "react-bootstrap"
// import { FaAlignRight } from "react-icons/fa";
// import logo from "../images/logo.png";


export default class Header extends Component {
      constructor(){
        super()
        this.state = {
             isOpen: false
        }
        this.handleToggle=this.handleToggle.bind(this)
      }
      

  handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
       }

  render() {

    return (
      <header>
        <Navbar bg="dark"  variant="dark" expand="lg" collapseOnSelect>
            <Container>
               <LinkContainer to="/">
                  <Navbar.Brand><h1 className="logo">ADDIS RESORT</h1></Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">            
                    <Nav className="ml-auto">
                        <LinkContainer to="/">
                            <Nav.Link  ><i className="fas fa-home"></i>HOME</Nav.Link>
                       </LinkContainer>                   
                       <LinkContainer to="/rooms">
                          <Nav.Link><i className="fas fa-bed"></i>ROOMS</Nav.Link>
                      </LinkContainer>
                    </Nav>
    
                </Navbar.Collapse>
             </Container>
      </Navbar>
            
           </header>
      );
  }
}





