import React from "react";
import Grid from "@material-ui/core/Grid";

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";

// import DateFnsUtils from "@date-io/date-fns";
import * as DateFnsUtils from "date-fns";

export default function DatePicker() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <Grid container justify="space-around">
      <KeyboardTimePicker
        margin="normal"
        id="time-picker"
        label="Time picker"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          "aria-label": "change time"
        }}
      />
    </Grid>
  );
}
