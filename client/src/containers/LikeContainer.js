import React, { Component } from 'react'
import LikeButton from "/Users/dawn/gobbler-project/client/src/components/LikeButton.js"
import { connect } from 'react-redux'
import { updateLikes } from '/Users/dawn/gobbler-project/client/src/actions/manageDish.js'


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
              <div>
                <p>{this.props.dish.likes}</p>
                < LikeButton handleLike={this.handleLike} />
              </div>
          )
      }
    }

    const mapStateToProps = state => {
      return {
         
        dishes: state.dishes
          
      }
    }

    
export default connect(mapStateToProps,{ updateLikes })(LikeContainer)