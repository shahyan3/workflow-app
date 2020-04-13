import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  taskDescription: {
    textAlign: "left",
    fontSize: "90%",
  },
  taskDetailsFlex: {
    display: "flex",
    justifyContent: "space-around",
  },
}));

const PanelDescription = (props) => {
  const classes = useStyles();

  return (
    <div id="task-details-wrapper">
      <b>DESCRIPTION</b>
      <br></br>
      <p className={classes.taskDescription}>{props.taskDescription}</p>
    </div>
  );
};

export default PanelDescription;
