import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { List, ListItem } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  li: {
    padding: "1.5 1rem",
    margin: "0.5rem",
    backgroundColor: "#f8f8f8",
    width: "300px"
  }
}));

var tasks = ["Taske 1", "Task 2", "Task 3", "Task 4", "Task 5"];

export default function DisplayTasksModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button type="button" onClick={handleOpen}>
        <OpenInNewIcon>ALL TASKS</OpenInNewIcon>
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <p id="transition-modal-description">ALL TASKS </p>
            <List>
              {tasks.map(el => (
                <ListItem className={classes.li}>
                  <Typography variant="body2">{el}</Typography>{" "}
                </ListItem>
              ))}
            </List>
            <Button variant="contained" color="primary">
              Add
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
