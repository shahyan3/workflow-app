import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import LayoutGrid from "../../../common/layout/LayoutGrid";
import Button from "@material-ui/core/Button";
import SimpleModal from "../../../common/modal";
import SimpleExpansionPanel from "../../../common/expansionTab";
import ProjectListModal from "../../../common/ProjectListModal/index";
import TaskDescripionCard from "../TaskDescripionCard/index";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];

const useStyles = makeStyles({
  table: {
    minWidth: 700
  },
  AddTaskBtn: {
    margin: "1rem",
    marginRight: "auto"
  },
  sprintMenu: {
    width: "100%",
    textAlign: "right",
    padding: "0.5rem 0.5rem"
  },
  startButton: {
    backgroundColor: "green",
    color: "white"
  }
});

export default function TableView() {
  const classes = useStyles();

  const addTaskView = (
    <div>
      <ProjectListModal />
    </div>
  );

  const view = (
    <React.Fragment>
      <div className={classes.sprintMenu}>
        <SimpleModal
          btnName={"Add Tasks"}
          innerComponent={addTaskView}
        ></SimpleModal>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Task Name</StyledTableCell>
              <StyledTableCell align="center">Current Time</StyledTableCell>
              <StyledTableCell align="center">Expected Time</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
              <StyledTableCell align="center"> </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.calories}</StyledTableCell>
                <StyledTableCell align="center">{row.fat}</StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    className={classes.startButton}
                    variant="contained"
                    color="green"
                  >
                    START
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="center">
                  {/* <Button variant="contained" color="Primary">
                    View
                  </Button> */}
                  <SimpleModal
                    btnName="view"
                    innerComponent={<TaskDescripionCard />}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );

  return <LayoutGrid view={view}></LayoutGrid>;
}
