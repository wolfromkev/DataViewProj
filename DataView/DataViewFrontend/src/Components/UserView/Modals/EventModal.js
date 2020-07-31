import React, { useState } from "react";
import { Button, ModalFooter } from "reactstrap";
import classes from "./EventModal.module.scss";
import CreateIcon from "@material-ui/icons/Create";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import Cleave from "cleave.js/react";
import { useFormik } from "formik";
import * as yup from "yup";

let describe = "The desc of the task is .oasdinfgoaefniaiewf";
let ECD = "2020-07-15 12:00am";

function EventModal(props) {
  const [eventTask, setEventTask] = useState(true);

  const [DescTemp, setDescTemp] = useState();
  const [descEdit, setDescEdit] = useState(false);
  const [newDesc, setNewDesc] = useState(describe);

  const [ecdTemp, setEcdTemp] = useState();
  const [ecdEdit, setEcdEdit] = useState(false);
  const [newECD, setNewECD] = useState(ECD);

  const [creator] = useState(true);

  const formik = useFormik({
    initialValues: {
      description: "",
      ecd: "",
    },
    validationSchema: yup.object().shape({
      description: yup.string().required(),
      ecd: yup.string().min(16).required(),
    }),

    onSubmit: () => {
      console.log(formik.values);
      props.toggleDate();
    },
  });

  const saveECDChange = () => {
    setNewECD(ecdTemp);
    setEcdEdit(!ecdEdit);
  };

  const saveDescChange = () => {
    setNewDesc(DescTemp);
    setDescEdit(!descEdit);
  };

  return (
    <>
      <div className={classes.header}>
        {eventTask ? "Event Title" : "Task Title"}
      </div>{" "}
      {eventTask ? (
        <>
          <div className={classes.Description}>
            <div className={classes.taskValues}>
              <h3>Start Time: </h3> 2020-07-15 12:00am
            </div>
          </div>
          <div className={classes.Description}>
            <div className={classes.taskValues}>
              <h3>End Time: </h3> 2020-07-15 12:00am
            </div>
          </div>
          <div className={classes.Description}>
            <div className={classes.taskValues}>
              <h3>Description: </h3> asdasdasdasdasdas
            </div>
          </div>
          <div className={classes.Description}>
            <div className={classes.taskValues}>
              <h3>Invitees: </h3> asdasdasdasdasdas
            </div>
          </div>{" "}
        </>
      ) : (
        <>
          <div className={classes.assinged}>Assigned By: Kevin Wolfrom</div>
          <div className={classes.Description}>
            <div>
              <h3>ECD: </h3>
              {creator ? (
                ecdEdit ? (
                  <div className={classes.ecdEditToggle}>
                    <ClearIcon onClick={() => setEcdEdit(!ecdEdit)} />{" "}
                    <CheckIcon onClick={() => saveECDChange()} />
                  </div>
                ) : (
                  <>
                    <CreateIcon
                      className={classes.ecdEditToggle}
                      onClick={() => setEcdEdit(!ecdEdit)}
                    />
                  </>
                )
              ) : null}
              {ecdEdit ? (
                <Cleave
                  name="ecd"
                  {...formik.getFieldProps("ecd")}
                  className={classes.ecdTextArea}
                  placeholder={newECD}
                  onChange={(event) => setEcdTemp(event.target.value)}
                  options={{
                    blocks: [4, 2, 2, 2, 2],
                    delimiters: ["/", "/", " ", ":"],
                    numericOnly: true,
                  }}
                />
              ) : (
                <div className={classes.taskValues}> {newECD} </div>
              )}
            </div>
          </div>
          <div className={classes.Description}>
            <div>
              <h3>Description: </h3>
              {creator ? (
                descEdit ? (
                  <div className={classes.descEditToggle}>
                    <ClearIcon onClick={() => setDescEdit(!descEdit)} />
                    <CheckIcon onClick={() => saveDescChange()} />
                  </div>
                ) : (
                  <>
                    <CreateIcon
                      className={classes.descEditToggle}
                      onClick={() => setDescEdit(!descEdit)}
                    />
                  </>
                )
              ) : null}
            </div>
            {descEdit ? (
              <textarea
                name="description"
                {...formik.getFieldProps("description")}
                placeholder={newDesc}
                rows="1"
                cols="50"
                className={classes.descriptionTextArea}
                onChange={(event) => setDescTemp(event.target.value)}
              />
            ) : (
              <div className={classes.taskValues}> {newDesc}</div>
            )}
          </div>
        </>
      )}
      <ModalFooter className={classes.footer}>
        <Button color="primary" onClick={() => setEventTask(!eventTask)}>
          Mark Complete
        </Button>
        <Button color="secondary" onClick={props.toggleEvent}>
          Cancel
        </Button>
      </ModalFooter>
    </>
  );
}

export default EventModal;
