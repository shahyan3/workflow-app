import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import EditIcon from "@material-ui/icons/Edit";
import TaskTimeIcon from "./TaskTimeIcon";

const useStyles = makeStyles((theme) => ({
  titleWrap: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  titleText: {
    marginRight: "auto",
  },
  taskIconWrap: {
    display: "flex",
  },
  editIcon: {
    marginLeft: "20px",
  },
  taskLabel: {},
  taskNumber: {},
}));
const PanelTitle = (props) => {
  const classes = useStyles();

  const { totalTimeInMinutes, taskNumber, taskName } = props;
  return (
    <div className={classes.titleWrap}>
      <p className={classes.titleText}>
        <span className={classes.taskLabel}>Task</span>
        <span className={classes.taskNumber}>{taskNumber}: </span> {taskName}
      </p>
      <div className={classes.taskIconWrap}>
        <TaskTimeIcon timeValue={totalTimeInMinutes} timeUnit="min" />

        <EditIcon
          fontSize="small"
          className={classes.editIcon}
          color="primary"
        />
      </div>
    </div>
  );
};

export default PanelTitle;
