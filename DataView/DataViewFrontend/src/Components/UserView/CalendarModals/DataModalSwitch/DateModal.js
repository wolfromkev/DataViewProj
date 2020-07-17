import React, { useState } from "react";
import { Button, ModalBody, ModalFooter } from "reactstrap";
import classes from "./DataModal.module.scss";
import Task from "./Task";
import Event from "./Event";

function DateModal(props) {
  const [eventTaskSwitch, setEventTaskSwitch] = useState(true);

  function eventTaskSwitchHandler() {
    setEventTaskSwitch(!eventTaskSwitch);
  }

  return (
    <>
      <ModalBody className={classes.modalBody}>
        <h3 className={classes.eventTaskHeader}>
          New {eventTaskSwitch ? "Event" : "Task"}
        </h3>
        <hr />
        {eventTaskSwitch ? (
          <Event
            toggleDate={props.toggleDate}
            eventTaskSwitch={eventTaskSwitchHandler}
          />
        ) : (
          <Task
            toggleDate={props.toggleDate}
            eventTaskSwitch={eventTaskSwitchHandler}
          />
        )}
      </ModalBody>
    </>
  );
}

export default DateModal;
