import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addDish } from '/Users/dawn/gobbler-project/client/src/actions/manageDish.js';
import '/Users/dawn/gobbler-project/client/src/Css/dishForm.css';

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
        this.props.addDish(this.state, this.props.history)
        this.setState({
          main: '',
          side_one: '',
          side_two: '',
          drink: ''
        })
        this.props.history.push('/dishesIndex')
      }


      render(){
        console.log(this.props)
          return(
            <div className="dishesNewPage">
              <h2 id="mainh2" className="dish-creator-heading">~ Create your dish ~</h2>
              
              <form id="dish-form" onSubmit={ this.handleSubmit }>
                  
                  <label htmlfor="name">Name:</label>
                  <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} />

                  <label htmlFor="main">Main:</label>
                  <input type="text" name="main" id="main" value={this.state.main} onChange={this.handleChange} />
                
                  <label htmlFor="side_one">Side one:</label>
                  <input type="text" name="side_one" id="side_one" value={this.state.side_one} onChange={this.handleChange} />

                  <label htmlFor="side_two">Side two:</label>
                  <input type="text" name="side_two" id="side_two" value={this.state.side_two} onChange={this.handleChange} />

                  <label htmlFor="drink">Drink:</label>
                  <input type="text" name="drink" id="drink" value={this.state.drink} onChange={this.handleChange} />

                  <label htmlFor="recipe">Feel free to copy a detailed recipe here (optional):</label>
                  <input type="text" name="recipe" id="recipe" value={this.state.recipe} onChange={this.handleChange}/>
                  
                  <input type="submit" value="Create dish!" className="btn" />
             
              </form>
              <h2 className="dish-creator-heading">Our sponsors will do the rest!</h2>
            </div>
            )
        }
    }

    export default connect(null, { addDish })(dishesNew)