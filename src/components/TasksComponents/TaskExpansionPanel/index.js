import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Divider } from "@material-ui/core";

// components
import SubTaskExpansionPanel from "../SubTasksExpansionPanel";
import TaskDetailsCard from "../TaskDetailsCard";
import PanelDescription from "../PanelDescription";

const useStyles = makeStyles(theme => ({
  root: {
    width: "60%",
    marginLeft: "auto",
    paddingRight: "1rem"
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightRegular
  },
  taskDescription: {
    textAlign: "left"
  },
  taskDetailsFlex: {
    display: "flex",
    justifyContent: "space-around"
  }
}));

export default function TaskExpansionPanel(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            {props.panelTitle}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className={classes.taskDescription}>
            {props.panelDetails}
            <br></br>
            <Divider light />
            <br></br>
            <b>SUB TASKS</b>
            <br></br>
            <br></br>

            <SubTaskExpansionPanel
              panelTitle="Sub Task 1: Buy a book"
              panelDescription={<PanelDescription />}
            />
            <SubTaskExpansionPanel
              panelTitle="Sub Task 2: Meet with Sam"
              panelDescription={<PanelDescription />}
            />
            <SubTaskExpansionPanel
              panelTitle="Sub Task 3: Finalize papers"
              panelDescription={<PanelDescription />}
            />

            <TaskDetailsCard
              assignedBy={"Fedrick"}
              assignee={"Katie"}
              taskTime="14 min"
            />
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      {/* <FloatingActionButtons /> */}
    </div>
  );
}
