import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getDish } from '../actions/manageDish.js';
import snoopy from '../photos/snoopy.gif';



export class dishShow extends Component {

    //once the html is rendered to the dom we are grabbing the chosen dish by it's ID 
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getDish(id)
      }

      // if it's our currentdish we are goin to display it's attributes 
      // e;se if were currently not at our chosen dish yet (fetch not complete)
      // we will display the loading message 
      render() {
        if(this.props.currentDish ) {
          return (
            <div>
               <h3>{this.props.currentDish.name} served {this.props.currentDish.main } with a side of {this.props.currentDish.side_one } and {this.props.currentDish.side_two }. Lastly a glass of {this.props.currentDish.drink }!</h3>
               <h3>Recipe:</h3>
               <p>{this.props.currentDish.recipe}</p> 
               <img class="rounded" height="200px" src={snoopy} alt="n/a"/>
            </div>
          )
        } else {
          return (<div>loading</div>)
        }
      }
    }

    //grabbing our current dish from our store 
    const mapStateToProps = state => {
        return {
           
            currentDish: state.currentDish,
            
        }
      }


      //mapped our current dish from our store to our current state, used shortcut
      //to the mapdispatch to props of getdish
export default connect(mapStateToProps, { getDish })(dishShow);


