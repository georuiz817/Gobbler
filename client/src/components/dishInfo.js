import React from 'react'


const dishInfo = ({ main, side_one, side_two, drink}) => {
  return (
    <div>
        <p>main: { main }</p>
        <p>side one: { side_one }</p>
        <p>side two: {side_two} </p>
        <p>drink: {drink}</p>
    </div>
    
  )
}

export default dishInfo