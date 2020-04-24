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
    setSubTasks(props.task.subTasks);
    // console.log(subTasks, "subtasks...");
  }, []);

  if (subTasks.length >= 0) {
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
              <br></br>
              <Divider light />
              <br></br>
              <b>SUB TASKS</b>
              <br></br>
              <br></br>
              {subTasks && subTasks.length > 0 ? (
                subTasks.map((subTask) => (
                  <SubTaskExpansionPanel
                    panelTitle={subTask.subTaskName}
                    assignedBy={subTask.subTaskMeta.assignedBy}
                    assignee={subTask.subTaskMeta.assignee}
                    panelDescription={
                      <PanelDescription
                        taskDescription={subTask.subTaskDescription}
                      />
                    }
                  />
                ))
              ) : (
                <p>no sub tasks</p>
              )}

              <TaskDetailsCard
                assignedBy={props.task.taskMeta.assignedBy}
                assignee={props.task.taskMeta.assignee}
                timeValue={props.task.totalTimeInMinutes}
                timeUnit="min"
              />
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        {/* <FloatingActionButtons /> */}
      </div>
    );
  } else {
    return <p>loading</p>;
  }
}
