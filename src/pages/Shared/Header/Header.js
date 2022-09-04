import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {
    let activeStyle = {
        // color: "aqua",
        fontWeight: "bold",
        textDecoration: "underline",

    }
    return (
        <Navbar collapseOnSelect expand="lg" className='bg' variant="white">
            <Container>
               <h3
               style={{
                fontWeight : "bold",
                
               }}
               >Web Developer</h3>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto py-2">
                        {/* <Nav.Link href="#features">Home</Nav.Link> */}


                        <NavLink
                            to="/home"
                            className="text-dark"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        > Home
                        </NavLink>


                        <NavLink
                        className="text-dark"
                            to="/about"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        > About Us
                        </NavLink>
                        <NavLink
                        className="text-dark"
                            to="/blogs"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >  Blogs
                        </NavLink>
                        <NavLink
                        className="text-dark"
                            to="/contact"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >  Contact
                        </NavLink>
                        <a
                       className='text-dark'
                        href="https://drive.google.com/file/d/1zg4fARzyZtThVNZp2D-atylCTzVOfRtD/preview" target="_blank" rel='noreferrer noopener'>Resume</a>
                       

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;