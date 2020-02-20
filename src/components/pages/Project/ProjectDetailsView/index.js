import React from "react";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { green } from "@material-ui/core/colors";
import InfoBox from "./InfoBox";
import TextArea from "./TextArea";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  margin: {
    margin: theme.spacing(1)
  },
  infoBoxWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "80%",
    margin: "20px auto"
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: green
  }
});

export default function ProjectDetailsView() {
  const classes = useStyles();

  return (
    <FormControl className={classes.root} noValidate>
      <ThemeProvider theme={theme}>
        <TextField
          className={classes.margin}
          label="Project Name"
          variant="outlined"
          id="mui-theme-provider-outlined-input"
        />
      </ThemeProvider>

      <TextArea />
      <div className={classes.infoBoxWrapper}>
        <InfoBox infoBoxTitle="Tasks" infoBoxValue="15" />
        <InfoBox infoBoxTitle="Duration" infoBoxValue="5h 45min" />
        <InfoBox infoBoxTitle="Start Date" infoBoxValue="15/12/2020" />
        <InfoBox infoBoxTitle="End Date" infoBoxValue="21/2/2021" />
        <InfoBox infoBoxTitle="Created By" infoBoxValue="Shahyan Hasan" />
      </div>
    </FormControl>
  );
}
