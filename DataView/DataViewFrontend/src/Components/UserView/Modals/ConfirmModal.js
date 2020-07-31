import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function ConfirmModal(props) {
  const [confirmPressed, setConfirmPressed] = useState(false);
  const [loading, setLoading] = useState(false);

  const confirmHandler = () => {
    setConfirmPressed(true);
    props.deleteHandler();
  };

  useEffect(() => {
    if (confirmPressed && props.loadingType) {
      setLoading(true);
    } else if (confirmPressed && !props.loadingType) {
      setLoading(false);
      props.handleClose();
    }
  }, [props.loadingType]);
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          {!loading ? (
            <Button onClick={confirmHandler} color="primary" autoFocus>
              Confirm
            </Button>
          ) : (
            <CircularProgress />
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
