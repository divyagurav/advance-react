import React from "react";
import Chart from "./Chart";
const ExpensesChart = (props) => {
  const chartdataPoints = [
    { label: "Jan", value: 0 },
    { label: "feb", value: 0 },
    { label: "marcch", value: 0 },
    { label: "april", value: 0 },
    { label: "may", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartdataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartdataPoints}></Chart>;
};

export default ExpensesChart;
