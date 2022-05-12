import React from "react";
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';

export class Header extends React.Component {
    render() {
        return (
            <>
                <header className="fixed-top">
                    <div className="container-fluid">
                        <div className="row">
                            <Navbar expand="lg">
                                <Container>
                                    <Navbar.Brand href="#home"></Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav className="me-auto">
                                            <Nav.Link href="#home">Home</Nav.Link>
                                            <Nav.Link href="#about">About Me</Nav.Link>
                                            <Nav.Link href="#experience">Resume</Nav.Link>
                                            <Nav.Link href="#skills">Skills</Nav.Link>
                                            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                                            <NavDropdown title="Local Projects" id="basic-nav-dropdown">
                                                <NavDropdown.Item href="#weather">Weather API</NavDropdown.Item>
                                                <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                                            </NavDropdown>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>

                        </div>
                    </div>
                </header>
            </>
        );
    }
}
export default Header;