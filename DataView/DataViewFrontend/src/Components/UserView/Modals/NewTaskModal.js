import React, { useState } from "react";
import { connect } from "react-redux";
import classes from "./NewTaskModal.module.scss";
import uniqid from "uniqid";
import { useFormik } from "formik";
import * as yup from "yup";
import moment from "moment";
import SearchPopover from "./searchPopover";
import { ModalBody } from "reactstrap";
import Popper from "@material-ui/core/Popper";
import DateTimeSelect from "../../General/DateTimeSelect";
import { CreateTasks } from "../../../Redux/actions/TaskActions";
import {
  clearSearchedUsers,
  searchUserData,
} from "../../../Redux/actions/miscDataActions";

function NewTaskModal(props) {
  const [userSearch, setUserSearch] = useState("");
  const [popperObj, setPopperObj] = useState(null);
  const [ECD, setECD] = useState();
  const [assignees, setAssignees] = useState([]);
  const [selfCheck, setSelfCheck] = useState(false);

  const clearSearch = () => {
    setUserSearch("");
    props.clearSearchedUsers();
  };

  const selfAssign = () => {
    setSelfCheck(!selfCheck);
    let tempAssignees = [...assignees];
    let index = tempAssignees.findIndex((a) => a.id === props.userData.id);
    if (index !== -1) {
      tempAssignees.splice(index, 1);
    } else {
      let obj = {
        id: props.userData.id,
        fullName: props.userData.fullName,
      };
      tempAssignees.push(obj);
    }

    setAssignees(tempAssignees);
  };

  function addUser(user) {
    let tempAssignees = [...assignees];
    tempAssignees.push(user);
    setAssignees(tempAssignees);

    let index = tempAssignees.findIndex((a) => a.id === props.userData.id);
    if (index !== -1) {
      setSelfCheck(true);
    }

    clearSearch();
  }

  const handleChange = (event) => {
    setUserSearch(event.target.value);
    props.searchUserData(userSearch);
    setPopperObj(event.currentTarget);
  };

  const selectDate = (date) => {
    setECD(date);
  };

  const deleteAssignee = (user) => {
    if (user.id === props.userData.id) {
      setSelfCheck(false);
    }
    let tempAssignees = [...assignees];
    let index = tempAssignees.findIndex((a) => a.id === user.id);
    tempAssignees.splice(index, 1);
    setAssignees(tempAssignees);
  };

  const open = Boolean(popperObj);
  const id = open ? "simple-popper" : undefined;

  let assignBubbles = assignees.map((user) => {
    return (
      <div
        key={uniqid()}
        className={classes.assignBubbleTask}
        onClick={() => deleteAssignee(user)}
      >
        {user.fullName}
      </div>
    );
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: yup.object().shape({
      title: yup.string().required(),
      description: yup.string().required(),
    }),

    onSubmit: (values) => {
      let assingeeIds = [];
      for (let i = 0; i < assignees.length; i++) {
        assingeeIds.push(assignees[i].id);
      }
      // prettier-ignore
      const submitObj = {
        "Title": values.title,
        "AssignerId": props.userData.id,
        "AssignerName": props.userData.fullName,
        "Description": values.description,
        "Start": moment().format(),
        "End": ECD,
        "Users": assingeeIds,
      };
      props.CreateTasks(submitObj, props.userData.id);
    },
  });
  return (
    <>
      <ModalBody className={classes.modalBody}>
        <h3 className={classes.eventTaskHeader}>New Task</h3>
        <hr />
        <form onSubmit={formik.handleSubmit}>
          <div className={classes.header}>
            <div className={classes.headerInputContainer}>
              <input
                type="text"
                name="title"
                placeholder="Title"
                {...formik.getFieldProps("title")}
              />
            </div>
          </div>
          <div className={classes.descriptionInputContainer}>
            <textarea
              name="description"
              {...formik.getFieldProps("description")}
              rows="1"
              cols="50"
              placeholder="Description"
            />{" "}
          </div>
          <div className={classes.dateRangeContainer}>
            <input
              name="invitees"
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
              <SearchPopover userSearch={userSearch} addUser={addUser} />
            </Popper>
            <DateTimeSelect
              className={classes.cleave2}
              selectDate={selectDate}
            />
          </div>
          <div className={classes.checkboxBox}>
            <div className={classes.checkbox}>
              <input
                type="checkbox"
                checked={selfCheck}
                onChange={selfAssign}
              />
              <span className={classes.labelTextCheckbox}> Assign to self</span>
            </div>
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
                  A expected completion date (ECD) date and time is required.
                </p>
              ) : null}
              {formik.touched.invitees && formik.errors.invitees ? (
                <p className={classes.errorMessage}>
                  You must include at least one invitee
                </p>
              ) : null}
            </div>
            <div className={classes.footerButtonBox}>
              <button className={classes.createButton} type="submit">
                Create
              </button>{" "}
              <button className={classes.cancelButton} onClick={props.toggle}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      </ModalBody>
    </>
  );
}
const mapStateToProps = (state) => ({ userData: state.userData.credentials });

const mapDispatchToProps = {
  CreateTasks,
  searchUserData,
  clearSearchedUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTaskModal);
