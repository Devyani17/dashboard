import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppBar from './components/AppBar/AppBar';
import Dashboard from './components/Dashboard/Dashboard';
import Projects from './components/Projects/Projects';
import Platform from './components/Platform/Platform';

function App() {
  return (
    <div>
      <Router>
        <AppBar />
        <Switch>
          <Route path="/" exact>
            <div className="componentWrapper"><Dashboard /></div>
          </Route>
          <Route path="/projects" exact>
            <div className="componentWrapper"><Projects /></div></Route>
          <Route path="/platform" exact>
            <div className="componentWrapper"><Platform /></div></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
