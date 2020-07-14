import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Button,
  Row,
} from "reactstrap";
import moment from "moment";
import classes from "./YieldData.module.css";
import classNames from "classnames";
import ReactEcharts from "echarts-for-react";
import { yieldDataFormatter } from "../../Utility/dataFormatting";

function YieldData(props) {
  useEffect(() => {
    const formattedData = yieldDataFormatter(props.yieldData);
    setData(formattedData);
    setWeek(moment().week());
    setYear(moment().year());
  }, [props.yieldData]);

  const [year, setYear] = useState();
  const [week, setWeek] = useState();
  const [dataIndex, setDataIndex] = useState(0);
  const [data, setData] = useState([]);

  function lastWeekData() {
    if (week === 0) {
      setWeek(52);
      setYear(year - 1);
      setDataIndex(dataIndex + 1);
    } else {
      setWeek(week - 1);
      setDataIndex(dataIndex + 1);
    }
  }

  function nextWeekData() {
    if (week === 52) {
      setWeek(0);
      setYear(year + 1);
      setDataIndex(dataIndex - 1);
    } else {
      setWeek(week + 1);
      setDataIndex(dataIndex - 1);
    }
  }

  let option = {
    grid: {
      left: "5%",
      right: "4%",
      bottom: "0",
      height: "95%",
      containLabel: true,
    },

    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },

    xAxis: {
      axisLabel: {
        color: "white",
        rotate: "25",
      },
      data: [
        "Avg. Yield %",
        "Prod. Output %",
        "Grind Uptime %",
        "Polish Uptime %",
        "Coat Uptime %",
        "Etch Uptime %",
        "Dice Uptime %",
      ],
    },
    yAxis: {
      type: "value",
      axisLabel: {
        color: "white",
      },
    },
    series: [
      {
        itemStyle: {
          color: "#ba005d",
        },
        name: "Achieved Value",
        type: "bar",
        barWidth: "60%",
        z: 10,
        data: data[dataIndex],
      },

      {
        itemStyle: {
          color: "orange",
        },
        name: "Goal Value",
        type: "bar",
        stack: "goal",
        barWidth: "60%",
        barGap: "-100%",
        data: [100, 100, 100, 100, 100, 100, 100],
      },
    ],
  };

  return (
    <Fragment>
      <Col lg="6">
        <Card className={classNames("card-chart", classes.mainCard)}>
          <CardHeader>
            <Row>
              <Col className="text-left" sm="6">
                <h5> Weekly Yield Data</h5>
                <CardTitle tag="h2">
                  Week {week}, {year}
                </CardTitle>
              </Col>
              <Col sm="6">
                {" "}
                <span className={classes.buttonContainer}>
                  <div className={classes.button1}>
                    <Button
                      className={classNames("btn-simple")}
                      color="secondary"
                      size="sm"
                      onClick={() => lastWeekData()}
                    >
                      <input
                        defaultChecked
                        className="d-none"
                        name="options"
                        type="radio"
                      />
                      <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                        Previous Week
                      </span>
                      <span className="d-block d-sm-none">
                        <i className="tim-icons icon-single-02" />
                      </span>
                    </Button>
                  </div>
                  <div className={classes.button2}>
                    {dataIndex !== 0 ? (
                      <Button
                        color="secondary"
                        size="sm"
                        className={classNames("btn-simple")}
                        onClick={() => nextWeekData()}
                      >
                        <input className="d-none" name="options" type="radio" />
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Next Week
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-gift-2" />
                        </span>
                      </Button>
                    ) : null}
                  </div>
                </span>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <div
              className={classNames("chart-area", classes.yieldDataContainer)}
            >
              <ReactEcharts option={option} />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  yieldData: state.miscData.yieldData,
});

export default connect(mapStateToProps)(YieldData);
