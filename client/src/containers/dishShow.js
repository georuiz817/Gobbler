import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getDish } from '../actions/manageDish.js';
import snoopy from '../photos/snoopy.gif';
import {Container, Col} from 'react-bootstrap';

export class dishShow extends Component {

  componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getDish(id)
      }
       
      render() {
        if(this.props.currentDish ) {
          return (
            <div>
              <Container>
                <Col sm={12}>
                  <h3>{this.props.currentDish.name} served {this.props.currentDish.main } with a side of {this.props.currentDish.side_one } and {this.props.currentDish.side_two }. Lastly a glass of {this.props.currentDish.drink }!</h3>
                  <br></br>
                  <p>{this.props.currentDish.recipe}</p> 
                  <img class="rounded" height="200px" src={snoopy} alt="n/a"/>
                </Col>
               </Container>
            </div>
          )
        } else {
          return (<div>loading</div>)
        }
      }
    }

export default connect(state=>({currentDish: state.currentDish}), { getDish })(dishShow);


