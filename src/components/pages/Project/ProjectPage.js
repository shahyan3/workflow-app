import React from "react";
import { Paper } from "@material-ui/core";

// components
import CreateProjectForm from "./CreateProjectForm/index";
import NavBar from "../../common/navigation";
import NoProjectView from "./NoProjectsView";
import ExistingProjectView from "./ExistingProjectView";

const ProjectPage = () => {
  return (
    <React.Fragment>
      <NavBar />

      {/* if no projects in database show  show no project components*/}
      <NoProjectView />

      {/* if create project component clicked - show create project form components*/}
      {/* <CreateProjectForm /> */}

      {/* if there are projects in database one is selected -- show this one*/}
      {/* <ExistingProjectView /> */}
    </React.Fragment>
  );
};

export default ProjectPage;
