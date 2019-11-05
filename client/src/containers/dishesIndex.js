import React, { Component } from 'react'
import { connect } from 'react-redux';
import { indexDishes } from '/Users/dawn/gobbler-project/client/src/actions/manageDish.js';


class dishesIndex extends Component {

     render() {
        return (
          <div>
           <h1>{this.props.dishes.length}</h1>
          </div>
        );
      }
    };

export default connect(state =>({dishes: state.dishesReducer.dishes}),{ indexDishes })(dishesIndex);
