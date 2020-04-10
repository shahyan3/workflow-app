import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import "typeface-roboto";

// Pages
import Dashboard from "./components/pages/Dashboard/index";
import Profile from "./components/pages/Profile/index";
import ProjectPage from "./components/pages/Project/ProjectPage";
import SprintsView from "./components/pages/Sprints/index";
import AnalyticsView from "./components/pages//Analytics";
import EditProjectView from "./components/pages/Project/EditProjectView";
import ExistingProjectView from "./components/pages/Project/ExistingProjectView";

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
            <Route exact path="/projects" component={ProjectPage} />
            <Route path="/projects/edit" component={EditProjectView} />
            <Route path="/sprints" component={SprintsView} />
            <Route path="/analytics" component={AnalyticsView} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
