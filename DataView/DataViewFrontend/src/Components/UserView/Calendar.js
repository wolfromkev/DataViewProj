import React, { useState } from "react";
import { connect } from "react-redux";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import dateClick from "@fullcalendar/interaction";
import classes from "./Calendar.module.css";

const events = [{ title: "event 1", data: "2020-07-20" }];

function CalendarComp(props) {
  const handleDateClick = () => {
    console.log("hello");
  };

  return (
    <div className={classes.calendarInnerContainer}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, dateClick]}
        headerToolbar={{
          left: "dayGridMonth,timeGridWeek,timeGridDay",
          center: "title",
          right: "prev,next",
        }}
        buttonText={{
          today: "today",
          month: "month",
          week: "week",
          day: "day",
          list: "list",
        }}
        initialView="dayGridMonth"
        dateClick={() => handleDateClick()}
        events={[
          { title: "event 1", date: "2020-07-01" },
          { title: "event 2", date: "2020-07-01" },
        ]}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarComp);
