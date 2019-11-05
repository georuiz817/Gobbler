import React from 'react'
import { Link } from 'react-router-dom';
import '/Users/dawn/gobbler-project/client/src/Css/nav.css';

const Nav = () => {
    return (
      <nav className="nav">
        <div className="nav">
         <h3><Link to="/">Home</Link></h3>
         <h3><Link to="/dishesNew">Create Dish</Link></h3>
         <h3><Link to="/dishesIndex">View all Dishes</Link></h3>
         <h3><Link to="/sponsors">Sponsors</Link></h3>
        </div>
      </nav>
    )
  }


export default Nav






