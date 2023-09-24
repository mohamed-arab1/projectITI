import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to={"/"} className={"nav-link"}>
            Home
          </NavLink>
          <NavLink to={"/tv"} className={"nav-link"}>
            TvShow
          </NavLink>
          <NavLink to={"/myfavorite"} className={"nav-link"}>
            My Favorite
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
