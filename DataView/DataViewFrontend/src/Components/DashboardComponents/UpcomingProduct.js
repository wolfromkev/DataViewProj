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
import classes from "./UpcomingProduct.module.css";
import classNames from "classnames";
import ReactEcharts from "echarts-for-react";
import moment from "moment";
import { upcomingProductFormatter } from "../../Utility/dataFormatting";

function UpcomingProduct(props) {
  const [data, setData] = useState([]);
  const [weekIndex, setWeekIndex] = useState(0);

  useEffect(() => {
    const formmatedData = upcomingProductFormatter(
      props.data.upcomingProductData
    );
    setData(formmatedData);
  }, [props.data.upcomingProductData]);

  let today = moment();
  let today2 = moment();
  let option = {
    color: ["#3398DB"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "5%",
      right: "4%",
      bottom: "0",
      height: "95%",
      containLabel: true,
    },
    xAxis: [
      {
        axisLabel: {
          color: "white",
        },
        type: "category",
        data: [
          today.add(weekIndex, "day").format("l"),
          today.add(1, "day").format("l"),
          today.add(1, "day").format("l"),
          today.add(1, "day").format("l"),
          today.add(1, "day").format("l"),
          today.add(1, "day").format("l"),
          today.add(1, "day").format("l"),
        ],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        axisLabel: {
          color: "white",
        },
        type: "value",
      },
    ],
    series: [
      {
        name: "Expected Volume",
        type: "bar",
        barWidth: "60%",
        data: data.slice(weekIndex, weekIndex + 7),
      },
    ],
  };

  return (
    <Fragment>
      <Col lg="6">
        <Card className={classNames("card-chart", classes.upcomingProductCard)}>
          <CardHeader>
            <Row>
              <Col className="text-left" sm="6">
                <h5> Upcoming Product Volume</h5>
                <CardTitle tag="h2">
                  {today2.add(weekIndex, "day").format("l")} -{" "}
                  {today2.add(weekIndex, "day").format("l")}
                </CardTitle>
              </Col>
              <Col sm="6">
                {" "}
                <span className={classes.buttonContainer}>
                  <div className={classes.button1}>
                    {weekIndex > 0 ? (
                      <Button
                        className={classNames("btn-simple")}
                        color="secondary"
                        size="sm"
                        onClick={() => setWeekIndex(weekIndex - 7)}
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
                    ) : null}
                  </div>
                  <div className={classes.button2}>
                    {weekIndex + 7 < data.length ? (
                      <Button
                        color="secondary"
                        size="sm"
                        className={classNames("btn-simple")}
                        onClick={() => setWeekIndex(weekIndex + 7)}
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
              className={classNames(
                "chart-area",
                classes.upcomingProductContainer
              )}
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
  data: state.miscData,
});

export default connect(mapStateToProps)(UpcomingProduct);
