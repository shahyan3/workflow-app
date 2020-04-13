import React, { useLayoutEffect, useState } from "react";
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

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginLeft: "auto",
    paddingRight: "1rem",
    backgroundColor: "#f8f8f8",
    margin: "1rem 0",
  },
  headingWrapper: {
    borderTop: "blue 2px solid",

    backgroundColor: "#f8f8f8",
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightRegular,
    width: "100%",
  },
  taskDescription: {
    textAlign: "left",
  },
  taskDetailsFlex: {
    display: "flex",
    justifyContent: "space-around",
  },
}));

export default function TaskExpansionPanel(props) {
  const classes = useStyles();

  const [subTasks, setSubTasks] = useState({}); // initially going to be null ?

  useLayoutEffect(() => {
    if (subTasks.length > 0) {
      setSubTasks(subTasks);
    }
  }, []);

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.headingWrapper}
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
            {subTasks && subTasks.length > 0 ? (
              subTasks.map((subTask) => (
                <SubTaskExpansionPanel
                  panelTitle="Sub Task 1: Find a papers"
                  panelDescription={<PanelDescription />}
                />
              ))
            ) : (
              <p>no sub tasks</p>
            )}

            {console.log("rendered subtasks ==<<", subTasks)}
            {/* <SubTaskExpansionPanel
              panelTitle="Sub Task 2: Meet with Sam"
              panelDescription={<PanelDescription />}
            />
            <SubTaskExpansionPanel
              panelTitle="Sub Task 3: Finalize papers"
              panelDescription={<PanelDescription />}
            /> */}
            <TaskDetailsCard
              assignedBy={"Fedrick"}
              assignee={"Katie"}
              timeValue="14"
              timeUnit="min"
            />
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      {/* <FloatingActionButtons /> */}
    </div>
  );
}
