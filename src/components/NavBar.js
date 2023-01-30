import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavItem, NavbarBrand, Container, Nav } from 'reactstrap'

const NavBar = () => {
    return (
        <Navbar color='dark' dark>
            <Container className='d-flex'>
                <NavbarBrand href='/'> My User</NavbarBrand>
                <Nav className='ms-auto'>
                    <NavItem >
                        <Link className='btn btn-primary' to="/add"> AddUser</Link>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar
