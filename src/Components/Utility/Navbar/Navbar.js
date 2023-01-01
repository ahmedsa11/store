import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Navbar.css";
import logo from "../../../images/AS4-removebg-preview.png";
import NavbarSearchHook from "../../../Hook/search/navbar-search-hook";
import GetAllUserCartHook from "../../../Hook/cart/get-user-cart-hook";
function Navbarr() {
  const [searchWord, handleChangeSearch] = NavbarSearchHook();
  const [itemsNum] = GetAllUserCartHook();

  let word = "";
  if (localStorage.getItem("searchWord") != null) {
    word = localStorage.getItem("searchWord");
  }
  const [user, setUser] = useState("");
  useEffect(() => {
    if (localStorage.getItem("user") != null)
      setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser("");
  };

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
              <input
                type="search"
                onChange={handleChangeSearch}
                value={word}
                placeholder="ابحث..."
              />
            </div>
            <div className="cart-log">
              {user !== "" ? (
                <NavDropdown title={user.name} id="basic-nav-dropdown">
                  {user.role === "admin" ? (
                    <NavDropdown.Item href="/admin/allproducts">
                      لوحة التحكم
                    </NavDropdown.Item>
                  ) : (
                    <NavDropdown.Item href="/user/profile">
                      الصفحه الشخصية
                    </NavDropdown.Item>
                  )}
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logOut} href="/">
                    تسجيل خروج
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <div className="log">
                  <Nav.Link href="/login"> دخول </Nav.Link>
                  <i className="fa-solid fa-user"></i>{" "}
                </div>
              )}

              <div className="cart">
                <Nav.Link href="/cart"> العربه </Nav.Link>
                <i className="fa-solid fa-cart-shopping"></i>
                <span class="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
                  {itemsNum || 0}
                </span>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbarr;
