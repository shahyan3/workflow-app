import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    },
    justifyContent: "center"
  },
  large: {
    width: theme.spacing(17),
    height: theme.spacing(17),
    border: "4px solid #5DBCD2"
  }
}));

export default function ProfileDisplay() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar
        alt="Remy Sharp"
        src="profile-pic.png"
        className={classes.large}
      />
    </div>
  );
}
