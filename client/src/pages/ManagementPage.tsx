import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
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
        dateFormat="MMMM d, yyyy"
        customInput={<TextField />} 
      />
    </Box>
  );
}

export default ManagementPage;
