import React, { useState } from "react";
import { connect } from "react-redux";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import classes from "./Calendar.module.css";
import classNames from "classnames";

function CalendarComp() {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <FullCalendar
        className={classes.header}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
      />
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarComp);
