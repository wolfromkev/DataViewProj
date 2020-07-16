import React, { useState } from "react";
import { connect } from "react-redux";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import dateClick from "@fullcalendar/interaction";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import classes from "./Calendar.module.scss";
import DateModal from "./CalendarModals/DateModal";
import EventModal from "./CalendarModals/EventModal";

function CalendarComp(props) {
  const [eventData, setEventData] = useState(false);
  const [dateModal, setDateModal] = useState(false);
  const [eventModal, setEventModal] = useState(false);

  const toggleDate = (info) => {
    setDateModal(!dateModal);
  };
  const toggleEvent = (info) => {
    setEventModal(!eventModal);
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
        dateClick={(info) => toggleDate(info)}
        events={[
          {
            title: "Personal Task",
            date: "2020-07-01",
            description: "Lecture",
            backgroundColor: "red",
            editable: "true",
          },
          {
            title: "calendar Event",
            start: "2020-07-10",
            end: "2020-07-15",
            editable: "true",
          },
          {
            title: "External Task",
            date: "2020-07-20",
            description: "Lecture",
            backgroundColor: "green",
            editable: "true",
          },
        ]}
        eventClick={(info) => toggleEvent(info)}
      />
      <Modal isOpen={dateModal} toggle={toggleDate} className={classes.Modal}>
        <DateModal toggleDate={toggleDate} />
      </Modal>
      <Modal isOpen={eventModal} toggle={toggleEvent} className={classes.Modal}>
        <EventModal toggleEvent={toggleEvent} />
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarComp);
