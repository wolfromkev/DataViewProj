import React, { useState, Fragment, useEffect } from "react";
import { connect } from "react-redux";
import classes from "./TaskList.module.scss";
import { Tooltip } from "reactstrap";
import ConfirmModal from "../Modals/ConfirmModal";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import DeleteIcon from "@material-ui/icons/Delete";
import LoopIcon from "@material-ui/icons/Loop";
import { CompleteTask, DeleteTask } from "../../../Redux/actions/TaskActions";

function TaskList(props) {
  const [checked, setChecked] = useState([]);
  const [detailsTT, setDetailsTT] = useState(false);
  const [finishedTT, setFinishedTT] = useState(false);
  const [redoTT, setRedoTT] = useState(false);
  const [checkTT, setCheckTT] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [activeTask, setActiveTask] = useState();

  const handleClose = () => {
    setOpenConfirmModal(!openConfirmModal);
  };

  const handleClickOpen = (value) => {
    setActiveTask(value);
    setOpenConfirmModal(!openConfirmModal);
  };

  const deleteHandler = () => {
    props.DeleteTask(activeTask.id);
  };

  const unComplete = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex !== -1) {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
    // prettier-ignore
    let obj = [{"taskId":value.id,"status":false}, {"taskId":21,"status":false}]
    props.CompleteTask(obj);
  };

  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
    props.completeItemHandler(value);
  };

  let completedTasks = props.tasks.filter((a) => a.completed === true);
  let notFinishedTasks = props.tasks.filter((a) => a.completed === false);

  return (
    <Fragment>
      <div className={classes.taskContainer}>
        <h3 className={classes.title}>{props.title}</h3>
        <List className={classes.root}>
          {notFinishedTasks.map((value) => {
            const labelId = `checkbox-list-label-${value}`;
            return (
              <>
                <ListItem
                  key={value}
                  role={undefined}
                  dense
                  button
                  onClick={() => handleToggle(value)}
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(value) !== -1}
                      onClick={() => handleToggle(value)}
                      tabIndex={-1}
                      color="secondary"
                      id="checkTT"
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>

                  <ListItemText id={labelId}>
                    <div className={classes.titleText}>{value.title}</div>
                    <div className={classes.descText}>
                      {" "}
                      ECD: {value.end.slice(0, 10)}
                    </div>
                  </ListItemText>
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      id="detailsIcon"
                      aria-label="comments"
                      onClick={() => props.viewTaskModalData(value)}
                    >
                      <ExpandLessIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </>
            );
          })}
          {completedTasks.map((value) => {
            return (
              <>
                <ListItem key={value} role={undefined} dense button>
                  <ListItemIcon>
                    <LoopIcon
                      edge="start"
                      id="redoTT"
                      onClick={() => unComplete(value)}
                    />
                  </ListItemIcon>
                  <ListItemText>
                    <div className={classes.compText}>{value.title}</div>
                    <div className={classes.compText}>
                      ECD: {value.end.slice(0, 10)}
                    </div>
                  </ListItemText>

                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      id="finished"
                      aria-label="comments"
                      onClick={() => handleClickOpen(value)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </>
            );
          })}
        </List>
        {notFinishedTasks.length > 0 ? (
          <>
            <Tooltip
              placement="top"
              isOpen={detailsTT}
              target="detailsIcon"
              toggle={() => setDetailsTT(!detailsTT)}
            >
              See more details
            </Tooltip>
            <Tooltip
              placement="top"
              isOpen={checkTT}
              target="checkTT"
              toggle={() => setCheckTT(!checkTT)}
            >
              Mark Complete
            </Tooltip>
          </>
        ) : null}

        {completedTasks.length > 0 ? (
          <>
            <Tooltip
              placement="top"
              isOpen={finishedTT}
              target="finished"
              toggle={() => setFinishedTT(!finishedTT)}
            >
              Delete
            </Tooltip>
            <Tooltip
              placement="top"
              isOpen={redoTT}
              target="redoTT"
              toggle={() => setRedoTT(!redoTT)}
            >
              Un-complete
            </Tooltip>
          </>
        ) : null}
      </div>
      <ConfirmModal
        title={"Delete task?"}
        description={"Are you sure you want to delete this task?"}
        open={openConfirmModal}
        handleClose={handleClose}
        loadingType={props.loadingDelete}
        confirmHandler={deleteHandler}
      />
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  loadingDelete: state.tasks.loadingDeleteTask,
});

const mapDispatchToProps = {
  CompleteTask,
  DeleteTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
