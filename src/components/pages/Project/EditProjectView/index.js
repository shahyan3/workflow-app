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

// function printTasks(tasks) {
//   if (tasks && tasks.length > 0) {
//     return tasks[0].taskName;
//   } else {
//     return "No tasks found";
//   }
// }

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

    setProject(data);
  });

  if (project.tasks) {
    const view = (
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
              <h3>ALL TASKS {console.log("@@=>", project.tasks)}</h3>

              {project.tasks.map((task) => (
                <TaskExpansionPanel
                  task={task}
                  panelTitle={
                    <PanelTitle
                      totalTimeInMinutes={task.totalTimeInMinutes}
                      taskNumber={task.taskNumber}
                      taskName={task.taskName}
                    />
                  }
                  panelDetails={
                    <PanelDescription taskDescription={task.taskDescription} />
                  }
                />
              ))}
              <CreateTaskBtn />
            </div>
          </div>
        </main>
      </React.Fragment>
    );
    return <LayoutGrid view={view} />;
  } else {
    return <p>loading..</p>;
  }
}

export default EditProjectView;
