import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
      <nav>
        <div>
          <ul>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/sponsors">Sponsors</Link></li>
          </ul>
        </div>
      </nav>
    )
  }


export default Nav


