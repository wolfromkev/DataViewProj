import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { CompleteTask } from "../../Redux/actions/TaskActions";
import classes from "./Tasks.module.scss";
import TaskList from "./TaskComponents/TaskList";

import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import { Tooltip, CardBody } from "reactstrap";

function Tasks(props) {
  const [ttComplete, setTTComplete] = useState(false);
  const [ttAdd, setTtAdd] = useState(false);
  const [itemsToComplete, setItemsToComplete] = useState([]);

  const viewTaskModalData = (value) => {
    props.viewTaskData(value);
  };

  const viewNewTask = (value) => {
    props.viewNewTask(value);
  };

  const completeItemHandler = (value) => {
    const tempItems = [...itemsToComplete];
    tempItems.push(value);
    setItemsToComplete(tempItems);
  };

  const submitComplete = () => {
    setTTComplete(false);
    if (itemsToComplete.length > 0) {
      let obj = [];
      for (let i = 0; i < itemsToComplete.length; i++) {
        // prettier-ignore
        obj.push({"taskId":itemsToComplete[i].id,"status":true})
      }
      props.CompleteTask(obj);
    }
  };

  return (
    <Fragment>
      <span className={classes.buttonRow}>
        <div className={classes.buttonContainer}>
          {props.loadingCompleteTask ? (
            <CircularProgress color="secondary" />
          ) : (
            <>
              <Button
                id="ttComplete"
                color="secondary"
                variant="contained"
                className={classes.completeItems}
                onClick={submitComplete}
              >
                Set Complete
              </Button>
            </>
          )}
        </div>
        <div className={classes.buttonContainer}>
          <Button
            id="ttAdd"
            variant="contained"
            className={classes.addItems}
            onClick={viewNewTask}
          >
            New Task
          </Button>
        </div>

        <Tooltip
          placement="top"
          isOpen={ttComplete}
          target="ttComplete"
          toggle={() => setTTComplete(!ttComplete)}
        >
          Set Tasks Complete
        </Tooltip>
        <Tooltip
          placement="top"
          isOpen={ttAdd}
          target="ttAdd"
          toggle={() => setTtAdd(!ttAdd)}
        >
          Create a new task
        </Tooltip>
      </span>
      <CardBody className={classes.toDoListBody}>
        <div className={classes.toDoListContainer}>
          <TaskList
            title="Assigned Tasks"
            tasks={props.tasks.assignedTasks}
            toggleViewTask={props.toggleViewTask}
            viewTaskModalData={viewTaskModalData}
            completeItemHandler={completeItemHandler}
          />
          <TaskList
            title="Personal Tasks"
            tasks={props.tasks.personalTasks}
            toggleViewTask={props.toggleViewTask}
            viewTaskModalData={viewTaskModalData}
            completeItemHandler={completeItemHandler}
          />
          <TaskList
            title="Outgoing Tasks"
            tasks={props.tasks.outgoingTasks}
            outgoing={true}
            toggleViewTask={props.toggleViewTask}
            viewTaskModalData={viewTaskModalData}
            completeItemHandler={completeItemHandler}
          />
        </div>
      </CardBody>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  loadingCompleteTask: state.tasks.loadingCompleteTask,
});

const mapDispatchToProps = {
  CompleteTask,
};
export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
