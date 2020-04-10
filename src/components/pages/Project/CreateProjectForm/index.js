import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";

import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  TextField,
  Button,
} from "@material-ui/core";

// components
import LayoutGrid from "../../../common/layout/LayoutGrid";
import SimpleModal from "../../../common/modal";

var database = require("../../../../database");

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "right",
  },
  formWrapper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
}));

const CreateProjectForm = (props) => {
  const classes = useStyles();

  // react hook: easy way to add state to functional components for specific use
  const [projectName, setProjectName] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handlSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted project name: ", projectName);
    console.log("Submitted project desc: ", projectDesc);
    console.log("Submitted project start date: ", startDate);
    console.log("Submitted project start date: ", endDate);

    if (projectName && projectDesc && startDate && endDate) {
      let saveProject = {
        projectName,
        projectDesc,
        startDate,
        endDate,
      };

      // save to database ajax
      database.projects.push(saveProject);

      // let parent state its list update with newly added project
      props.onSave();
    }
  };

  // ajax save to database

  var projectFormView = (
    <div>
      <FormControl classes={{ root: classes.formWrapper }}>
        <InputLabel htmlFor="my-input">Project Name</InputLabel>
        <Input
          id="my-input"
          aria-describedby="my-helper-text"
          onChange={(e) => setProjectName(e.target.value)} // setProjectName sets the state of projectName
        />
        <br></br>
        <TextField
          id="filled-multiline-static"
          label="Description"
          multiline
          rows="4"
          defaultValue=""
          variant="filled"
          onChange={(e) => setProjectDesc(e.target.value)}
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
              shrink: true,
            }}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <TextField
            id="date"
            label="End"
            type="date"
            defaultValue="2017-05-24"
            className={classes.dateItem}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setEndDate(e.target.value)}
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
          onClick={(e) => handlSubmit(e)}
        >
          CREATE PROJECT
        </Button>
      </div>
    </div>
  );

  const view = (
    <React.Fragment>
      <main className={classes.root}>
        <SimpleModal
          btnName={"New Project"}
          innerComponent={projectFormView}
          showModalBtn={false}
          modalTitle={"START A NEW PROJECT"}
        />
      </main>
    </React.Fragment>
  );

  return <LayoutGrid view={view}></LayoutGrid>;
};

export default CreateProjectForm;

// #todo
// https://reactjs.org/docs/forms.html#controlled-components
// react hooks read up!!!!!!!
