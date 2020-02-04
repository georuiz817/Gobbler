import React from 'react'
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
       <div className="nav">
         <Link to="/"><p>Home</p></Link>
         <Link to="/dishesNew"><p>Create Dish</p></Link>
         <Link to="/dishesIndex"><p>View all Dishes</p></Link>
        </div>
 
    )
  }


export default Nav






