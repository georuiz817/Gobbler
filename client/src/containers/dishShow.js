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
               <h3>{this.props.currentDish.name} served {this.props.currentDish.main } with a side of {this.props.currentDish.side_one } and {this.props.currentDish.side_two }. Lastly a glass of {this.props.currentDish.drink }!</h3>
               <h3>Recipe:</h3>
               <p>{this.props.currentDish.recipe}</p> 
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
           
            currentDish: state.currentDish,
            
        }
      }


export default connect(mapStateToProps, { getDish })(dishShow);


