import React, { useState } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const PieChart = () => {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const jsonData = {
    option1: [
      { label: "week1", y: 200 },
      { label: "week2", y: 300 },
      { label: "week3", y: 100 },
    ],
    option2: [
      { label: "week1", y: 300 },
      { label: "week2", y: 200 },
      { label: "week3", y: 100 },
    ],
  };

  const chartOptions = {
    animationEnabled: true,
    // title: {
    //   text: "Top Products",
    //   fontFamily: "Montserrat",
    //   fontSize: 18,
    //   fontWeight: "bold",
    //   lineHeight: 22,
    //   letterSpacing: 0,
    //   horizontalAlign: "left",
    //   fontColor: "#000000",
    //   margin: 5,
    // },
    legend: {
      horizontalAlign: "right",
      verticalAlign: "center",
      itemTextFormatter: function (e) {
        return e.dataPoint.name + ": " + e.dataPoint.y;
      },
    },
    data: [
      {
        showInLegend: true,
        type: "pie",
        dataPoints: jsonData[selectedOption].map(({ label, y }) => ({
          name: label,
          y: y,
        })),
      },
    ],
    height: 210,
    radius: "50%",
  };

  return (
    <div  className="">
        <div className="pie">
        <div className="chartTitle" >Top Products</div>
        <div className="dropdown2">
        <select
          id="dd"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="option1">May-Jun 2021</option>
          <option value="option2">Jun-July 2021</option>
        </select>
      </div>
        </div>

      <div>
        <CanvasJSChart options={chartOptions} />
      </div>
    </div>
  );
};

export default PieChart;
