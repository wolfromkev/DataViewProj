import React, { useState } from "react";
import Cleave from "cleave.js/react";
import classes from "./DataModal.module.scss";
import Popper from "@material-ui/core/Popper";
import SearchModal from "../searchPopover";
import uniqid from "uniqid";
import { Button, ModalFooter } from "reactstrap";
import { useFormik } from "formik";
import * as yup from "yup";

function Event(props) {
  const [userSearch, setUserSearch] = useState("");
  const [popperObj, setPopperObj] = useState(null);
  const [assignees, setAssignees] = useState([
    { name: "kevin" },
    { name: "kevin" },
    { name: "kevin" },
    { name: "kevin" },
    { name: "kevin" },
    { name: "kevin" },
    { name: "kevin" },
    { name: "kevin" },
    { name: "kevin" },
    { name: "kevin" },
    { name: "kevin" },
    { name: "kevin" },
    { name: "kevin" },
    { name: "kevin" },
    { name: "kevin" },
    { name: "kevin" },
    { name: "kevin" },
    { name: "kevin" },
  ]);

  const clearSearch = () => {
    setUserSearch("");
  };

  const handleChange = (event) => {
    setUserSearch(event.target.value);
    setPopperObj(event.currentTarget);
  };

  const removePerson = (name) => {
    console.log(name);
  };

  function addUser(user) {
    setAssignees([...assignees, user]);
  }
  const open = Boolean(popperObj);
  const id = open ? "simple-popper" : undefined;

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      start: "",
      end: "",
      invitees: assignees,
    },
    validationSchema: yup.object().shape({
      title: yup.string().required(),
      description: yup.string().required(),
      invitees: yup.array().required().min(1),
      start: yup.string().required().min(16),
      end: yup.string().required().min(16),
    }),

    onSubmit: () => {
      console.log(formik.values);
      props.toggleDate();
    },
  });

  let assignBubbles = assignees.map((user) => {
    return (
      <div
        key={uniqid()}
        className={classes.assignBubble}
        onClick={() => {
          removePerson(user.name);
        }}
      >
        {" "}
        {user.name}{" "}
      </div>
    );
  });
  return (
    <>
      <div className={classes.header}>
        <div className={classes.headerInputContainer}>
          <input
            name="title"
            type="text"
            placeholder="Title"
            {...formik.getFieldProps("title")}
          />
        </div>
        <div className={classes.headerButtonContainer}>
          <button className={classes.headerTaskButtonActive}>Event</button>
          <button
            type="button"
            className={classes.headerTaskButton}
            onClick={() => props.eventTaskSwitch()}
          >
            Task
          </button>
        </div>
      </div>
      <div className={classes.descriptionInputContainer}>
        <textarea
          name="description"
          {...formik.getFieldProps("description")}
          rows="2"
          cols="50"
          placeholder="Description"
        />
      </div>
      <div className={classes.dateRangeContainer}>
        <Cleave
          name="start"
          {...formik.getFieldProps("start")}
          className={classes.cleave1}
          placeholder="Start"
          onChange={formik.handleChange}
          value={formik.values.start}
          options={{
            blocks: [4, 2, 2, 2, 2],
            delimiters: ["/", "/", " ", ":"],
            numericOnly: true,
          }}
        />

        <Cleave
          name="end"
          {...formik.getFieldProps("end")}
          className={classes.cleave2}
          placeholder="End"
          options={{
            blocks: [4, 2, 2, 2, 2],
            delimiters: ["-", "-", " ", ":", ":"],
            numericOnly: true,
          }}
        />
      </div>{" "}
      <div className={classes.checkboxBox}>
        <p className={classes.labelText}> YYYY-MM-DD HH:MM </p>
      </div>
      <div className={classes.dateRangeContainerEvent}>
        <input
          {...formik.getFieldProps("invitees")}
          name="invitees"
          aria-describedby={id}
          type="text"
          value={userSearch}
          placeholder="Invitees:"
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
          <SearchModal
            userSearch={userSearch}
            clearSearch={clearSearch}
            addUser={addUser}
          />
        </Popper>
      </div>
      <div className={classes.assigneeBox}>{assignBubbles}</div>
      <div className={classes.footerBox}>
        <div className={classes.errorBox}>
          {formik.touched.title && formik.errors.title ? (
            <p className={classes.errorMessage}>Event title is required.</p>
          ) : null}

          {formik.touched.description && formik.errors.description ? (
            <p className={classes.errorMessage}> Description is required</p>
          ) : null}

          {formik.touched.start && formik.errors.start ? (
            <p className={classes.errorMessage}>
              {" "}
              A start date and time is required.{" "}
            </p>
          ) : null}

          {formik.touched.end && formik.errors.end ? (
            <p className={classes.errorMessage}>
              An end date and time is required.
            </p>
          ) : null}

          {formik.touched.invitees && formik.errors.invitees ? (
            <p className={classes.errorMessage}>
              You must include at least one invitee
            </p>
          ) : null}
        </div>
        <div className={classes.footerButtonBox}>
          <button className={classes.createButton} onClick={formik.submitForm}>
            Create
          </button>{" "}
          <button className={classes.cancelButton} onClick={props.toggleDate}>
            Cancel
          </button>
        </div>
      </div>{" "}
    </>
  );
}

export default Event;
