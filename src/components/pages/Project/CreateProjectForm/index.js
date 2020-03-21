import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  TextField,
  Button
} from "@material-ui/core";

// components
import NavBar from "../../../common/navigation";
import LayoutGrid from "../../../common/layout/LayoutGrid";
import SimpleModal from "../../../common/modal";

const useStyles = makeStyles(theme => ({
  root: {
    // backgroundColor: "red",
    textAlign: "right"
  },

  formWrapper: {
    display: "flex",
    justifyContent: "center",
    // backgroundColor: "blue",
    flexDirection: "column"
  }
}));

const CreateProjectForm = props => {
  const classes = useStyles();

  var projectFormView = (
    <div>
      <h3>START A NEW PROJECT</h3>
      <hr></hr>
      <FormControl classes={{ root: classes.formWrapper }}>
        <InputLabel htmlFor="my-input">Project Name</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <br></br>
        <TextField
          id="filled-multiline-static"
          label="Description"
          multiline
          rows="4"
          defaultValue=""
          variant="filled"
        />
        <br />
        <div className={classes.datesWrapper}>
          <TextField
            id="date"
            label="Start"
            type="date"
            defaultValue="2017-05-24"
            className={classes.dateItem}
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            id="date"
            label="End"
            type="date"
            defaultValue="2017-05-24"
            className={classes.dateItem}
            InputLabelProps={{
              shrink: true
            }}
          />
        </div>
        <br></br>
        <br></br>
        <FormHelperText id="my-helper-text" className={classes.createdByStyle}>
          Created By <span>Shahyan Hasan</span>
        </FormHelperText>
      </FormControl>{" "}
      <br /> <br />
      <div className={classes.btnWrapper}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => alert("created!")}
        >
          CREATE PROJECT
        </Button>
      </div>
    </div>
  );

  const view = (
    <React.Fragment>
      <main className={classes.root}>
        <SimpleModal btnName={"New Project"} innerComponent={projectFormView} />
      </main>
    </React.Fragment>
  );

  return <LayoutGrid view={view}></LayoutGrid>;
};

export default CreateProjectForm;
