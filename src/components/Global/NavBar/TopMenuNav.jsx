import React, { useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaRegUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logoutAction } from "../../../redux/actions/authActions";

const TopMenuNav = () => {
  const location = useLocation();
  const checkLocation = location.pathname;
  const tokenStorage = localStorage.getItem("token");
  console.log(location, "=======location")
  const authDetails = useSelector((state) => state.authUser);
  const dispatch = useDispatch();
  const navitage = useNavigate();
  const logoutHandle = () => {   
    if (tokenStorage !== null) {
      localStorage.removeItem("token");
      dispatch(logoutAction())

    }
  }

  useEffect(() => {
    if(tokenStorage===null){
      if (authDetails.length === 0) {
        navitage('/login')
      }
    }   
  }, [authDetails])

  return (
    <>
      {
        checkLocation !== "/login" ?
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">Logo</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                 
                  {
                    tokenStorage !== null ?
                    <>
                      <Nav.Link as={Link} to="/bloglist" >Blog</Nav.Link> 
                     <Nav.Link as={Link} to="/list" >List</Nav.Link> 
                    </>
                  
                    : null
                  }
                   
                    <Nav.Link as={Link} to="/mycal">My Calender</Nav.Link>
                    <Nav.Link as={Link} to="/contextlink">Contex Demo</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>

                <Nav>
                  {
                    tokenStorage !== null ? <Nav.Link as={Link} onClick={logoutHandle} >Logout</Nav.Link>
                      : <Nav.Link as={Link} to="/login"><FaRegUser /> Login</Nav.Link>
                  }

                  {/* <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link> */}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          :
          null

      }

    </>
  )
}
export default TopMenuNav;