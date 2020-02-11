import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  taskDescription: {
    textAlign: "left",
    fontSize: "90%"
  },
  taskDetailsFlex: {
    display: "flex",
    justifyContent: "space-around"
  }
}));

const PanelDescription = () => {
  const classes = useStyles();

  return (
    <div id="task-details-wrapper">
      <b>DESCRIPTION</b>
      <br></br>
      <p className={classes.taskDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </p>
    </div>
  );
};

export default PanelDescription;
