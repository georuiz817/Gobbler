import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import homeComponent from '/Users/dawn/gobbler-project/client/src/components/homeComponent.js';
import Nav from '/Users/dawn/gobbler-project/client/src/components/navComponent.js';
import Errors from '/Users/dawn/gobbler-project/client/src/components/errors.js';

class App extends Component {

  render() {
    return (     
    <Router>
      <Nav />
      <div className="container">
        <Switch>
          <Route exact path="/" component={homeComponent} />
          <Route component={Errors} />
        </Switch>
      </div>
    </Router>
    )
  }
}

export default App;