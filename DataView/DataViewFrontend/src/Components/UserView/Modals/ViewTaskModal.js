import React, { useState } from "react";
import { Button, ModalFooter } from "reactstrap";
import classes from "./ViewTaskModal.module.scss";
import Cleave from "cleave.js/react";
import { useFormik } from "formik";
import * as yup from "yup";
import ConfirmModal from "./ConfirmModal";
import MomentUtils from "@date-io/moment";

import lightBlue from "@material-ui/core/colors/lightBlue";
import { DateTimePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

const materialTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: lightBlue.A200,
      },
    },
    MuiPickerDTTabs: {
      tabs: {
        backgroundColor: lightBlue.A200,
      },
    },

    MuiPickersCalendarHeader: {
      switchHeader: {
        backgroundColor: lightBlue.A200,
      },
    },
    MuiPickersDay: {
      day: {
        color: lightBlue.A700,
      },
      daySelected: {
        backgroundColor: lightBlue["400"],
      },
      dayDisabled: {
        color: lightBlue["100"],
      },
      current: {
        color: lightBlue["900"],
      },
    },
    MuiPickersModal: {
      dialogRoot: {
        backgroundColor: "#1c1c1c",
      },
      dialogAction: {
        color: lightBlue["400"],
      },
    },
  },
});
let ECD = "2020-07-15 12:00am";

function ViewTaskModal(props) {
  const [DescTemp, setDescTemp] = useState();
  const [newDesc, setNewDesc] = useState(props.data.description);

  const [ecdTemp, setEcdTemp] = useState();
  const [newECD, setNewECD] = useState(ECD); //Set this to props.data.end

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const formik = useFormik({
    initialValues: {
      description: "",
      ecd: "",
    },
    validationSchema: yup.object().shape({
      description: yup.string().required("Required"),
      ecd: yup.string().min(16).required(),
    }),

    onSubmit: () => {
      console.log(formik.values);
      props.toggleDate();
    },
  });

  const handleClose = () => {
    setOpenConfirmModal(!openConfirmModal);
  };

  const handleClickOpen = () => {
    setOpenConfirmModal(!openConfirmModal);
  };

  const confirmHandler = () => {
    console.log(props.data);
  };

  const editToggler = () => {
    setEditMode(!editMode);
  };
  console.log(selectedDate.toISOString());
  return (
    <>
      <div className={classes.header}>{props.data.title}</div>{" "}
      <>
        <div className={classes.assinged}>
          Assigned By: {props.data.assignerName}
        </div>
        <div className={classes.Description}>
          <div>
            {" "}
            <h5>ECD:</h5>
            {editMode ? (
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <ThemeProvider theme={materialTheme}>
                  <DateTimePicker
                    autoOk={true}
                    disablePast
                    allowKeyboardControl={true}
                    animateYearScrolling={true}
                    className={classes.dateTimePicker}
                    inputVariant="standard"
                    value={selectedDate}
                    onChange={handleDateChange}
                  />
                </ThemeProvider>
              </MuiPickersUtilsProvider>
            ) : (
              <div> {newECD} </div>
            )}
          </div>
        </div>
        <div className={classes.Description}>
          <div>
            <h5>Description: </h5>
          </div>
          {editMode ? (
            <textarea
              name="description"
              {...formik.getFieldProps("description")}
              placeholder={newDesc}
              value={DescTemp}
              rows="1"
              cols="50"
              className={classes.descriptionTextArea}
              onChange={(event) => setDescTemp(event.target.value)}
            />
          ) : (
            <div> {newDesc}</div>
          )}
        </div>
      </>
      <ModalFooter className={classes.footer}>
        <div className={classes.deleteButton}>
          <Button onClick={handleClickOpen}>Delete Task</Button>
        </div>
        <div className={classes.buttonContainer}>
          <Button color="primary" onClick={editToggler}>
            {editMode ? "Save Changes" : "Edit Task"}
          </Button>
          <Button color="secondary" onClick={props.toggleEvent}>
            Cancel
          </Button>
        </div>
      </ModalFooter>
      <ConfirmModal
        title={"Delete task?"}
        description={"Are you sure you want to delete this task?"}
        open={openConfirmModal}
        handleClose={handleClose}
        confirmHandler={confirmHandler}
      />
    </>
  );
}

export default ViewTaskModal;
