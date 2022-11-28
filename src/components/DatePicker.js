import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Box, Stack, TextField } from "@mui/material";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import React, { useState } from "react";

export default function StaticDateRangePickerDemo() {
  const [checkin, setCheckin] = useState(null);
  const [checkout, setCheckout] = useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack direction="row" spacing={3} alignItems="center">
        <DateTimePicker
          value={checkin}
          inputFormat="MM/dd/yyyy hh:mm a"
          onChange={(newValue) => {
            setCheckin(newValue);
          }}
          renderInput={(params) => (
            <React.Fragment>
              <TextField {...params} />
            </React.Fragment>
          )}
        />
        <Box sx={{ mx: 2, my: 2 }}> to </Box>
        <DateTimePicker
          value={checkout}
          inputFormat="MM/dd/yyyy hh:mm a"
          onChange={(newValue) => {
            setCheckout(newValue);
          }}
          renderInput={(params) => (
            <React.Fragment>
              <TextField {...params} />
            </React.Fragment>
          )}
        />
      </Stack>
    </LocalizationProvider>
  );
}
