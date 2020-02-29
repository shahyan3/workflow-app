import React from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "95%",
    margin: "0 10px"
  }
}));

const TextArea = props => {
  const classes = useStyles();

  return (
    <TextareaAutosize
      className={classes.root}
      aria-label="project-overview"
      rowsMin={8}
      placeholder="Overview"
      disabled="true"
      value="Find top ten websites and write an essay on why world markets will collapse"
    />
  );
};

export default TextArea;
