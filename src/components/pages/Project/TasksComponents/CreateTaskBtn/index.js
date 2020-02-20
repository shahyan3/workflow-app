import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(5),
      backgroundColor: "green",
      color: "white",
      fontSize: "0.9rem",
      textAlign: "right"
    }
  },
  extendedIcon: {
    fontSize: "1rem"
  }
}));

export default function CreateTaskBtn() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab variant="extended">
        <NavigationIcon className={classes.extendedIcon} />
        New Task
      </Fab>
    </div>
  );
}
