import React, { useState } from "react";
import { Button, ModalFooter } from "reactstrap";
import classes from "./ViewTaskModal.module.scss";
import ConfirmModal from "./ConfirmModal";
import { connect } from "react-redux";
import { DeleteTask, UpdateTask } from "../../../Redux/actions/TaskActions";
import moment from "moment";
import DateTimeSelect from "../../General/DateTimeSelect";

function ViewTaskModal(props) {
  const [DescTemp, setDescTemp] = useState(props.data.description);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString());
  const [title, setTitle] = useState(props.data.title);
  const [openUpdateConfirmModal, setOpenUpdateConfirmModal] = useState(false);
  const [openDeleteConfirmModal, setDeleteOpenConfirmModal] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const deleteHandler = () => {
    props.DeleteTask(props.data.id);
  };

  const handleDeleteModal = () => {
    setDeleteOpenConfirmModal(!openDeleteConfirmModal);
  };

  const updateHandler = () => {
    // prettier-ignore
    const submitObj = {
      "Id": props.data.id,
      "Title": title,
      "Description": DescTemp,
      "End": selectedDate.toISOString(),
    };
    props.UpdateTask(submitObj);
  };

  const handleUpdateModal = () => {
    setOpenUpdateConfirmModal(!openUpdateConfirmModal);
  };

  const handleFinish = () => {
    props.toggleEvent();
  };

  const selectDate = (date) => {
    setSelectedDate(date);
  };

  const editToggler = () => {
    setEditMode(!editMode);
  };

  return (
    <>
      {editMode ? (
        <input
          className={classes.editTitle}
          type="text"
          name="title"
          placeholder={props.data.title}
          onChange={(event) => setTitle(event.target.value)}
        />
      ) : (
        <div className={classes.header}>{props.data.title}</div>
      )}

      <>
        <div className={classes.assinged}>
          Assigned By: {props.data.assignerName}
        </div>
        <div className={classes.Description}>
          <div>
            {" "}
            <h5>ECD:</h5>
            {editMode ? (
              <DateTimeSelect
                className={classes.cleave2}
                selectDate={selectDate}
              />
            ) : (
              <div> {moment().format("MMMM Do, h:mm a")} </div>
            )}
          </div>
        </div>
        <div className={classes.Description}>
          <div>
            <h5>Description: </h5>
          </div>
          {editMode ? (
            <>
              <textarea
                name="description"
                placeholder={props.data.description}
                value={DescTemp}
                rows="1"
                cols="50"
                className={classes.descriptionTextArea}
                onChange={(event) => setDescTemp(event.target.value)}
              />
            </>
          ) : (
            <div> {props.data.description}</div>
          )}
        </div>
      </>

      <ModalFooter className={classes.footer}>
        <div className={classes.deleteButton}>
          <Button onClick={handleDeleteModal}>Delete Task</Button>
        </div>
        <div className={classes.buttonContainer}>
          {editMode ? (
            <button
              onClick={handleUpdateModal}
              className={classes.createButton}
            >
              Save Edits
            </button>
          ) : (
            <button onClick={editToggler} className={classes.createButton}>
              Edit Task
            </button>
          )}

          <Button color="secondary" onClick={props.toggleEvent}>
            Cancel
          </Button>
        </div>
      </ModalFooter>

      <ConfirmModal
        title={"Delete task?"}
        description={"Are you sure you want to delete this task?"}
        open={openDeleteConfirmModal}
        loadingType={props.loadingDelete}
        handleClose={handleDeleteModal}
        confirmHandler={deleteHandler}
        handleFinish={handleFinish}
      />
      <ConfirmModal
        title={"Update task?"}
        description={"Are you sure you want to update this task?"}
        open={openUpdateConfirmModal}
        handleClose={handleUpdateModal}
        loadingType={props.loadingUpdateTask}
        confirmHandler={updateHandler}
        handleFinish={handleFinish}
      />
    </>
  );
}
const mapStateToProps = (state) => ({
  loadingDelete: state.tasks.loadingDeleteTask,
  loadingUpdateTask: state.tasks.loadingUpdateTask,
});

const mapDispatchToProps = {
  UpdateTask,
  DeleteTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewTaskModal);
