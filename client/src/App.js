import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import homeComponent from '/Users/dawn/gobbler-project/client/src/components/homeComponent.js'

class App extends Component {

  render() {
    return (     
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={homeComponent} />
        </Switch>
      </div>
    </Router>
    )
  }
}

export default App;