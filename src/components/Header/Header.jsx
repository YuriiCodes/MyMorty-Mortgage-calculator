import {Container, Nav, Navbar} from "react-bootstrap";
import React from "react";
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return(
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand as={NavLink} to="/">MyMorty🤓</Navbar.Brand>
                <Nav className="me-auto">

                      <Nav.Link as={NavLink} to="/banks">View available banks</Nav.Link>

                    <Nav.Link  as={NavLink} to="/mortageCalculator">Mortage calculator</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default Header;