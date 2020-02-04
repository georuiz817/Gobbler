import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import homeComponent from './components/homeComponent.js';
import Nav from './components/navComponent.js';
import Errors from './components/errors.js';
//import Footer from "/Users/dawn/gobbler-project/client/src/components/footer.js";
import Sponsors from "./components/sponsors.js";
import dishesNew from "./containers/dishesNew.js";
import dishesIndex from "./containers/dishesIndex.js";
import dishShow from './containers/dishShow.js';
import LogoComp from './components/LogoComp.js'

class App extends Component {

  render() {
    return (     
    <Router>
      <Nav />
      <LogoComp />
      <div className="container">
        <Switch>
          <Route exact path="/" component={homeComponent} />
          <Route exact path="/sponsors" component={Sponsors}/>
          <Route exact path="/dishesNew" component={dishesNew}/>
          <Route exact path="/dishesIndex" component={dishesIndex} />
          <Route exact path="/dishShow/:id" component={dishShow}/>
          <Route component={Errors} />
        </Switch>
      </div>
    </Router>
    )
  }
}

export default App;