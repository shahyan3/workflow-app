import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import "typeface-roboto";

// Pages
import Dashboard from "./components/pages/Dashboard/index";
import Profile from "./components/pages/Profile/index";
import NewProject from "./components/pages/NewProject";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="App">
          App
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/profile" component={Profile} />
            <Route path="/new-project" component={NewProject} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
