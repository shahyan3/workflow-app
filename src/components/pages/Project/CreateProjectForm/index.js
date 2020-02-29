import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// components
import NavBar from "../../../common/navigation";
import LayoutGrid from "../../../common/layout/LayoutGrid";
import SimpleModal from "../../../common/modal";

const useStyles = makeStyles(theme => ({
  root: {
    // backgroundColor: "red",
    textAlign: "right"
  }
}));

const CreateProjectForm = props => {
  const classes = useStyles();

  const view = (
    <React.Fragment>
      <main className={classes.root}>
        <SimpleModal />
      </main>
    </React.Fragment>
  );

  return <LayoutGrid view={view}></LayoutGrid>;
};

export default CreateProjectForm;
