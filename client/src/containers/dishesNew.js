import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addDish } from '../actions/manageDish.js';


// define our local state w/ our constructor, these are the attributes for a dish
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


  //whenever a value is put into a input on our form we will update the state
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
       })
      }

  //on submit in our form, once we hit submit we are running handlesubmit
  //it will prevent the default and not send us anywhere astray 
  //we will run our add dish action which will take in our current state and history
  //then we will set our local state back to a cleared form 
  // we will then get pushed to our dishes index page to view all dishes
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
              <h2 id="mainh" className="dish-creator-heading">Create your dish</h2>
              
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

                  <label htmlFor="recipe">Recipe here (optional):</label>
                  <textarea type="text" name="recipe" id="recipe" value={this.state.recipe} onChange={this.handleChange}/>
                  
                  <br></br>
                  <br></br>
                  <input type="submit" value="Create dish!" className="btn" />
             
              </form>
            </div>
            )
        }
    }

    //we are not connected to the store here, not displaying any stored state
    // however we need the action of adddish so were using the short cut for map
    //dispatch to props 
    export default connect(null, { addDish })(dishesNew)