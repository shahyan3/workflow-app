import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { Button, DialogTitle } from "@material-ui/core";
import DisplayTasksModal from "../../pages/Sprints/DisplayTasksModal";
import SimpleModal from "../modal";
import ProjectTasksModal from "../../pages/Sprints/DisplayTasksModal/index";
import PanelTitle from "../../pages/Project/TasksComponents/PanelTitle";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: theme.spacing(4, 0, 2)
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#f8f8f8",
    margin: "0.5rem"
  }
}));

var projects = ["Project One", "Project two", "Project Three"];
export default function ProjectListModal() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography variant="h6" className={classes.title}>
            ALL PROJECTS
          </Typography>
          <List>
            {projects.map(project => (
              <ListItem className={classes.listItem}>
                <Typography variant="body1">{project}</Typography>
                <DisplayTasksModal />{" "}
              </ListItem>
            ))}
          </List>
          <Button variant="contained" color="primary">
            Close
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
