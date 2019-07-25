import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Collection from './pages/Collection';
import PageNOtFound from './pages/PageNotFound';
import Navigations from './Navigations/Navigations';
// import ColectionsItem from './ColectionsItem/ColectionsItem';
import AlonePage from './AlonePage/AlonePage';

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <header>
          <Navigations />
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/collections/:name" component={AlonePage} />
          <Route path="/collections" component={Collection} />
          <Route component={PageNOtFound} />
        </Switch>
      </>
    );
  }
}

export default App;
