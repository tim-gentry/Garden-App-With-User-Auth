import React from 'react';

import { Link, useHistory } from 'react-router-dom'

import { useSelector } from 'react-redux'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {
    const history = useHistory()
    const state = useSelector(state => state)

    console.log('navbar state', state)

    const handleSignOut = () => {
        //Sign out user
        history.push('/signin')
    }

    return (
        <Navbar className="mb-3" bg="primary" variant="dark" expand="lg">
            <Navbar.Brand><Link className="text-white" to="/">Gardenly</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link className="text-white" to="/">My Garden</Link></Nav.Link>
                    <Nav.Link><Link className="text-white" to="/signup">Sign Up</Link></Nav.Link>
                    <Nav.Link><Link className="text-white" to="/signin">Sign In</Link></Nav.Link>
                    <Nav.Link className="text-white" onClick={() => handleSignOut()}>Sign Out</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar