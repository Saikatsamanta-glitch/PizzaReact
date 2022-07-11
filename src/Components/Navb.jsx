import React from 'react'
import {Navbar, Container,Nav, NavDropdown,Button,Form, FormControl} from 'react-bootstrap';
import cart from '../Resources/cart.png'
import {Link} from 'react-router-dom'
export default function Navb() {
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#"> 🍕Pizza store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className='text-white text-decoration-none'   to='/'>Home</Link>
                            <Nav.Link href="#action2">Contact</Nav.Link>
                            <Nav.Link href="#" > Store</Nav.Link>
                            <Nav.Link href="#" > Login</Nav.Link>
                        </Nav>
                        <div className="d-flex">
                            <h5 className='text-secondary m-2'>Offers🎡</h5>
                            <h5 className='text-secondary m-2'>Account</h5>
                         
                            <img className='m-1 bg-white rounded-circle' src={cart} alt="" height='50px' />
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
