import React from "react";

// components
import TaskExpansionPanel from "../../TasksComponents/TaskExpansionPanel/index";
import PanelDetails from "../../TasksComponents/PanelDescription";
import PanelTitle from "../../TasksComponents/PanelTitle";
import CreateTaskBtn from "../../TasksComponents/CreateTaskBtn/index";

const NewProject = () => {
  return (
    <React.Fragment>
      <div className="new-project">
        <h1>New Project</h1>
        <TaskExpansionPanel
          panelTitle={<PanelTitle />}
          panelDetails={<PanelDetails />}
        />
        <CreateTaskBtn />
      </div>
    </React.Fragment>
  );
};

export default NewProject;
