import React from "react";
import classes from "./Dashboard.module.css";
import classNames from "classnames";
import ToolPerformance from "../Components/DashboardComponents/ToolPerformance";
import YieldData from "../Components/DashboardComponents/YieldData";
import UpcomingProduct from "../Components/DashboardComponents/UpcomingProduct";
import Calendar from "../Components/DashboardComponents/Calendar";
import ToDoList from "../Components/DashboardComponents/ToDoList";

import { Card, Row, Col } from "reactstrap";

function Dashboard() {
  return (
    <>
      <div className={classes.all}>
        <ToolPerformance />
        <Row className={classes.middleRow}>
          <YieldData />
          <UpcomingProduct />
        </Row>
        {/* <Row>
          <Col sm="6">
            <Card className={classNames("card-chart", classes.calendar)}>
              <Calendar />
            </Card>
          </Col>
          <Col sm="6">
            <Card className={classNames("card-chart", classes.toDoList)}>
              <ToDoList />
            </Card>
          </Col>
        </Row>*/}
      </div>
    </>
  );
}

export default Dashboard;
