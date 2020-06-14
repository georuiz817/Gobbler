import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'

const Nav = () => {
    return (
      <div className="nav">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Link to="/"><p>Home</p></Link>
            <Link to="/dishesNew"><p>Create Dish</p></Link>
            <Link to="/dishesIndex"><p>View all Dishes</p></Link>
          </Nav>
        </Navbar>
      </div>
    )
  }

export default Nav






