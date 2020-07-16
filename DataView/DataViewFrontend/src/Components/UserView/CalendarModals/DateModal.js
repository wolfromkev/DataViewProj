import React, { useState } from "react";
import { Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ReactDOM from "react-dom";
import Cleave from "cleave.js/react";
import classes from "./Modal.module.scss";
import InputBase from "@material-ui/core/InputBase";
import Popper from "@material-ui/core/Popper";
import SearchModal from "./searchPopover";

function DateModal(props) {
  const [eventTaskSwitch, setEventTaskSwitch] = useState(false);
  const [userSearch, setUserSearch] = useState("");
  const [popperObj, setPopperObj] = useState(null);

  const clearSearch = () => {
    setUserSearch("");
  };

  const handleChange = (event) => {
    setUserSearch(event.target.value);
    setPopperObj(event.currentTarget);
  };

  const open = Boolean(popperObj);
  const id = open ? "simple-popper" : undefined;

  return (
    <>
      {eventTaskSwitch ? (
        <ModalBody className={classes.modalBody}>
          <h3 className={classes.eventTaskHeader}>
            New {eventTaskSwitch ? "Event" : "Task"}
          </h3>
          <hr />
          <div className={classes.header}>
            <div className={classes.headerInputContainer}>
              <input type="text" placeholder="Title" />
            </div>
            <div className={classes.headerButtonContainer}>
              <button
                className={
                  !eventTaskSwitch
                    ? classes.headerTaskButton
                    : classes.headerTaskButtonActive
                }
                onClick={() => setEventTaskSwitch(true)}
              >
                Event
              </button>
              <button
                type="button"
                className={
                  eventTaskSwitch
                    ? classes.headerTaskButton
                    : classes.headerTaskButtonActive
                }
                onClick={() => setEventTaskSwitch(false)}
              >
                Task
              </button>
            </div>
          </div>
          <div className={classes.descriptionInputContainer}>
            <textarea rows="2" cols="50" placeholder="Description" />
          </div>
          <div className={classes.dateRangeContainer}>
            <Cleave
              name="helperLabel"
              className={classes.cleave1}
              placeholder="Start"
              options={{
                blocks: [4, 2, 2, 2, 2],
                delimiters: ["/", "/", " ", ":"],
              }}
            />
            <Cleave
              className={classes.cleave2}
              placeholder="End"
              options={{
                blocks: [4, 2, 2, 2, 2],
                delimiters: ["-", "-", " ", ":", ":"],
              }}
            />
          </div>
          <label htmlFor="helperLabel" className={classes.labelText}>
            {" "}
            YYYY-MM-DD HH:MM{" "}
          </label>
        </ModalBody>
      ) : (
        <ModalBody className={classes.modalBody}>
          <h3 className={classes.eventTaskHeader}>
            New {eventTaskSwitch ? "Event" : "Task"}
          </h3>
          <hr className={classes.headingHR} />
          <div className={classes.header}>
            <div className={classes.headerInputContainer}>
              <input type="text" placeholder="Title" />
            </div>
            <div className={classes.headerButtonContainer}>
              <button
                className={
                  !eventTaskSwitch
                    ? classes.headerTaskButton
                    : classes.headerTaskButtonActive
                }
                onClick={() => setEventTaskSwitch(true)}
              >
                Event
              </button>
              <button
                type="button"
                className={
                  eventTaskSwitch
                    ? classes.headerTaskButton
                    : classes.headerTaskButtonActive
                }
                onClick={() => setEventTaskSwitch(false)}
              >
                Task
              </button>
            </div>
          </div>
          <div className={classes.descriptionInputContainer}>
            <textarea rows="2" cols="50" placeholder="Description" />
          </div>
          <div className={classes.dateRangeContainer}>
            <input
              aria-describedby={id}
              type="text"
              value={userSearch}
              placeholder="Assigned To:"
              className={classes.cleave1}
              autoComplete="off"
              onChange={(event) => handleChange(event)}
            />
            <Popper
              id={id}
              open={userSearch.length > 0}
              anchorEl={popperObj}
              placement="bottom"
              className={classes.popper}
            >
              <SearchModal userSearch={userSearch} clearSearch={clearSearch} />
            </Popper>

            <Cleave
              name="helperLabel"
              className={classes.cleave2}
              placeholder="ECD"
              options={{
                blocks: [4, 2, 2, 2, 2],
                delimiters: ["-", "-", " ", ":", ":"],
              }}
            />
          </div>

          <label htmlFor="helperLabel" className={classes.labelText}>
            {" "}
            YYYY-MM-DD HH:MM{" "}
          </label>
        </ModalBody>
      )}
      <ModalFooter>
        <Button color="primary" onClick={props.toggleDate}>
          Set {eventTaskSwitch ? "Event" : "Task"}
        </Button>{" "}
        <Button color="secondary" onClick={props.toggleDate}>
          Cancel
        </Button>
      </ModalFooter>{" "}
    </>
  );
}

export default DateModal;
