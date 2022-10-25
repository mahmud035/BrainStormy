import React, { useContext } from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../../assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { Button, Image } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
    toast.warn('You just logged out!');
  };

  return (
    <>
      {['md'].map((expand) => (
        <Navbar
          key={expand}
          bg="dark"
          variant="dark"
          expand={expand}
          className="py-3"
        >
          <Container>
            <Link to="/">
              <Navbar.Brand>
                <img
                  alt=""
                  src={logo}
                  width="40"
                  height="40"
                  className="d-inline-block align-center me-2"
                />
                <span className="d-inline-block "> BrainStormy</span>
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              className="navbar-dark bg-dark"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Link to="/">
                    <Navbar.Brand>
                      <img
                        alt=""
                        src={logo}
                        width="40"
                        height="40"
                        className="d-inline-block align-center me-2"
                      />
                      <span className="d-inline-block "> BrainStormy</span>
                    </Navbar.Brand>
                  </Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body bg="dark" variant="dark">
                <Nav className="mx-auto pe-3 nav-items">
                  <NavLink
                    to="/home"
                    className={({ isActive }) =>
                      isActive ? 'active' : undefined
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink to="/courses">Courses</NavLink>
                  <NavLink to="/blog">Blog</NavLink>
                  <NavLink to="/faq">FAQ</NavLink>
                  <NavLink to="/checkout">Checkout</NavLink>
                </Nav>

                <>
                  {user?.email ? (
                    <>
                      <Link to="/login">
                        <Button onClick={handleLogOut} variant="info">
                          Log Out
                        </Button>
                      </Link>
                      &nbsp;&nbsp; &nbsp;&nbsp;
                      <Link to="/profile">
                        {user?.photoURL ? (
                          <Image
                            roundedCircle
                            src={user?.photoURL}
                            style={{ width: '40px', height: '40px' }}
                          ></Image>
                        ) : (
                          <FaUserCircle size={32} />
                        )}
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to="/login">
                        <Button variant="success">Login</Button>
                      </Link>
                      &nbsp;
                      <Link to="/register">
                        <Button variant="info">Register</Button>
                      </Link>
                    </>
                  )}
                </>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Header;
