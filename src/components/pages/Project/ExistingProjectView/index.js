import React from "react";

import { makeStyles } from "@material-ui/core/styles";

// components
import { Paper } from "@material-ui/core";
import CreateTaskBtn from "../TasksComponents/CreateTaskBtn/index";
import TaskExpansionPanel from "../TasksComponents/TaskExpansionPanel/index";
import PanelTitle from "../TasksComponents/PanelTitle";
import PanelDescription from "../TasksComponents/PanelDescription";
import ProjectDetailsView from "../ProjectDetailsView/index";

const useStyles = makeStyles(theme => ({
  projectContainer: {
    display: "flex",
    justifyContent: "space-around",
    paddingTop: "10px"
  },
  projectOverviewWrapper: {
    width: "40%"
  },
  tasksContainer: {
    width: "55%"
  }
}));

const ExistingProjectView = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main className={classes.content}>
        <div className={classes.projectContainer}>
          <div className={classes.projectOverviewWrapper}>
            <Paper elevation={2}>
              <div className="project">
                <ProjectDetailsView />
              </div>
            </Paper>
          </div>
          <div className={classes.tasksContainer}>
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
};

export default ExistingProjectView;
