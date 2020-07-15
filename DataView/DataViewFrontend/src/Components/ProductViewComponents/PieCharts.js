import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ReactEcharts from "echarts-for-react";

function PieCharts(props) {
  const [data, setData] = useState();

  useEffect(() => {
    setData(props.graphData);
  }, [props.graphData]);

  let chipData = data
    ? ["Chips"].concat(data.chipData)
    : ["Chips", 55.2, 67.1, 69.2, 72.4, 53.9, 39.1];
  let bubbleData = data
    ? ["Bubbles"].concat(data.bubbleData)
    : ["Bubbles", 86.5, 92.1, 85.7, 83.1, 73.4, 55.1];
  let scratchData = data
    ? ["Scratches"].concat(data.scratchData)
    : ["Scratches", 24.1, 67.2, 79.5, 86.4, 65.2, 82.5];
  let particleData = data
    ? ["Particles"].concat(data.particleData)
    : ["Particles", 55.2, 67.1, 69.2, 72.4, 53.9, 39.1];
  let unknownData = data
    ? ["Unknown"].concat(data.unknownData)
    : ["Unknown", 41.1, 30.4, 65.1, 53.3, 83.8, 98.7];

  const option = {
    textStyle: {
      color: "white",
    },
    title: [
      {
        subtext: "Start",
        left: "10%",
        top: "75%",
        textAlign: "center",
      },
      {
        subtext: "Grind",
        left: "26%",
        top: "75%",
        textAlign: "center",
      },
      {
        subtext: "Polish",
        left: "42%",
        top: "75%",
        textAlign: "center",
      },
      {
        subtext: "Coat",
        left: "58%",
        top: "75%",
        textAlign: "center",
      },
      {
        subtext: "Etch",
        left: "74%",
        top: "75%",
        textAlign: "center",
      },
      {
        subtext: "Dice",
        left: "90%",
        top: "75%",
        textAlign: "center",
      },
    ],
    legend: {
      textStyle: {
        color: "white",
      },
    },
    tooltip: {},
    dataset: {
      source: [
        ["Defect", "Start", "Grind", "Polish", "Coat", "Etch", "Dice"],
        unknownData,
        bubbleData,
        scratchData,
        chipData,
        particleData,
      ],
    },
    series: [
      {
        labelLine: "false",
        type: "pie",
        radius: 70,
        center: ["10%", "50%"],
        encode: {
          itemName: "Defect",
          value: "Start",
        },
      },
      {
        labelLine: "false",
        type: "pie",
        radius: 70,
        center: ["26%", "50%"],
        encode: {
          itemName: "Defect",
          value: "Grind",
        },
      },
      {
        labelLine: "false",
        type: "pie",
        radius: 70,
        center: ["42%", "50%"],
        encode: {
          itemName: "Defect",
          value: "Polish",
        },
      },
      {
        labelLine: "false",
        type: "pie",
        radius: 70,
        center: ["58%", "50%"],
        encode: {
          itemName: "Defect",
          value: "Coat",
        },
      },
      {
        labelLine: "false",
        type: "pie",
        radius: 70,
        center: ["74%", "50%"],
        encode: {
          itemName: "Defect",
          value: "Etch",
        },
      },
      {
        labelLine: "false",
        type: "pie",
        radius: 70,
        center: ["90%", "50%"],
        encode: {
          itemName: "Defect",
          value: "Dice",
        },
      },
    ],
  };

  return <ReactEcharts option={option} />;
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PieCharts);
