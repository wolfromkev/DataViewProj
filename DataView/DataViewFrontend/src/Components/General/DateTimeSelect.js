import React, { useState } from "react";
import classes from "./DateTimeSelect.module.scss";
import MomentUtils from "@date-io/moment";

import lightBlue from "@material-ui/core/colors/lightBlue";
import { DateTimePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

const materialTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: lightBlue.A200,
      },
    },
    MuiPickerDTTabs: {
      tabs: {
        backgroundColor: lightBlue.A200,
      },
    },

    MuiPickersCalendarHeader: {
      switchHeader: {
        backgroundColor: lightBlue.A200,
      },
    },
    MuiPickersDay: {
      day: {
        color: lightBlue.A700,
      },
      daySelected: {
        backgroundColor: lightBlue["400"],
      },
      dayDisabled: {
        color: lightBlue["100"],
      },
      current: {
        color: lightBlue["900"],
      },
    },
    MuiPickersModal: {
      dialogRoot: {
        backgroundColor: "#1c1c1c",
      },
      dialogAction: {
        color: lightBlue["400"],
      },
    },
  },
});
function DateTimeSelect(props) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    props.selectDate(selectedDate);
  };
  return (
    <>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <ThemeProvider theme={materialTheme}>
          <DateTimePicker
            autoOk={true}
            disablePast
            allowKeyboardControl={true}
            animateYearScrolling={true}
            className={classes.dateTimePicker}
            inputVariant="standard"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </ThemeProvider>
      </MuiPickersUtilsProvider>
    </>
  );
}

export default DateTimeSelect;
