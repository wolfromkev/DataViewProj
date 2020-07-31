import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import dateClick from "@fullcalendar/interaction";
import classes from "./Calendar.module.scss";
import momentPlugin from "@fullcalendar/moment";

function CalendarComp(props) {
  const [eventData, setEventData] = useState([]);

  const toggleDate = (info) => {
    props.toggleDate();
  };
  const toggleEvent = (info) => {
    props.toggleEvent();
  };

  useEffect(() => {
    let tempTasks = [];
    for (let i = 0; i < props.tasks.assignedTasks.length; i++) {
      tempTasks.push({
        id: props.tasks.assignedTasks[i].id,
        title: props.tasks.assignedTasks[i].title,
        description: props.tasks.assignedTasks[i].description,
        date: props.tasks.assignedTasks[i].end,
      });
    }

    for (let i = 0; i < props.tasks.outgoingTasks.length; i++) {
      tempTasks.push({
        id: props.tasks.outgoingTasks[i].id,
        title: props.tasks.outgoingTasks[i].title,
        description: props.tasks.outgoingTasks[i].description,
        date: props.tasks.outgoingTasks[i].end,
      });
    }
    for (let i = 0; i < props.tasks.personalTasks.length; i++) {
      tempTasks.push({
        id: props.tasks.personalTasks[i].id,
        title: props.tasks.personalTasks[i].title,
        description: props.tasks.personalTasks[i].description,
        date: props.tasks.personalTasks[i].end,
      });
    }
    for (let i = 0; i < props.eventData.length; i++) {
      tempTasks.push({
        id: props.eventData[i].id,
        title: props.eventData[i].title,
        description: props.eventData[i].description,
        start: props.eventData[i].start,
        end: props.eventData[i].end,
      });
    }
    let inputArray = [...eventData].concat(tempTasks);
    setEventData(inputArray);
  }, [props.eventData]);

  return (
    <div className={classes.calendarInnerContainer}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, dateClick, momentPlugin]}
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
        dateClick={(info) => toggleDate(info)}
        events={eventData}
        eventClick={(info) => toggleEvent(info)}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({ eventData: state.events.eventData });

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarComp);
