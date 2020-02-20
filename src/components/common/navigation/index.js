import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ProfileDisplay from "./ProfileDisplay";

import DashboardIcon from "@material-ui/icons/Dashboard";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import TimelineIcon from "@material-ui/icons/Timeline";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";

// custom google font

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  profileDisplayWrapper: {
    marginTop: "20px"
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    backgroundColor: "white",
    color: "grey"
  },
  drawerPaper: {
    width: drawerWidth
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  topMenuWrapper: {
    marginTop: "70px",
    fontFamily: '"Montserrat", Arial, Helvetica, sans-serif'
  },
  bottomMenuWrapper: {
    marginTop: "90px"
  },
  listItemText: {
    "& span": {
      fontSize: "13px", //Insert your required size,
      fontFamily: "Montserrat, sans-serif",
      fontWeight: "bolder"
    }
  }
}));

function NavBar(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <div>
      <div className={classes.profileDisplayWrapper}>
        <ProfileDisplay />
      </div>
      <List className={classes.topMenuWrapper}>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon fontSize={"small"} />
          </ListItemIcon>
          <ListItemText className={classes.listItemText} primary={"OVERVIEW"} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <OfflineBoltIcon fontSize={"small"} />
          </ListItemIcon>
          <ListItemText className={classes.listItemText} primary={"SPRINTS"} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ChromeReaderModeIcon fontSize={"small"} />
          </ListItemIcon>
          <ListItemText className={classes.listItemText} primary={"PROJECTS"} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <TimelineIcon fontSize={"small"} />
          </ListItemIcon>
          <ListItemText
            className={classes.listItemText}
            primary={"ANALYTICS"}
          />
        </ListItem>
      </List>
      <List className={classes.bottomMenuWrapper}>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <ExitToAppIcon fontSize={"small"} color="primary" />
          </ListItemIcon>
          <ListItemText className={classes.listItemText} primary={"SIGN OUT"} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </React.Fragment>
  );
}

NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.object
};

export default NavBar;
