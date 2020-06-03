import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDishes } from '../actions/manageDish.js'
import { Link } from 'react-router-dom';
import LikeContainer from './LikeContainer.js'
import {Container, Row, Col} from 'react-bootstrap';
class dishesIndex extends Component {

  componentDidMount() {
    this.props.getDishes()
  }
 
  render() {
    if( !this.props.loading ) {
      const dishes = this.props.dishes.map(dish =>
      <div className="dishList" key={dish.id}>
        <Container>
          <Row>
            <Col sm={12}>
              <LikeContainer dish={dish}/>
              <p id="list-item">{dish.name} served {dish.main} with a side of {dish.side_one} and {dish.side_two}. Lastly a glass of {dish.drink}! <Link to={`/dishShow/${dish.id}`}><button class="btn btn-warning">View</button></Link></p> 
            </Col>
          </Row>
        </Container>
      </div>)
      
      return(
        <div>
          {dishes}
        </div>
        );
      }
    else {
      return ((<div>loading</div>))
    }
  };
};

export default connect(state=>({dishes: state.dishes, loading: state.loading}), {getDishes})(dishesIndex)