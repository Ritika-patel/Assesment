// import React from 'react';
// import CanvasJSReact from '@canvasjs/react-charts';

// const CanvasJS = CanvasJSReact.CanvasJS;
// const CanvasJSChart = CanvasJSReact.CanvasJSChart;

// const Chart = () => {
//   const options = {
//     animationEnabled: true,
//     title: {
//         text: "Activities",
//         fontFamily: "Montserrat", // Set the font family
//         fontSize: 18, // Set the font size in pixels
//         fontWeight: "bold", // Set the font weight
//         lineHeight: 22, // Set the line height in pixels
//         letterSpacing: 0, // Set the letter spacing in em
//         horizontalAlign: 'left',
//         fontColor: '#000000',
//         margin: 5
//       },
//       axisX:{
//         fontColor: 'red',
//         labelFontColor: "#858585"
//       },
//       axisY:{
//         labelFontColor: "#858585",
//         gridColor: "#EAEAEA",
//       },
//       labelFontColor: "red",
//       subtitles:[
//       {
//         text: "May-June 2021",
//         horizontalAlign: "left",
//         fontColor: "#858585", // Set the font color
//         fontFamily: "Montserrat", // Set the font family
//         fontSize: 14, // Set the font size in pixels
//         fontWeight: 400, // Set the font weight
//         lineHeight: 17, // Set the line height in pixels
//         letterSpacing: 0, // Set the letter spacing in em
//         textAlign: "left", // Set the text alignment
//         margin: 20

//     }
//     ],
//     toolTip: {
//       shared: true
//     },
//     legend: {
//         verticalAlign: "top",  // "top" , "bottom"
//         horizontalAlign: "right",
//       },
//     data: [
//       {
//         type: "column",
//         showInLegend: true,
//         type: "spline",
//         name: "Guest",
//         color: '#E9A0A0',
//         markerType: 'none',
//         dataPoints: [
//             { y: 100, label: "week1" },
//             { y: 300, label: "week2" },
//             { y: 120, label: "week3" },
//             { y: 10, label: "week4" },
//             { y: 10, label: "week5" },
//           ]
//       },
//       {
//         type: "spline",
//         name: "User",
//         showInLegend: true,
//         color: '#9BDD7C',
//         markerType: 'none',
//         dataPoints: [

//           { y: 200, label: "week1" },
//           { y: 300, label: "week2" },
//           { y: 65, label: "week3" },
//           { y: 302, label: "week4" },
//           { y: 490, label: "week5" },
//         ]
//       },

//     ]
//   };

//   return (
//     <div>
//       <CanvasJSChart options={options} />
//     </div>
//   );
// };

// export default Chart;

import React, { useState } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = () => {
  const jsonData = {
    option1: {
      user1: [
        { label: "week1", y: 100 },
        { label: "week2", y: 200 },
        { label: "week3", y: 300 },
      ],
      user2: [
        { label: "week1", y: 200 },
        { label: "week2", y: 300 },
        { label: "week3", y: 100 },
      ],
    },
    option2: {
      user1: [
        { label: "week1", y: 300 },
        { label: "week2", y: 200 },
        { label: "week3", y: 100 },
      ],
      user2: [
        { label: "week1", y: 200 },
        { label: "week2", y: 100 },
        { label: "week3", y: 300 },
      ],
    },
  };

  const [selectedOption, setSelectedOption] = useState("option1");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const chartOptions = {
    animationEnabled: true,
    // title: {
    //   text: "Activities",
    //   fontFamily: "Montserrat",
    //   fontSize: 18,
    //   fontWeight: "bold",
    //   lineHeight: 22,
    //   letterSpacing: 0,
    //   horizontalAlign: 'left',
    //   fontColor: '#000000',
    // },
    axisX: {
      fontColor: "red",
      labelFontColor: "#858585",
    },
    axisY: {
      labelFontColor: "#858585",
      gridColor: "#EAEAEA",
      minimum: 0,
      interval: 100,
    },
    labelFontColor: "red",
    // subtitles: [
    //   {
    //     text: "May-June 2021",
    //     horizontalAlign: "left",
    //     fontColor: "#858585",
    //     fontFamily: "Montserrat",
    //     fontSize: 14,
    //     fontWeight: 400,
    //     lineHeight: 17,
    //     letterSpacing: 0,
    //     textAlign: "left",
    //     margin: 20,
    //   },
    // ],
    toolTip: {
      shared: true,
    },
    legend: {
      verticalAlign: "top",
      horizontalAlign: "right",
    },
    data: [
      {
        type: "spline",
        showInLegend: true,
        name: "Guest",
        color: "#E9A0A0",
        markerType: "none",
        dataPoints: jsonData[selectedOption].user1.map(({ label, y }) => ({
          label: label,
          y: y,
        })),
      },
      {
        type: "spline",
        name: "User",
        showInLegend: true,
        color: "#9BDD7C",
        markerType: "none",
        dataPoints: jsonData[selectedOption].user2.map(({ label, y }) => ({
          label: label,
          y: y,
        })),
      },
    ],
  };


  return (
    <div className="">
      <div className="dropdown">
        <div className="chartTitle" >Activities</div>
        <select id="dd" value={selectedOption} onChange={handleOptionChange}>
            <option value="option1">May-Jun 2021</option>
          <option value="option2">jun-July 2021</option>
        
        </select>
      </div>
      <CanvasJSChart options={chartOptions} />
    </div>
  );
};

export default Chart;
