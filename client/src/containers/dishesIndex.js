import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDishes } from '/Users/dawn/gobbler-project/client/src/actions/manageDish.js'
import { Link } from 'react-router-dom';
 
class dishesIndex extends Component {
 
  componentDidMount() {
    this.props.getDishes()
  }
 
  render() {
    const dishes = this.props.dishes.map(dish =><Link to={`/dishShow/${dish.id}`}> <li key={dish.id}>{dish.main} with a side of {dish.side_one} and {dish.side_two}. Lastly a glass of {dish.drink}!</li> </Link> );
 
    return(
      <div className="dishesIndex">
        <h1 id="dishes-index-h1">See the delicious dishes everyone has created</h1>
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