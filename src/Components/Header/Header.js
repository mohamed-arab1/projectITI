import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { useLocation  } from "react-router-dom";
import { useState , useEffect } from "react";
import "./Header.css"
const Header = () => {
  const [Url, setUrl] = useState("")
  let location = useLocation();
  useEffect(() => {
    setUrl(location.pathname)
    
  }, [location])
  
  return (
    <Navbar className={Url==="/"? "hidden" : "disabled"} bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to={"/home"} className={"nav-link"}>
            Home
          </NavLink>
          <NavLink to={"/tv"} className={"nav-link"}>
            TvShow
          </NavLink>
          <NavLink to={"/movie"} className={"nav-link"}>
            Movies
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
