import React from "react";

import CharBar from "./ChartBar";
import "./Chart.css";
//import { props } from "bluebird";
const Chart = (props) => {
  const datapointsvalues = props.dataPoints.map(dataPoints.value);
  const totalmaximun = Math.max(...datapointsvalues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <CharBar
          key={dataPoints.label}
          value={dataPoints.value}
          maxValue={totalmaximun}
          label={dataPoints.label}
        />
      ))}
    </div>
  );
};

export default Chart;
