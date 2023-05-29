import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Treatment from './Treatment/Treatment';
import BookingModal from '../BookingModal/BookingModal';


const AppointmentTime = ({ selectDate }) => {
    const [schedules, setSchedule] = useState([])
    const [treatments, setTreatment] = useState({})
    useEffect(() => {
        fetch('treatment.json')
            .then(res => res.json())
            .then(data => setSchedule(data))
    }, [])
    return (
        <div >
            <p className='text-center font-semibold text-teal-500 text-xl'>Your appointment time is : {format(selectDate, 'PP')} </p>
            <div className='grid grid-cols-3 grid gap-4'>
                {
                    schedules.map(schedule => <Treatment setTreatment={setTreatment} schedule={schedule} key={schedule._id}></Treatment>)
                }
            </div>
            <BookingModal selectDate={selectDate} treatments={treatments}></BookingModal>
        </div>
    );
};

export default AppointmentTime;