import React from "react";
import classes from "./Dashboard.module.css";

import ToolPerformance from "../Components/DashboardComponents/ToolPerformance";
import YieldData from "../Components/DashboardComponents/YieldData";
import UpcomingProduct from "../Components/DashboardComponents/UpcomingProduct";

import { Row } from "reactstrap";

function Dashboard() {
  return (
    <>
      <div className={classes.all}>
        <ToolPerformance />
        <Row className={classes.middleRow}>
          <YieldData />
          <UpcomingProduct />
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
