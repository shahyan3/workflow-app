import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LayoutGrid from "../../../common/layout/LayoutGrid";
import CreateProjectForm from "../CreateProjectForm/index";
import EditProjectView from "../EditProjectView";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  content: {
    // backgroundColor: "red"
  },
}));

const ExistingProjectView = (props) => {
  const classes = useStyles();

  const { projectID, projectDescription, projectName } = props;

  const view = (
    <main className={classes.content}>
      <div>
        {/* if create project component clicked - show create project form components*/}
        {/* <CreateProjectForm /> */}
      </div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography variant="subtitle2" color="primary">
              Project
            </Typography>

            <Typography gutterBottom variant="h5" component="h2">
              {projectName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {projectDescription}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Link
              to={{
                pathname: `projects/edit/${projectID}`,
              }}
            >
              Edit or Update
            </Link>
          </Button>
        </CardActions>
      </Card>
    </main>
  );
  return <LayoutGrid view={view}></LayoutGrid>;
};

export default ExistingProjectView;
