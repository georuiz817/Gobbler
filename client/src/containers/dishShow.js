import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getDish } from '/Users/dawn/gobbler-project/client/src/actions/manageDish.js';

export class dishShow extends Component {


    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getDish(id)
      }

      render() {
        if(this.props.currentDish ) {
          return (
            <div>
              <p>{this.props.currentDish.main }</p>
              <p>{this.props.currentDish.side_one }</p>
              <p>{this.props.currentDish.side_two }</p>
              <p>{this.props.currentDish.drink }</p>
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