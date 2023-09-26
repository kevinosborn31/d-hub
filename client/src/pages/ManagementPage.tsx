import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the styles
import { Box, TextField } from '@mui/material';

const ManagementPage = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate: Date) => {
    setDate(newDate);
  };

  return (
    <Box>
      <DatePicker
        selected={date}
        onChange={handleDateChange}
        dateFormat="MMMM d, yyyy" // Format to display the date
        customInput={<TextField />} // Use Material-UI TextField as the input
      />
    </Box>
  );
}

export default ManagementPage;
