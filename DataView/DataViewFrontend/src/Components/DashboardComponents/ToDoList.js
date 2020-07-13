import React, { Fragment } from "react";
import { connect } from "react-redux";
import classes from "./ToDoList.module.css";
import classNames from "classnames";

import {
  Button,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Input,
  Table,
  UncontrolledTooltip,
} from "reactstrap";
function ToDoList() {
  return (
    <Fragment>
      <CardHeader
        className={classNames(
          "table-full-width table-responsive",
          classes.toDoListBody
        )}
      >
        <h6 className={classNames("title d-inline", classes.header)}> To-do</h6>
      </CardHeader>
      <CardBody className={classes.toDoListBody}>
        <div
          className={classNames(
            "table-full-width table-responsive",
            classes.toDoListBody
          )}
        >
          <Table>
            <tbody>
              <tr>
                <td>
                  <FormGroup check>
                    <Label check>
                      <Input defaultValue="" type="checkbox" />
                      <span className="form-check-sign">
                        <span className="check" />
                      </span>
                    </Label>
                  </FormGroup>
                </td>
                <td>
                  <p className="title">Update the Documentation</p>
                  <p className="text-muted">
                    Dwuamish Head, Seattle, WA 8:47 AM
                  </p>
                </td>
                <td className="td-actions text-right">
                  <Button
                    color="link"
                    id="tooltip636901683"
                    title=""
                    type="button"
                  >
                    <i className="tim-icons icon-pencil" />
                  </Button>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip636901683"
                    placement="right"
                  >
                    Edit Task
                  </UncontrolledTooltip>
                </td>
              </tr>
              <tr>
                <td>
                  <FormGroup check>
                    <Label check>
                      <Input defaultChecked defaultValue="" type="checkbox" />
                      <span className="form-check-sign">
                        <span className="check" />
                      </span>
                    </Label>
                  </FormGroup>
                </td>
                <td>
                  <p className="title">GDPR Compliance</p>
                  <p className="text-muted">
                    The GDPR is a regulation that requires businesses to protect
                    the personal data and privacy of Europe citizens for
                    transactions that occur within EU member states.
                  </p>
                </td>
                <td className="td-actions text-right">
                  <Button
                    color="link"
                    id="tooltip457194718"
                    title=""
                    type="button"
                  >
                    <i className="tim-icons icon-pencil" />
                  </Button>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip457194718"
                    placement="right"
                  >
                    Edit Task
                  </UncontrolledTooltip>
                </td>
              </tr>
              <tr>
                <td>
                  <FormGroup check>
                    <Label check>
                      <Input defaultValue="" type="checkbox" />
                      <span className="form-check-sign">
                        <span className="check" />
                      </span>
                    </Label>
                  </FormGroup>
                </td>
                <td>
                  <p className="title">Solve the issues</p>
                  <p className="text-muted">
                    Fifty percent of all respondents said they would be more
                    likely to shop at a company
                  </p>
                </td>
                <td className="td-actions text-right">
                  <Button
                    color="link"
                    id="tooltip362404923"
                    title=""
                    type="button"
                  >
                    <i className="tim-icons icon-pencil" />
                  </Button>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip362404923"
                    placement="right"
                  >
                    Edit Task
                  </UncontrolledTooltip>
                </td>
              </tr>
              <tr>
                <td>
                  <FormGroup check>
                    <Label check>
                      <Input defaultValue="" type="checkbox" />
                      <span className="form-check-sign">
                        <span className="check" />
                      </span>
                    </Label>
                  </FormGroup>
                </td>
                <td>
                  <p className="title">Release v2.0.0</p>
                  <p className="text-muted">
                    Ra Ave SW, Seattle, WA 98116, SUA 11:19 AM
                  </p>
                </td>
                <td className="td-actions text-right">
                  <Button
                    color="link"
                    id="tooltip818217463"
                    title=""
                    type="button"
                  >
                    <i className="tim-icons icon-pencil" />
                  </Button>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip818217463"
                    placement="right"
                  >
                    Edit Task
                  </UncontrolledTooltip>
                </td>
              </tr>
              <tr>
                <td>
                  <FormGroup check>
                    <Label check>
                      <Input defaultValue="" type="checkbox" />
                      <span className="form-check-sign">
                        <span className="check" />
                      </span>
                    </Label>
                  </FormGroup>
                </td>
                <td>
                  <p className="title">Export the processed files</p>
                  <p className="text-muted">
                    The report also shows that consumers will not easily forgive
                    a company once a breach exposing their personal data occurs.
                  </p>
                </td>
                <td className="td-actions text-right">
                  <Button
                    color="link"
                    id="tooltip831835125"
                    title=""
                    type="button"
                  >
                    <i className="tim-icons icon-pencil" />
                  </Button>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip831835125"
                    placement="right"
                  >
                    Edit Task
                  </UncontrolledTooltip>
                </td>
              </tr>
              <tr>
                <td>
                  <FormGroup check>
                    <Label check>
                      <Input defaultValue="" type="checkbox" />
                      <span className="form-check-sign">
                        <span className="check" />
                      </span>
                    </Label>
                  </FormGroup>
                </td>
                <td>
                  <p className="title">Arival at export process</p>
                  <p className="text-muted">
                    Capitol Hill, Seattle, WA 12:34 AM
                  </p>
                </td>
                <td className="td-actions text-right">
                  <Button
                    color="link"
                    id="tooltip217595172"
                    title=""
                    type="button"
                  >
                    <i className="tim-icons icon-pencil" />
                  </Button>
                  <UncontrolledTooltip
                    delay={0}
                    target="tooltip217595172"
                    placement="right"
                  >
                    Edit Task
                  </UncontrolledTooltip>
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
