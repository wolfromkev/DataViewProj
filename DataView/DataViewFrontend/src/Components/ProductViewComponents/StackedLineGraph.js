import React, { useState, useEffect } from "react";
import classes from "./StackedLineGraph.module.css";
import { connect } from "react-redux";
import ReactEcharts from "echarts-for-react";

function StackedLineGraph(props) {
  const [data, setData] = useState();
  useEffect(() => {
    setData(props.graphData);
  }, [props.graphData]);

  let chipData = data ? data.chipData : null;
  let bubbleData = data ? data.bubbleData : null;
  let scratchData = data ? data.scratchData : null;
  let particleData = data ? data.particleData : null;
  let unknownData = data ? data.unknownData : null;

  let option = {
    grid: {
      left: "0%",
      right: "3%",
      bottom: "0",
      height: "95%",

      containLabel: true,
    },
    textStyle: {
      color: "white",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      textStyle: {
        color: "white",
      },
      data: ["Unknown", "Bubbles", "Scratches", "Chips", "Particles", "Total"],
    },

    xAxis: {
      type: "category",
      boundaryGap: true,
      data: ["Start", "Grind", "Polish", "Coat", "Etch", "Dice"],
    },
    yAxis: {
      type: "value",
    },

    series: [
      {
        name: "Chips",
        type: "line",
        smooth: true,
        data: chipData,
      },
      {
        name: "Bubbles",
        type: "line",
        smooth: true,
        data: bubbleData,
      },
      {
        name: "Scratches",
        type: "line",
        smooth: true,
        data: scratchData,
      },
      {
        name: "Particles",
        type: "line",
        smooth: true,
        data: particleData,
      },
      {
        name: "Unknown",
        type: "line",
        smooth: true,
        data: unknownData,
      },
    ],
  };

  return (
    <div className={classes.container}>
      <ReactEcharts className={classes.graph} option={option} />
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(StackedLineGraph);
