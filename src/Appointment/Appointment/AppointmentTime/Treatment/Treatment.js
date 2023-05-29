import React from 'react';

const Treatment = ({ schedule, setTreatment }) => {
    const { name, slots } = schedule;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-xl font-semibold text-teal-700 text-center">{name}</h2>
                <p className='text-center'>{slots.length > 0 ? slots[0] : 'Book another day'}</p>
                <p className='text-center'> {slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <label disabled={slots.length === 0} htmlFor="booking-modal" className="btn"
                        onClick={() => setTreatment(schedule)}>Book Appointment</label>

                </div>
            </div>
        </div>
    );
};

export default Treatment;