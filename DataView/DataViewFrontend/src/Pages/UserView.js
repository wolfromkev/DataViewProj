import React, { useState, Fragment } from "react";
import classes from "./UserView.module.scss";
import { connect } from "react-redux";
import Calendar from "../Components/UserView/Calendar";
import Tasks from "../Components/UserView/Tasks";
import UserInfo from "../Components/UserView/UserInfo";
import taskFormatter from "../Utility/taskFormatter";
import DateModal from "../Components/UserView/Modals/EventTaskSwitch/DateModal";
import EventModal from "../Components/UserView/Modals/EventModal";
import { Modal } from "reactstrap";
import ViewTaskModal from "../Components/UserView/Modals/ViewTaskModal";
import NewTaskModal from "../Components/UserView/Modals/NewTaskModal";

function UserView(props) {
  const [dateModal, setDateModal] = useState(false);
  const [eventModal, setEventModal] = useState(false);
  const [viewTaskModal, setViewTaskModal] = useState(false);
  const [newTaskModal, setNewTaskModal] = useState(false);

  const [viewTaskModalData, setViewTaskModalData] = useState({});

  const toggleDate = () => {
    setDateModal(!dateModal);
  };

  const toggleEvent = () => {
    setEventModal(!eventModal);
  };
  const toggleViewTask = () => {
    setViewTaskModal(!viewTaskModal);
  };
  const viewTaskData = (value) => {
    setViewTaskModalData(value);
    setViewTaskModal(!viewTaskModal);
  };

  const viewNewTask = (value) => {
    setNewTaskModal(!newTaskModal);
  };

  let filteredTasks = taskFormatter(props.taskData, props.userId);
  return (
    <Fragment>
      <div className={classes.gridContainer}>
        <div className={classes.calendarContainer}>
          <Calendar
            tasks={filteredTasks}
            toggleDate={toggleDate}
            toggleEvent={toggleEvent}
          />
        </div>
        <div className={classes.userInfoContainer}>
          <UserInfo />
        </div>
      </div>
      <div className={classes.toDoContainer}>
        <Tasks
          tasks={filteredTasks}
          toggleViewTask={toggleViewTask}
          viewTaskData={viewTaskData}
          viewNewTask={viewNewTask}
        />
      </div>

      <Modal isOpen={dateModal} toggle={toggleDate} className={classes.Modal}>
        <DateModal toggleDate={toggleDate} />
      </Modal>

      <Modal isOpen={eventModal} toggle={toggleEvent} className={classes.Modal}>
        <EventModal toggleEvent={toggleEvent} />
      </Modal>

      <Modal
        isOpen={viewTaskModal}
        toggle={toggleViewTask}
        className={classes.Modal}
      >
        <ViewTaskModal
          toggleEvent={toggleViewTask}
          data={viewTaskModalData}
          title={"test"}
          ecd={"test"}
          description={"descrption"}
          assigner={""}
        />
      </Modal>

      <Modal
        isOpen={newTaskModal}
        toggle={viewNewTask}
        className={classes.Modal}
      >
        <NewTaskModal toggle={viewNewTask} />
      </Modal>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  taskData: state.tasks.tasks,
  userId: state.userData.credentials.id,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UserView);
