import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContex } from '../../../Contex/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const BookingModal = ({ treatments, selectDate, setTreatment }) => {
    const { user } = useContext(AuthContex)
    const { name, slots } = treatments;
    const date = format(selectDate, 'PP');

    const handleBooking = event => {
        event.preventDefault();
        const Pname = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const slot = event.target.slot.value;
        const date = event.target.date.value;

        const bookingInfo = {
            Appointment: date,
            Treatment: name,
            Patient: Pname,
            email,
            phone
        }
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking confirmed');

                }
            })
        console.log(bookingInfo);
    }
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 grid gap-4 ml-16 mt-12'>

                        <input type="text" name='date' defaultValue={date} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, i) => <option value={slot} key={i} >{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' defaultValue={user?.name} placeholder="Enter Name" className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' defaultValue={user?.email} disabled placeholder="Enter Email" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Enter Phone" className="input input-bordered w-full max-w-xs" />
                        <input type="Submit" className="btn bg-teal-700 w-full max-w-xs" />

                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;