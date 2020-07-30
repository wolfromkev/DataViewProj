import React, { useState, Fragment } from "react";
import classes from "./UserView.module.scss";
import { connect } from "react-redux";
import Calendar from "../Components/UserView/Calendar";
import Tasks from "../Components/UserView/Tasks";
import UserInfo from "../Components/UserView/UserInfo";
import taskFormatter from "../Utility/taskFormatter";
import DateModal from "../Components/UserView/Modals/DataModalSwitch/DateModal";
import EventModal from "../Components/UserView/Modals/EventModal";
import { Modal } from "reactstrap";
import ViewTaskModal from "../Components/UserView/Modals/ViewTaskModal";

function UserView(props) {
  const [dateModal, setDateModal] = useState(false);
  const [eventModal, setEventModal] = useState(false);
  const [viewTaskModal, setViewTaskModal] = useState(false);
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

  let filteredTasks = taskFormatter(props.taskData[0], props.taskData[1]);
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
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  taskData: state.tasks.tasks,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UserView);
