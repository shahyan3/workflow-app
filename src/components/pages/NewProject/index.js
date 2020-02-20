import React from "react";

import { makeStyles } from "@material-ui/core/styles";

// components
import TaskExpansionPanel from "../../TasksComponents/TaskExpansionPanel/index";
import PanelDetails from "../../TasksComponents/PanelDescription";
import PanelTitle from "../../TasksComponents/PanelTitle";
import CreateTaskBtn from "../../TasksComponents/CreateTaskBtn/index";
import CustomizedInputs from "../../ProjectOverview/index";
import { Paper } from "@material-ui/core";

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

const NewProject = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.projectContainer}>
        <div className={classes.projectOverviewWrapper}>
          <Paper elevation={7}>
            <div className="project">
              <CustomizedInputs />
            </div>
          </Paper>
        </div>
        <div className={classes.tasksContainer}>
          <h3>ALL TASKS</h3>
          <TaskExpansionPanel
            panelTitle={<PanelTitle />}
            panelDetails={<PanelDetails />}
          />
          <CreateTaskBtn />
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewProject;
