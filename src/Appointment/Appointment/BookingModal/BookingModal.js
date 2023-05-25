import React from 'react';

const BookingModal = ({ treatments }) => {
    const { name, slots } = treatments;
    return (
        <div>
            {/* The button to open modal */}
            <label htmlFor="booking-modal" className="btn">open modal</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center">{name}</h3>
                    <div className='grid grid-cols-1 grid gap-4 ml-16'>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <select className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option disabled selected>{slot}</option>)

                            }
                        </select>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;