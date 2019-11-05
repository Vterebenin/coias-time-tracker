import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateTimeTracker from './createTimeTracker'
import Drag from "./DragAndDrop";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to={'/'}>home</Link>
        <Link to={'/drag'}>dnd</Link>
      </div>

      <Switch>
        <Route exact path={'/'}>
          <CreateTimeTracker/>
        </Route>
        <Route exact path={'/drag'}>
          <Drag/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
