import React, { useState } from 'react';
import moment from "moment-jalaali";
import { Box, Button, Stack } from '@mui/material';

moment.loadPersian({ usePersianDigits: true });

export default function DateNow() {

    const [currentDate,setCurrentDate] = useState(moment())
    const [monthCount,setMonthCount] = useState(0);
    const [finshingName,setFinshingName] = useState('')

    const handleAddMonth = ()=>{
        if(monthCount < 11){
            const newDate = moment(currentDate).add(1,'jMonth');
            setCurrentDate(newDate);
            setMonthCount(monthCount + 1);
        } else {
            setCurrentDate(moment())
            setMonthCount(0)
        }
    }

    const handleSubtractMonth = ()=>{
        if(monthCount > 0){
            const newDate = moment(currentDate).subtract(1,"jMonth");
            setCurrentDate(newDate);
            setMonthCount(monthCount - 1)
        }
    }




    return (
        <Box
            height={200}
            width={"100%"}
            my={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={4}
            p={2}
            sx={{ border: '2px solid grey' }}
        >
            تاریخ امروز: {currentDate.format('jYYYY jMMMM jDD')}
            <Button onClick={handleAddMonth} variant="outlined">Add Month</Button>
            <Button onClick={handleSubtractMonth} variant="outlined"
            disabled={monthCount === 0}
            >Remove Month</Button>
        </Box>
    );
};