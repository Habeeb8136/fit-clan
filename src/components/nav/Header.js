//import { Avatar, Button } from '@mui/material';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Banner from '../../assets/Banner.gif';
import LOGO from '../../assets/logo.svg';
import './nav.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { UserAuth } from '../../AuthContext';

function Header() {

  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
      console.log("You're logged out.")
    } catch (e) {
      console.log(e.message)

    }
  }

  return (
    <div className='headerWrapper'>
      <img src={Banner} alt="" className='banner img-fluid' />
      <img src={LOGO} alt="" className='logo' />
      <div className='headerContainer'>
        <Navbar bg="dark" variant="dark" className='px-2' sticky='top' expand="sm" collapseOnSelect>
          <Link to='/'>
            <Navbar.Brand id='title'>FIT-CLAN</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navTitles">
              <Nav.Item>
                <Nav.Link eventKey="1" as={Link} to="/exercise">
                  Exercise Plans
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="2" as={Link} to="/diet">
                  Diet Plans
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className='navTitles'>
              {
                !(user) ?
                  (
                    <Nav.Link eventKey="4" as={Link} to="/login">
                      Login
                    </Nav.Link>) :
                  (<NavDropdown id="nav-dropdown-dark-example" title={`Hello ${user && user.email}`} menuVariant="dark">
                    <NavDropdown.Item href="#action/3.2">
                      <Nav.Link eventKey="5" as={Link} to="/accont">
                        Account
                      </Nav.Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={handleLogout}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>)
              }
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;