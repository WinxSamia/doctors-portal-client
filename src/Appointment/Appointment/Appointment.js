import React, { useState } from 'react';
import AppoinBanner from './AppoinBanner/AppoinBanner';
import AppointmentTime from './AppointmentTime/AppointmentTime';


const Appointment = () => {
    const [selectDate, setSelectDate] = useState(new Date())
    return (
        <div>
            <AppoinBanner
                selectDate={selectDate}
                setSelectDate={setSelectDate}></AppoinBanner>
            <AppointmentTime
                selectDate={selectDate}
            ></AppointmentTime>
        </div>
    );
};

export default Appointment;