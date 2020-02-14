import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(15),
      height: theme.spacing(16)
    }
  },
  infoBoxTitle: {
    marginTop: "50px"
  },
  flexItem: {
    //   width: "100%",
    flex: "1 0 10%"
  }
}));

export default function InfoBox(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Paper elevation={0} /> */}
      {/* <Paper /> */}
      <Paper className={classes.flexItem} elevation={2}>
        <Typography className={classes.infoBoxTitle} variant="body2">
          {props.infoBoxTitle}
        </Typography>
        <Typography variant="body1">{props.infoBoxValue}</Typography>
      </Paper>
    </div>
  );
}
