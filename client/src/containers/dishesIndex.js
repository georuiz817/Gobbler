import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDishes } from '../actions/manageDish.js'
import { Link } from 'react-router-dom';
import LikeContainer from './LikeContainer.js'
 
class dishesIndex extends Component {
   // Once all the HTML has mounted to the DOM, we will start the getDishes action. 
  componentDidMount() {
    this.props.getDishes()
  }
 
  // if loading is false !/request to grab our dishes is complete. We will map the array of dishes in our state in a sentence w/ their properties
  // we will also display the like container and give it a prop of disheselse aka if loading is true, display the loading message
  render() {
    if( !this.props.loading ) {
      const dishes = this.props.dishes.map(dish =>
      <div className="dishList" key={dish.id}>
      <LikeContainer dish={dish}/>
      <li  id="list-item">{dish.name} served {dish.main} with a side of {dish.side_one} and {dish.side_two}. Lastly a glass of {dish.drink}! <Link to={`/dishShow/${dish.id}`}><button class="btn btn-warning">View/Recipe</button></Link></li> 
      </div>)
      
      return(
        <div  className="dishesIndex">
          {dishes}
        </div>
        );
      }
    else {
      return ((<div>loading</div>))
    }
  };
};

// taking in our get dishes actions as a prop so we can use it in the container
function mapDispatchToProps(dispatch){
  return { getDishes: () => dispatch(getDishes()) }
}
 
// taking in a splice of stored state as a prop so we can use it in the container, 
// via connect
function mapStateToProps(state){
  return {dishes: state.dishes, loading: state.loading,}
}
 
export default connect(mapStateToProps, mapDispatchToProps)(dishesIndex)