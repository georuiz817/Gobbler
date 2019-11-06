import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDishes } from '/Users/dawn/gobbler-project/client/src/actions/manageDish.js'

 
class dishesIndex extends Component {
 
  componentDidMount() {
    this.props.getDishes()
  }
 
  render() {
    const dishes = this.props.dishes.map(dish => <li key={dish.id}>{dish.main} with a side of {dish.side_one} and {dish.side_two}. Lastly a glass of {dish.drink}!<button>delete</button></li>);
 
    return(
      <div>
        {dishes}
      </div>
    );
  }
};
  
function mapDispatchToProps(dispatch){
  return { getDishes: () => dispatch(getDishes()) }
}
 
function mapStateToProps(state){
  return {dishes: state.dishes}
}
 
export default connect(mapStateToProps, mapDispatchToProps)(dishesIndex)