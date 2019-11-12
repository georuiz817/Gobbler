import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDishes } from '/Users/dawn/gobbler-project/client/src/actions/manageDish.js'
import LikeContainer from './LikeContainer.js'
 // imported like Container ^ 



class dishesIndex extends Component {
// since we created a seperate container so we removed the state from here (LikeContainer)

componentDidMount() {
    this.props.something()
  }

 
  render() {
    if( !this.props.loading ) {

    const dishes = this.props.dishes.map(dish =>
          <div key={dish.id}>
            <LikeContainer dish={dish}/> 
              {/*passed in LikeContainer component with props of dish  */}
            <li>{dish.main} with a side of {dish.side_one} and {dish.side_two}. Lastly a glass of {dish.drink}!</li> 
              
          </div>
          );
 
    return(
      <div className="dishesIndex">
        <h1 id="dishes-index-h1">See the delicious dishes everyone has created</h1>
        {dishes}
      </div>
    );
    }
    else {
      return ((<div>loading</div>))
    }
  };
};
  
function mapDispatchToProps(dispatch){
  return { something: () => dispatch(getDishes()) }
}
 
function mapStateToProps(state){
  return {dishes: state.dishes, loading: state.loading,}
}
 
export default connect(mapStateToProps, mapDispatchToProps)(dishesIndex)





/*
<div key={dish.id}> <button onClick={this.handleLike}>Like</button> {this.state.like} <li>{dish.main} with a side of {dish.side_one} and {dish.side_two}. Lastly a glass of {dish.drink}!</li> </div>
 */



/* handleLike = e => {
    this.setState({
      like: this.state.like + 1
    })
    console.log("hello")
  }
*/