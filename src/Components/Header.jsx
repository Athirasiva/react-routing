import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
         <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
              <Link to={'/'} style={{textDecoration:'none',color:'white'}}> Routing</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to={'/about'} style={{textDecoration:'none', color:'white'}} className='me-3'>About</Link>
            <Link to={'/contact'}  style={{textDecoration:'none', color:'white'}}>Contact</Link>
            <Link to={'/images'} style={{textDecoration:'none', color:'white'}}>Images</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header