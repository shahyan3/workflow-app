import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  TextField,
  Button
} from "@material-ui/core";

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
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: "50%",
    // height: "82%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },

  datesWrapper: {
    display: "flex",
    justifyContent: "space-around"
  },
  dateItem: {
    margin: "0 0.5rem"
  },
  createdByStyle: {
    textAlign: "center"
  },
  btnWrapper: {
    textAlign: "right"
  }
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
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

          {/* <div>
            <h3>START A NEW PROJECT</h3>
            <hr></hr>
            <FormControl classes={{ root: classes.formWrapper }}>
              <InputLabel htmlFor="my-input">Project Name</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" />
              <br></br>
              <TextField
                id="filled-multiline-static"
                label="Description"
                multiline
                rows="4"
                defaultValue=""
                variant="filled"
              />
              <br />
              <div className={classes.datesWrapper}>
                <TextField
                  id="date"
                  label="Start"
                  type="date"
                  defaultValue="2017-05-24"
                  className={classes.dateItem}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <TextField
                  id="date"
                  label="End"
                  type="date"
                  defaultValue="2017-05-24"
                  className={classes.dateItem}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </div>
              <br></br>
              <br></br>
              <FormHelperText
                id="my-helper-text"
                className={classes.createdByStyle}
              >
                Created By <span>Shahyan Hasan</span>
              </FormHelperText>
            </FormControl>{" "}
            <br /> <br />
            <div className={classes.btnWrapper}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => alert("created!")}
              >
                CREATE PROJECT
              </Button>
            </div>
          </div> */}
        </div>
      </Modal>
    </div>
  );
}
