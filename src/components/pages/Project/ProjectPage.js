import React from "react";

// components
import NavBar from "../../common/navigation";
import ExistingProjectView from "./ExistingProjectView/index";

const ProjectPage = () => {
  return (
    <React.Fragment>
      <NavBar />

      {/* if no projects in database show  show no project components *DON'T NEED IT?*S*/}
      {/* <NoProjectView /> delete this not needed. use only below components.*/}

      {/* if create project component clicked - show create project form components*/}
      {/* <CreateProjectForm /> */}

      {/* if there are projects in database -- show this one*/}
      <ExistingProjectView />

      {/* edit project view */}
      {/* <EditProjectView /> */}
    </React.Fragment>
  );
};

export default ProjectPage;
