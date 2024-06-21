import React, { useState } from 'react';
import moment from "moment-jalaali";

moment.loadPersian({ usePersianDigits: true });

export default function DateNow() {

    const [currentDate, setCurrentDate] = useState(moment());
    const [monthCount, setMonthCount] = useState(0);

    const handleAddMonth = () => {
        if (monthCount < 11) {
            const newDate = moment(currentDate).add(1, 'jMonth');
            setCurrentDate(newDate);
            setMonthCount(monthCount + 1);
        } else {
            setCurrentDate(moment());
            setMonthCount(0);
        }
    };

    const handleSubtractMonth = () => {
        if (monthCount > 0) {
            const newDate = moment(currentDate).subtract(1, 'jMonth');
            setCurrentDate(newDate);
            setMonthCount(monthCount - 1);
        }
    };


    return (
        <div>
            <p>تاریخ امروز: {currentDate.format('jYYYY jMMMM jDD')}</p>
            <button onClick={handleAddMonth}>اضافه کردن یک ماه</button>
            <button onClick={handleSubtractMonth}>کم کردن یک ماه</button>
        </div>
    );
};