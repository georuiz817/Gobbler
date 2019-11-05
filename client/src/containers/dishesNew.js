import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addDish } from '/Users/dawn/gobbler-project/client/src/actions/manageDish.js';


export class dishesNew extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          main: '',
          side_one: '',
          side_two: '',
          drink: ''
        }
      }

    
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
        [name]: value
       })
      }


    handleSubmit = e => {
        e.preventDefault();
        this.props.addDish(this.state)
        
      }


      render(){
          return(
            <form id="dish-form" onSubmit={ this.handleSubmit }>
                <label htmlFor="main">Main:</label>
                <input type="text" name="main" id="main" value={this.state.main} onChange={this.handleChange} />
                
                <label htmlFor="side_one">Side one:</label>
                <input type="text" name="side_one" id="side_one" value={this.state.side_one} onChange={this.handleChange} />

                <label htmlFor="side_two">Side two:</label>
                <input type="text" name="side_two" id="side_two" value={this.state.side_two} onChange={this.handleChange} />

                <label htmlFor="drink">Drink:</label>
                <input type="text" name="drink" id="drink" value={this.state.drink} onChange={this.handleChange} />

                <input type="submit" value="Create dish!" className="btn" />
            </form>
            
            )
        }
    }

    export default connect(null, { addDish })(dishesNew)