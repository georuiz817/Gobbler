import React, { Component } from 'react'
import LikeButton from "../components/LikeButton.js"


class LikeContainer extends Component {
// set state here instead of dishesIndex 
 constructor() {
   super()
   // set the init state to 0 
   this.state = {
     count: 0
   }
 }
    
 handleLike = () => {
  // when handleLike is called, newCount is set to whatever this.state.count is plus 1 prior to calling this.setState
  // allows us to track increments on front end
  let newCount = this.state.count + 1
  this.setState({
    count: newCount
  })
}

      render(){
          return(
              <div>
                <p>{this.state.count}</p>
                {/* passed in count so we can see the #, also passed in LikeButton component w/ props to handleLike */}
                < LikeButton handleLike={this.handleLike} />
              </div>
          )
      }
    }


    





export default LikeContainer