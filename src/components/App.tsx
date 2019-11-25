import React from 'react';
import Header from './header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../routes/home';
import Match from '../routes/match';
import League from '../routes/league';

const App: React.FC = () => {
  return (
    <Router>
      <Header/>
      <main role="main">
        <div className="container-fluid">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/matches">
            <Match />
          </Route>
          <Route path="/leagues">
            <League />
          </Route>
        </Switch>
        </div>
      </main>
    </Router>
  );
}

export default App;
