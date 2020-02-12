import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import AccessTimeIcon from "@material-ui/icons/AccessTime";

const useStyles = makeStyles(theme => ({
  timeIconWrap: {
    display: "flex",
    alignItems: "center",
    color: "grey",
    fontStyle: "italic"
  },
  taskTimeText: {},
  timeIcon: {
    marginRight: "2px"
  },

  timeUnit: {
    marginLeft: "2px"
  }
}));

const TaskTimeIcon = props => {
  const classes = useStyles();
  return (
    <span className={classes.timeIconWrap}>
      <AccessTimeIcon className={classes.timeIcon} />
      <span className={classes.taskTimeText}>{props.timeValue}</span>
      <span className={classes.timeUnit}>{props.timeUnit}</span>
    </span>
  );
};

export default TaskTimeIcon;
