import React from 'react'
import reverse from "../photos/Reverse-gif.gif"
//the folders in this file a presentational components, they are not connected to the store
// they do not hold state and are for cosmetic use only. This is why we are writing 
// them in a simple arrow function instead of a class compoenent (that changes with hooks) 
// we can pass props down to them as needed 
const Errors = () => {
    return (
      <div>
        <img src={reverse} alt="n/a"/>
      </div>
      )
    }

export default Errors
