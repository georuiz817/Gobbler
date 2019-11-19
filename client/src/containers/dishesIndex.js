import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDishes } from '/Users/dawn/gobbler-project/client/src/actions/manageDish.js'
import { Link } from 'react-router-dom';
import LikeContainer from '/Users/dawn/gobbler-project/client/src/containers/LikeContainer.js'
 
class dishesIndex extends Component {
 
  componentDidMount() {
    this.props.getDishes()
  }
 
  render() {
    if( !this.props.loading ) {

    const dishes = this.props.dishes.map(dish =>
      <div key={dish.id}>
         <LikeContainer dish={dish}/> 
         <Link to={`/dishShow/${dish.id}`}> 
        <li>{dish.main} with a side of {dish.side_one} and {dish.side_two}. Lastly a glass of {dish.drink}!</li> 
        </Link> 
      </div>)

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
  return { getDishes: () => dispatch(getDishes()) }
}
 
function mapStateToProps(state){
  return {dishes: state.dishes, loading: state.loading,}
}
 
export default connect(mapStateToProps, mapDispatchToProps)(dishesIndex)