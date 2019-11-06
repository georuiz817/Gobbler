import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getDishes } from '/Users/dawn/gobbler-project/client/src/actions/manageDish.js';
import dishInfo from '/Users/dawn/gobbler-project/client/src/components/dishInfo.js';

class dishesIndex extends Component {

componentDidMount(){
  this.props.getDishes()
}

render(){ 
  const dishes = this.props.dishes.map((dish) => ( 
    <dishInfo main={ dish.main } 
              side_one={ dish.side_one }
              side_two={ dish.side_two }
              drink={ dish.drink}
    />))
    
    return (
        <div>
           { dishes }
     </div>
    )
  }
}


const mapStateToProps = state => {
    return {
      dishes: state.dishesReducer.dishes,
    }
  }
//

export default connect(mapStateToProps, { getDishes })(dishesIndex);