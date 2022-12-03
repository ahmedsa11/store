import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Navbar.css";
import logo from "../../../images/AS4-removebg-preview.png";
function Navbarr() {
  return (
    <>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="/">
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <div className="search">
              <input type="search" placeholder="ابحث..." />
            </div>
            <div className="cart-log">
          
            <div className="log">
            <Nav.Link href="/login" >   دخول </Nav.Link>
                <i className="fa-solid fa-user"></i>{" "}
              </div>
             
        
              <div className="cart">
              <Nav.Link href="/cart" >   العربه  </Nav.Link>
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
            
            </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  );
}

export default Navbarr;
