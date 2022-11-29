import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "./Navbar.css";
import logo from "../../../images/AS4-removebg-preview.png";
function Navbarr() {
  return (
    <>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#">
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
            <div className="cart">
                دخول
                <i className="fa-solid fa-user"></i>{" "}
              </div>
              <div className="log">
                العربه
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
