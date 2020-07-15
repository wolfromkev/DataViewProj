import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import classes from "./ToDoList.module.css";
import classNames from "classnames";

import {
  Button,
  Tooltip,
  CardBody,
  Label,
  FormGroup,
  Input,
  Table,
  UncontrolledTooltip,
} from "reactstrap";

function ToDoList() {
  const [ttComplete, setTtComplete] = useState(false);
  const [ttAdd, setTtAdd] = useState(false);
  const [ttCheck, setTtCheck] = useState(false);
  const [ttEdit, setTtEdit] = useState(false);

  return (
    <Fragment>
      <div className={classes.toDoListHeader}>
        <h6 className={classes.header}> Tasks</h6>
        <span className={classes.buttonContainer}>
          <button id="ttComplete" className={classes.completeItems}>
            comp
          </button>

          <button id="ttAdd" className={classes.addItems}>
            Add
          </button>

          <Tooltip
            placement="top"
            isOpen={ttComplete}
            target="ttComplete"
            toggle={() => setTtComplete(!ttComplete)}
          >
            {" "}
            Mark Items Complete{" "}
          </Tooltip>

          <Tooltip
            placement="top"
            isOpen={ttAdd}
            target="ttAdd"
            toggle={() => setTtAdd(!ttAdd)}
          >
            Create a new Item
          </Tooltip>
        </span>
      </div>
      <CardBody className={classes.toDoListBody}>
        <div
          className={classNames(
            "table-full-width table-responsive",
            classes.toDoListBody
          )}
        >
          <Table className={classes.tableBody}>
            <tbody className={classes.tableBody2}>
              <tr className={classes.row}>
                <td className={classes.checkBox}>
                  <div className={classes.checkboxHolder}>
                    <input id="ttCheck" type="checkbox" />
                    <Tooltip
                      placement="top"
                      isOpen={ttCheck}
                      target="ttCheck"
                      toggle={() => setTtCheck(!ttCheck)}
                    >
                      Mark Complete
                    </Tooltip>
                  </div>
                </td>
                <td className={classes.descriptionBox}>
                  <p className="title">Update the Documentation</p>
                  <p className="text-muted">
                    Assigned by:
                    <br />
                    ECD:{" "}
                  </p>
                </td>
                <td className={classes.editBox}>
                  <a id="ttEdit"> Edit Item</a>
                  <Tooltip
                    placement="top"
                    isOpen={ttEdit}
                    target="ttEdit"
                    toggle={() => setTtEdit(!ttEdit)}
                  >
                    Edit Item
                  </Tooltip>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
