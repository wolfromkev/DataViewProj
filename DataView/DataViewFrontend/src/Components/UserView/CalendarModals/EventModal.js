import React, { useState } from "react";
import { Button, ModalFooter, Tooltip } from "reactstrap";
import classes from "./EventModal.module.scss";
import CreateIcon from "@material-ui/icons/Create";
import Cleave from "cleave.js/react";

let describe = "The desc of the task is .oasdinfgoaefniaiewf";
let ECD = "The desc of the task is .oasdinfgoaefniaiewf";

function EventModal(props) {
  const [eventTask, setEventTask] = useState(true);

  const [descEdit, setDescEdit] = useState(false);
  const [newDesc, setNewDesc] = useState(describe);
  const [descEditTooltip, setDescEditTooltip] = useState(false);

  const [ecdEdit, setEcdEdit] = useState(false);
  const [newECD, setNewECD] = useState(describe);
  const [ecdEditTooltip, setEcdEditTooltip] = useState(false);

  const [creator, setCreator] = useState(true);

  const editDescToggle = () => setDescEditTooltip(!descEditTooltip);
  const editECDToggle = () => setEcdEdit(!ecdEdit);

  return (
    <>
      {" "}
      <div className={classes.header}>
        {" "}
        {eventTask ? "Event Title" : "Task Title"}
      </div>{" "}
      {eventTask ? (
        <>
          <div className={classes.timeValues}>
            <p>Start Time: 2020-07-15 12:00am </p>{" "}
            <p>End Time: 2020-07-15 12:00am </p>
          </div>
          <div className={classes.Description}>
            <h3>Description: </h3>{" "}
            asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd
          </div>
          <div className={classes.Description}>
            <h3>Invitees: </h3>{" "}
            asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd
          </div>{" "}
        </>
      ) : (
        <>
          <div className={classes.timeValues}>
            <p>
              ECD: 2020-07-15 12:00am{" "}
              <Cleave
                className={classes.cleave1}
                placeholder="Start"
                options={{
                  blocks: [4, 2, 2, 2, 2],
                  delimiters: ["/", "/", " ", ":"],
                  numericOnly: true,
                }}
              />
              {creator ? (
                <CreateIcon
                  className={classes.pencilIcon}
                  id="pencilIcon"
                  onClick={() => setNewECD(!newECD)}
                />
              ) : null}
              <Tooltip
                placement="right"
                isOpen={ecdEditTooltip}
                target="pencilIcon"
                toggle={editECDToggle}
              >
                {descEdit ? "Cancel Edit" : "Click to edit"}
              </Tooltip>
            </p>
            <p>Assigned By: Kevin Wolfrom</p>
          </div>
          <div className={classes.Description}>
            <h3>
              Description:{" "}
              {creator ? (
                <CreateIcon
                  className={classes.pencilIcon}
                  id="pencilIcon"
                  onClick={() => setDescEdit(!descEdit)}
                />
              ) : null}
              <Tooltip
                placement="right"
                isOpen={descEditTooltip}
                target="pencilIcon"
                toggle={editDescToggle}
              >
                {descEdit ? "Cancel Edit" : "Click to edit"}
              </Tooltip>
            </h3>
            {descEdit ? (
              <textarea
                rows="2"
                cols="50"
                className={classes.descriptionTextArea}
                onChange={(event) => setNewDesc(event.target.value)}
              >
                {describe}
              </textarea>
            ) : (
              <p> {describe}</p>
            )}
          </div>
        </>
      )}
      <ModalFooter className={classes.footer}>
        <Button color="primary" onClick={() => setEventTask(!eventTask)}>
          Mark Complete
        </Button>{" "}
        <Button color="secondary" onClick={props.toggleEvent}>
          Cancel
        </Button>
      </ModalFooter>{" "}
    </>
  );
}

export default EventModal;
