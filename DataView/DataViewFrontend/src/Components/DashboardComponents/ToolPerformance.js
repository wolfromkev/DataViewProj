import React, { useState, useEffect } from "react";
import classes from "./ToolPerformance.module.css";
import { connect } from "react-redux";
import classNames from "classnames";
import ReactEcharts from "echarts-for-react";
import { productDataFormatter } from "../../Utility/dataFormatting";

import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import textStyle from "echarts/src/model/mixin/textStyle";

function ToolPerformance(props) {
  const { productData } = props.productData;

  const [grindData, setGrindData] = useState([]);
  const [polishData, setPolishData] = useState([]);
  const [coatData, setCoatData] = useState([]);
  const [etchData, setEtchData] = useState([]);
  const [diceData, setDiceData] = useState([]);

  const [toolButton, setToolButton] = useState(1);
  const [currentTool, setCurrentTool] = useState("Grinder");
  const [data, setData] = useState([]);

  useEffect(() => {
    let {
      grindData,
      polishData,
      coatData,
      etchData,
      diceData,
    } = productDataFormatter(productData);

    setGrindData(grindData);
    setPolishData(polishData);
    setCoatData(coatData);
    setEtchData(etchData);
    setDiceData(diceData);
    setData(grindData);
  }, [productData]);
  const option = {
    grid: {},
    tooltip: {
      axisPointer: {
        type: "cross",
      },
      trigger: "axis",
      formatter: function (obj) {
        const value = data[obj[0].dataIndex];
        return (
          '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
          "Product ID: " +
          value[0] +
          "<br>" +
          "Total Defects: " +
          value[3] +
          "</div>" +
          "Start Date: " +
          " " +
          value[1] +
          "<br>" +
          "Finished Date: " +
          " " +
          value[2] +
          "<br>" +
          "Bubble Defects:" +
          " " +
          value[4] +
          "<br>" +
          "Scratch Defects:" +
          " " +
          value[5] +
          "<br>" +
          "Particle Defects:" +
          " " +
          value[6] +
          "<br>" +
          "Chip Defects:" +
          " " +
          value[7] +
          "<br>" +
          "Unknown Defects:" +
          " " +
          value[8]
        );
      },
    },
    xAxis: {
      axisLabel: {
        color: "white",
      },
      data: data.map(function (item) {
        return item[2];
      }),
    },
    yAxis: {
      axisLabel: {
        color: "white",
      },
      splitLine: {
        show: false,
      },
    },

    dataZoom: [
      {
        startValue: "2014-06-01",
      },
      {
        type: "inside",
      },
    ],
    visualMap: {
      top: 10,
      right: 10,
      textStyle: {
        color: "#fff",
      },
      pieces: [
        {
          gt: 0,
          lte: 100,
          color: "#096",
        },
        {
          gt: 100,
          lte: 200,
          color: "#ffde33",
        },
        {
          gt: 200,
          lte: 300,
          color: "#ff9933",
        },
        {
          gt: 300,
          lte: 400,
          color: "#cc0033",
        },
        {
          gt: 400,
          lte: 500,
          color: "#660099",
        },
        {
          gt: 500,
          lte: 600,
          color: "#ff58b4",
        },
        {
          gt: 600,
          lte: 700,
          color: "#92dc61",
        },
        {
          gt: 700,
          lte: 800,
          color: "#24ac85",
        },
        {
          gt: 800,
          lte: 900,
          color: "#7e0023",
        },
      ],
      outOfRange: {
        color: "#999",
      },
    },
    dataset: {
      source: data,
    },

    series: {
      name: "Total Defects",
      type: "line",
      data: data.map(function (item) {
        return item[3];
      }),
      markLine: {
        silent: true,
        data: [
          {
            yAxis: 100,
          },
          {
            yAxis: 200,
          },
          {
            yAxis: 300,
          },
          {
            yAxis: 400,
          },
          {
            yAxis: 500,
          },
          {
            yAxis: 600,
          },
          {
            yAxis: 700,
          },
          {
            yAxis: 800,
          },
          {
            yAxis: 900,
          },
        ],
      },
    },
  };

  function setDataFunction(currentData, tool, activeButton) {
    setData(currentData);
    setCurrentTool(tool);
    setToolButton(activeButton);
  }

  return (
    <div className={classes.toolPerformanceContainer}>
      <Row>
        <Col xs="12">
          <Card className={classNames("card-chart", classes.mainCard)}>
            <CardHeader>
              <Row>
                <Col className="text-left" sm="6">
                  <h5 className="card-category">
                    Product Defect Levels - Zoom in for a closer look{" "}
                  </h5>
                  <CardTitle tag="h2">{currentTool}</CardTitle>
                </Col>
                <Col sm="6">
                  <ButtonGroup
                    className="btn-group-toggle float-right"
                    data-toggle="buttons"
                  >
                    <Button
                      active={toolButton === 1}
                      tag="label"
                      className={classNames("btn-simple")}
                      color="secondary"
                      id="0"
                      size="sm"
                      onClick={() => setDataFunction(grindData, "Grinder", 1)}
                    >
                      <input
                        defaultChecked
                        className="d-none"
                        name="options"
                        type="radio"
                      />
                      <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                        Grinder
                      </span>
                      <span className="d-block d-sm-none">
                        <i className="tim-icons icon-single-02" />
                      </span>
                    </Button>
                    <Button
                      active={toolButton === 2}
                      color="secondary"
                      id="1"
                      size="sm"
                      tag="label"
                      className={classNames("btn-simple")}
                      onClick={() => setDataFunction(polishData, "Polisher", 2)}
                    >
                      <input className="d-none" name="options" type="radio" />
                      <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                        Polisher
                      </span>
                      <span className="d-block d-sm-none">
                        <i className="tim-icons icon-gift-2" />
                      </span>
                    </Button>
                    <Button
                      active={toolButton === 3}
                      color="secondary"
                      id="2"
                      size="sm"
                      tag="label"
                      className={classNames("btn-simple")}
                      onClick={() => setDataFunction(coatData, "Coater", 3)}
                    >
                      <input className="d-none" name="options" type="radio" />
                      <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                        Coater
                      </span>
                      <span className="d-block d-sm-none">
                        <i className="tim-icons icon-tap-02" />
                      </span>
                    </Button>
                    <Button
                      active={toolButton === 4}
                      color="secondary"
                      id="2"
                      size="sm"
                      tag="label"
                      className={classNames("btn-simple")}
                      onClick={() => setDataFunction(etchData, "Etcher", 4)}
                    >
                      <input className="d-none" name="options" type="radio" />
                      <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                        Etcher
                      </span>
                      <span className="d-block d-sm-none">
                        <i className="tim-icons icon-tap-02" />
                      </span>
                    </Button>
                    <Button
                      active={toolButton === 5}
                      color="secondary"
                      id="2"
                      size="sm"
                      tag="label"
                      className={classNames("btn-simple")}
                      onClick={() => setDataFunction(diceData, "Dicer", 5)}
                    >
                      <input className="d-none" name="options" type="radio" />
                      <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                        Dicer
                      </span>
                      <span className="d-block d-sm-none">
                        <i className="tim-icons icon-tap-02" />
                      </span>
                    </Button>
                  </ButtonGroup>
                </Col>
              </Row>
            </CardHeader>
            <div className={classes.container}>
              <ReactEcharts className={classes.graph} option={option} />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

const mapStateToProps = (state) => ({
  productData: state.productData,
});

export default connect(mapStateToProps)(ToolPerformance);
