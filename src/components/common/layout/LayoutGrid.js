import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: `calc(100% - 240px)`,
    marginLeft: "240px",
    marginTop: "50px",
    padding: "1rem",
    textAlign: "left"
  }
}));

const LayoutGrid = props => {
  const classes = useStyles();

  return <Container className={classes.root}>{props.view}</Container>;
};

export default LayoutGrid;
