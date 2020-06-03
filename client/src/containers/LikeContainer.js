import React, { Component } from 'react'
import LikeButton from "../components/LikeButton.js"
import { connect } from 'react-redux'
import { updateLikes } from '../actions/manageDish.js'

class LikeContainer extends Component {
  
  handleLike = () => {
  let newCount = this.props.dish.likes + 1
  let updatedDish = {
    ...this.props.dish,
    likes: newCount
  }
  this.props.updateLikes(updatedDish, 'INCREASE_LIKES')
}
    render(){
      return(
        <div className="like-container-inline" >
          <p><LikeButton handleLike={this.handleLike} /></p>
          <p>{this.props.dish.likes}</p>
        </div>
        )
      }
    }
    
export default connect(state=>({dishes: state.dishes}),{ updateLikes })(LikeContainer)