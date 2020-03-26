import React from "react";

import NavBar from "../../common/navigation";
import LineChart from "./LineChart/index";
import { Card } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export default function AnalyticsView() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      {/* <Card>
        <Typography variant="h6">Hours Worked</Typography>
        <Typography variant="h4"> 12</Typography>
      </Card> */}
      {/* <LineChart></LineChart> */}
    </React.Fragment>
  );
}
