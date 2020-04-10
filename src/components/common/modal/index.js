import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  TextField,
  Button,
} from "@material-ui/core";
import TableView from "../../pages/Sprints/Table/TableView";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

// USE REACT STATE HOOK TO RENDER EXISTING PROJECT COMPONENT TOMORROW #TODO

function getModalStyle() {
  const top = 40;
  const left = 45;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  // paper: {
  //   position: "absolute",
  //   width: "50%",
  //   backgroundColor: theme.palette.background.paper,
  //   border: "2px solid #000",
  //   boxShadow: theme.shadows[5],
  //   padding: theme.spacing(2, 4, 3),
  // },
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },

  datesWrapper: {
    display: "flex",
    justifyContent: "space-around",
  },
  dateItem: {
    margin: "0 0.5rem",
  },
  createdByStyle: {
    textAlign: "center",
  },
  btnWrapper: {
    textAlign: "right",
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    console.log("open clicke!@");
    setOpen(true);
  };

  const handleClose = () => {
    console.log("closed clicke!@");
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="contained" color="primary" onClick={handleOpen}>
        {props.btnName}
      </Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          {props.innerComponent}
          <Button onClick={handleClose} variant="contained" color="primary">
            Close
          </Button>
        </div>
      </Modal> */}
      <div>
        <Button variant="outlined" color="primary" onClick={handleOpen}>
          {props.btnName}
        </Button>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          maxWidth={"xs"}
          fullWidth={true}
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            {props.modalTitle}
          </DialogTitle>
          <DialogContent dividers>{props.innerComponent}</DialogContent>
          {props.showModalBtn ? (
            <DialogActions>
              <Button autoFocus onClick={handleClose} color="primary">
                {props.modalBtnText}
              </Button>
            </DialogActions>
          ) : (
            <br></br>
          )}
        </Dialog>
      </div>
    </div>
  );
}
