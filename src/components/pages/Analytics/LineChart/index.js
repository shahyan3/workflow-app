import React from "react";
import { Line } from "react-chartjs-2";
import LayoutGrid from "../../../common/layout/LayoutGrid";

export default function LineChart() {
  const view = (
    <React.Fragment>
      <Line></Line>
    </React.Fragment>
  );

  return <LayoutGrid view={view}></LayoutGrid>;
}
