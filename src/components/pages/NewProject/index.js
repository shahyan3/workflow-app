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
  root: {
    display: "flex",
    flexDirection: "column"
  },
  margin: {
    margin: theme.spacing(1)
  },
  projectContainer: {
    display: "flex"
  },
  projectOverviewWrapper: {
    width: "40%"
  },
  tasksContainer: {
    width: "60%"
  }
}));

const NewProject = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.projectContainer}>
        <div className={classes.projectOverviewWrapper}>
          <h1>New Project</h1>
          <Paper elevation={7}>
            <div className="project">
              <CustomizedInputs />
            </div>
          </Paper>
        </div>
        <div className={classes.tasksContainer}>
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
