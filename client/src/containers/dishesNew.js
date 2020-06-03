import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addDish } from '../actions/manageDish.js';
import {Container, Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form'

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

    export default connect(null, { addDish })(dishesNew)