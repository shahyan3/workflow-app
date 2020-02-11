import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  detailsRoot: {
    width: "100%"
  },
  taskDetailsFlex: {
    display: "flex",
    justifyContent: "space-around"
  },
  taskDetailsFlexItems: {
    marginRight: "2rem"
  }
}));
const TaskDetailsCard = props => {
  const classes = useStyles();

  return (
    <div className={classes.detailsRoot}>
      <br></br>
      <b>DETAILS</b>
      <div className={classes.taskDetailsFlex}>
        <p className={classes.taskDetailsFlexItems}>
          Assiged By: {props.assignedBy}
        </p>
        <p className={classes.taskDetailsFlexItems}>
          Assignee: {props.assignee}
        </p>
        <p className={classes.taskDetailsFlexItems}>
          Task Time: {props.taskTime}
        </p>
      </div>
    </div>
  );
};

export default TaskDetailsCard;
