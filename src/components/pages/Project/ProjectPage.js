import React, { Component } from "react";
// components
import NavBar from "../../common/navigation";
import ExistingProjectView from "./ExistingProjectView/index";
import CreateProjectForm from "./CreateProjectForm/index";

var database = require("../../../database");

class ProjectPage extends Component {
  state = {
    projects: [{ a: "a" }]
  };

  componentDidMount() {
    // ajax request to database from all projects
    const projects = database.projects;

    // add to state
    this.setState({ projects });
  }

  onNewProjectSaved = () => {
    // ajax request to database from all projects
    const projects = database.projects;

    // add to state
    this.setState({ projects });

    console.log("yoyo", projects);
  };
  render() {
    const projects = this.state.projects;
    return (
      <React.Fragment>
        <NavBar />

        <CreateProjectForm onSave={this.onNewProjectSaved} />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap"
          }}
        >
          {projects.map(project => (
            <div style={{ width: "50%" }}>
              <ExistingProjectView project={project} />
            </div>
          ))}
        </div>

        {/* edit project view */}
        {/* <EditProjectView /> */}
      </React.Fragment>
    );
  }
}

export default ProjectPage;
