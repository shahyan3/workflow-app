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
    paddingTop: "10px"
  },
  projectOverviewWrapper: {
    width: "40%"
  },
  tasksContainer: {
    width: "55%"
  },
  wrapper: {}
}));

const NoProjectView = () => {
  const classes = useStyles();

  const view = (
    <React.Fragment>
      <main className={classes.wrapper}>
        <h2> no Project </h2>
      </main>
    </React.Fragment>
  );

  return <LayoutGrid view={view} />;
};

export default NoProjectView;
