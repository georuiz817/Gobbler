import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getDish } from '../actions/manageDish.js';
import snoopy from '../photos/snoopy.gif';
import {Container, Row, Col} from 'react-bootstrap';

export class dishShow extends Component {
  //once the html is rendered to the dom we are grabbing the chosen dish by it's ID 
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getDish(id)
      }
      // if it's our currentdish we are goin to display its properties 
      // else if were currently not at our chosen dish yet (fetch not complete) we will display the loading message 
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

    //grabbing our current dish property from our store 
    const mapStateToProps = state => {
        return {
          currentDish: state.currentDish,
            }
          }

//use the mapStateToProps function to take in a splice of our store
// but use the mapDispatchToProps short-cut for getdish
export default connect(mapStateToProps, { getDish })(dishShow);


