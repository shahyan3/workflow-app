import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// components
import TaskDetailsCard from "../TaskDetailsCard";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginBottom: "10px",
    borderTop: "orange 2px solid"
  },
  subTaskWrapper: {
    backgroundColor: "orange",
    color: "white",
    fontWeight: "bolder"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    width: "100%"
  },
  taskDescription: {
    textAlign: "left"
  }
}));

export default function SubTaskExpansionPanel(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.subTaskWrapper}
        >
          <Typography className={classes.heading}>
            {props.panelTitle}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className={classes.taskDescription}>
            {props.panelDescription}
            <TaskDetailsCard
              assignedBy={"Fedrick"}
              assignee={"Katie"}
              timeValue="5"
              timeUnit="min"
            />
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
