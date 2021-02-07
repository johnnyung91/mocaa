import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { SearchResults } from './components/SearchResults';

function App(props) {
  return (
    <Router>
      <Switch>
        <Route path="/searchresults" exact>
          <SearchResults />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
