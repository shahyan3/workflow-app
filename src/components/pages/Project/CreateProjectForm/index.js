import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// components
import NavBar from "../../../common/navigation";

const useStyles = makeStyles(theme => ({
  content: {}
}));

const CreateProjectForm = props => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main className={classes.content}>
        <h1>new project form here...</h1>
        <h1>new project form here...</h1>
        <h1>new project form here...</h1>
        <h1>new project form here...</h1>
        <h1>new project form here...</h1>
      </main>
    </React.Fragment>
  );
};

export default CreateProjectForm;
