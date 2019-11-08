import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getDish } from '/Users/dawn/gobbler-project/client/src/actions/manageDish.js';
import snoopy from '/Users/dawn/gobbler-project/client/src/photos/snoopy.gif';



export class dishShow extends Component {


    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getDish(id)
      }

      render() {
        if(this.props.currentDish ) {
          return (
            <div>
               <h3>{this.props.currentDish.main } with a side of {this.props.currentDish.side_one } and {this.props.currentDish.side_two }. Lastly a glass of {this.props.currentDish.drink }!<button>delete</button></h3> 
               <img src={snoopy} alt="n/a"/>
            </div>
          )
        } else {
          return (<div>loading</div>)
        }
      }
    }


    const mapStateToProps = state => {
        return {
           
            currentDish: state.currentDish
        }
      }


export default connect(mapStateToProps, { getDish })(dishShow);


