import React from "react";

import { makeStyles } from "@material-ui/core/styles";

// components
import { Paper } from "@material-ui/core";
import CreateTaskBtn from "../TasksComponents/CreateTaskBtn/index";
import TaskExpansionPanel from "../TasksComponents/TaskExpansionPanel/index";
import PanelTitle from "../TasksComponents/PanelTitle";
import PanelDescription from "../TasksComponents/PanelDescription";
import ProjectDetailsView from "../ProjectDetailsView/index";
import LayoutGrid from "../../../common/layout/LayoutGrid";

const useStyles = makeStyles(theme => ({
  projectContainer: {
    display: "flex",
    justifyContent: "space-around",
    paddingTop: "10px",
    flexDirection: "row-reverse"
  },
  projectOverviewWrapper: {
    width: "35%"
  },
  tasksContainer: {
    width: "60%"
  }
}));

const EditProjectView = () => {
  const classes = useStyles();

  const projectView = (
    <React.Fragment>
      <main className={classes.content}>
        <div className={classes.projectContainer}>
          <div className={classes.projectOverviewWrapper}>
            <Paper elevation={2}>
              <div className="project">{<ProjectDetailsView />}</div>
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

  return <LayoutGrid view={projectView} />;
};

export default EditProjectView;
