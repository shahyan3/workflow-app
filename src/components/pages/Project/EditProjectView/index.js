import React, { Component } from "react";

import { makeStyles } from "@material-ui/core/styles";

// components
import { Paper } from "@material-ui/core";
import CreateTaskBtn from "../TasksComponents/CreateTaskBtn/index";
import TaskExpansionPanel from "../TasksComponents/TaskExpansionPanel/index";
import PanelTitle from "../TasksComponents/PanelTitle";
import PanelDescription from "../TasksComponents/PanelDescription";
import ProjectDetailsView from "../ProjectDetailsView/index";
import LayoutGrid from "../../../common/layout/LayoutGrid";
import database from "../../../../database";

const classes = {
  projectContainer: {
    display: "flex",
    justifyContent: "space-around",
    paddingTop: "10px",
    flexDirection: "row-reverse",
  },
  projectOverviewWrapper: {
    width: "35%",
  },
  tasksContainer: {
    width: "60%",
  },
  project: {},
};

class EditProjectView extends Component {
  state = {};

  componentDidMount() {
    // get ip from params
    let id = 3;
    // database ajax request
    const project = database.projects.find((project) => project.id == id);
    this.setState({ project });
    console.log("project..", this.state.project);
  }

  render() {
    const { project } = this.state;

    const projectView = (
      <React.Fragment>
        <main style={classes.content}>
          <div style={classes.projectContainer}>
            <div style={classes.projectOverviewWrapper}>
              <Paper elevation={2}>
                <div style={classes.project}>
                  {<ProjectDetailsView project={project} />}
                </div>
              </Paper>
            </div>
            <div style={classes.tasksContainer}>
              <h3>ALL TASKS</h3>
              <TaskExpansionPanel
                panelTitle={<PanelTitle />}
                panelDetails={<PanelDescription />}
              />
              <CreateTaskBtn />
            </div>
          </div>
        </main>
      </React.Fragment>
    );

    return <LayoutGrid view={projectView} />;
  }
}

export default EditProjectView;
