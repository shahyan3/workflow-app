import React, { useState, useLayoutEffect } from "react";

// components
import { Paper } from "@material-ui/core";
import CreateTaskBtn from "../TasksComponents/CreateTaskBtn/index";
import TaskExpansionPanel from "../TasksComponents/TaskExpansionPanel/index";
import PanelTitle from "../TasksComponents/PanelTitle";
import PanelDescription from "../TasksComponents/PanelDescription";
import ProjectDetailsView from "../ProjectDetailsView/index";
import LayoutGrid from "../../../common/layout/LayoutGrid";
import database from "../../../../database";
import { useParams } from "react-router-dom";

const classes = {
  projectContainer: {
    display: "flex",
    justifyContent: "space-around",
    paddingTop: "10px",
    flexDirection: "row-reverse",
  },
  projectOverviewWrapper: {
    width: "35%",
  },
  tasksContainer: {
    width: "60%",
  },
  project: {},
};

function EditProjectView(props) {
  const [project, setProject] = useState({});

  // get id from params
  const { id } = useParams();

  // syncronously (same time before and then after) renders it will use this hook
  useLayoutEffect(() => {
    // fake* ajax request to database
    const data = database.projects.find((project) => {
      return project.id == id;
    }, []);

    console.log("Let's see:", project);
    setProject(data);
  });

  const projectView = (
    <React.Fragment>
      <main style={classes.content}>
        <div style={classes.projectContainer}>
          <div style={classes.projectOverviewWrapper}>
            <Paper elevation={2}>
              <div style={classes.project}>
                {<ProjectDetailsView project={project} />}
              </div>
            </Paper>
          </div>
          <div style={classes.tasksContainer}>
            <h3>ALL TASKS</h3>

            <TaskExpansionPanel
              panelTitle={
                <PanelTitle
                  // totalTimeInMinutes={task.totalTimeInMinutes}
                  // taskNumber={task.taskNumber}
                  // taskName={task.taskName}
                  taskName={project.tasks[0].taskName}
                />
              }
              panelDetails={<PanelDescription />}
            />

            <CreateTaskBtn />
          </div>
        </div>
      </main>
      }
    </React.Fragment>
  );

  return project !== null ? (
    <LayoutGrid view={projectView} />
  ) : (
    <p>loading...</p>
  );
}

export default EditProjectView;
