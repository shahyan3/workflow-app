import React from "react";

import NavBar from "../../common/navigation";
import LineChart from "./LineChart/index";

export default function AnalyticsView() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <LineChart></LineChart>
    </React.Fragment>
  );
}
