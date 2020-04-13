import React from "react";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { green } from "@material-ui/core/colors";
import InfoBox from "./InfoBox";
import TextArea from "./TextArea";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    marginTop: "50px",
  },
  margin: {
    margin: theme.spacing(1),
  },
  infoBoxWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "80%",
    margin: "20px auto",
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

export default function ProjectDetailsView(props) {
  const classes = useStyles();

  const { project } = props;

  return (
    <FormControl className={classes.root} noValidate>
      <TextField
        className={classes.margin}
        label="Project Name"
        value={project.projectName}
        variant="outlined"
        id="mui-theme-provider-outlined-input"
        disabled="true"
      />

      <TextArea projectDescription={project.projectDescription} />

      <div className={classes.infoBoxWrapper}>
        <InfoBox infoBoxTitle="Tasks" infoBoxValue={project.tasksNumber} />
        <InfoBox
          infoBoxTitle="Duration"
          infoBoxValue={project.totalTimeInMinutes}
        />
        <InfoBox infoBoxTitle="Start Date" infoBoxValue={project.startDate} />
        <InfoBox infoBoxTitle="End Date" infoBoxValue={project.endDate} />
        <InfoBox
          infoBoxTitle="Created By"
          infoBoxValue={project.projectCreator}
        />
      </div>
    </FormControl>
  );
}
