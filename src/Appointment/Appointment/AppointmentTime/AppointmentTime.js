import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Treatment from './Treatment/Treatment';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from 'react-query';


const AppointmentTime = ({ selectDate }) => {
    // const [schedules, setSchedule] = useState([])
    const [treatments, setTreatment] = useState(null)


    const { data: schedules = [] } = useQuery({
        queryKey: ['schedules'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointment');
            const data = await res.json();
            return data;
        }
    })


    return (
        <div >
            <p className='text-center font-semibold text-teal-500 text-xl'>Your appointment time is : {format(selectDate, 'PP')} </p>
            <div className='grid grid-cols-3 grid gap-4'>
                {
                    schedules.map(schedule => <Treatment setTreatment={setTreatment} schedule={schedule} key={schedule._id}></Treatment>)
                }
            </div>
            {
                treatments && <BookingModal selectDate={selectDate} setTreatment={setTreatment} treatments={treatments}></BookingModal>
            }
        </div>
    );
};

export default AppointmentTime;