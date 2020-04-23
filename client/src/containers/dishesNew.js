import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addDish } from '../actions/manageDish.js';
import {Container, Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form'

// define our local state w/ our constructor, these are the properties for a dish
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

//whenever a input value is changed we will update the target state
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
          [name]: value
        })
      }

  //once we hit submit we are running handlesubmit
  //it will prevent the default and not send us anywhere astray 
  //we will run our addDish action which will take in our current state 
  //then we will set our local state back to a cleared form 
  //then once all completed we will then get pushed to our dishes index page to view all dishes
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
      
    //bootstrapped form for mobile reponsiveness
    render(){
        console.log(this.props)
          return(
            <Container>
              <Col>
              <h1>Create:</h1>
              </Col>
              <Form  onSubmit={ this.handleSubmit }>
                  <Form.Group as={Col}>
                    <Form.Control required  placeholder='name' type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} />
                  </Form.Group>
                  <Form.Group  as={Col}>
                    <Form.Control required placeholder='main'  class="form-control" type="text" name="main" id="main" value={this.state.main} onChange={this.handleChange} />
                  </Form.Group>
                  <Form.Group  as={Col}>
                    <Form.Control required placeholder='side one'  class="form-control" type="text" name="side_one" id="side_one" value={this.state.side_one} onChange={this.handleChange} />
                  </Form.Group>
                  <Form.Group  as={Col}>
                    <Form.Control required placeholder='side two'  class="form-control" type="text" name="side_two" id="side_two" value={this.state.side_two} onChange={this.handleChange} />
                  </Form.Group>
                  <Form.Group  as={Col}>
                    <Form.Control required placeholder='drink' class="form-control" type="text" name="drink" id="drink" value={this.state.drink} onChange={this.handleChange} />
                  </Form.Group>
                  <Form.Group  as={Col}>
                    <Form.Control placeholder='recipe (optional)' class="form-control" rows="5" type="text" name="recipe" id="recipe" value={this.state.recipe} onChange={this.handleChange}/>
                  </Form.Group>
                  <Form.Group  as={Col}>
                    <input class="btn btn-warning" type="submit" value="Create dish!" />
                  </Form.Group>
              </Form>
            </Container>
            )
          }
        }

    //we are not connected to the store here. We not displaying any stored state.
    // however we need the action of addDish so were using the short cut for mapDispatchToProps 
    //and leaving MapState as null
    export default connect(null, { addDish })(dishesNew)