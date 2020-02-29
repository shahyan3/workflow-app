import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import { lineHeight } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
  infoBoxTitle: {
    marginTop: "25px",
    marginBottom: "10px"
  },
  flexItem: {
    width: "28%",
    height: "100px",
    margin: "20px",
    flexGrow: "1",
    textAlign: "center"
  }
}));

export default function InfoBox(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.flexItem} elevation={1}>
      <Typography className={classes.infoBoxTitle} variant="body2">
        <b>{props.infoBoxTitle}</b>
      </Typography>
      <Typography variant="body1">{props.infoBoxValue}</Typography>
    </Paper>
  );
}
