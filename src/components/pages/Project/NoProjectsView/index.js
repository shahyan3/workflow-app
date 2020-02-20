import React from "react";
import { Paper } from "@material-ui/core";

const NoProjectView = () => {
  return (
    <Paper elevation={2}>
      <div className="no-project-wrapper">
        <div>
          <h2>No projects right now. Create new project!</h2>
          <h2>No projects right now. Create new project!</h2>
          <h2>No projects right now. Create new project!</h2>
          <h2>No projects right now. Create new project!</h2>
          <button>create project</button>
        </div>
      </div>
    </Paper>
  );
};

export default NoProjectView;
