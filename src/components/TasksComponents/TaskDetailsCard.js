import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TaskTimeIcon from "./TaskTimeIcon";

const useStyles = makeStyles(theme => ({
  detailsRoot: {
    width: "100%"
  },
  taskDetailsFlex: {
    display: "flex",
    justifyContent: "space-around"
  },
  taskDetailsFlexItems: {
    marginRight: "2rem",
    backgroundColor: "#EEEEEE",
    borderRadius: "10px",
    padding: "0.7rem",
    fontSize: "90%"
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
          <TaskTimeIcon timeValue={props.timeValue} timeUnit={props.timeUnit} />
        </p>
      </div>
    </div>
  );
};

export default TaskDetailsCard;
