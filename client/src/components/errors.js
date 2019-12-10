import React from 'react'
import reverse from "/Users/dawn/gobbler-project/client/src/photos/Reverse-gif.gif"

//these are our presentational components, they are not connected to the store
// they do not hold state and are for cosmetic only. This is why we are writing 
// them in a simple arrow function instead of a class compoenent 
// we can pass props down to them as needed 

const Errors = () => {
    return (
        <div>
        <img src={reverse} alt="n/a"/>
       </div>
    )
  }


export default Errors
