import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function TaskDescripionCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Project Two
        </Typography>
        <Typography variant="h5" component="h2">
          Task One
        </Typography>

        <Typography variant="body2" component="p">
          <br></br>
          <Typography variant="body1">Description</Typography>
          well meaning and kindly. well meaning and kindly. well meaning and
          kindly. well meaning and kindly. well meaning and kindly. well meaning
          and kindly.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary">
          Task Complete
        </Button>
      </CardActions>
    </Card>
  );
}
