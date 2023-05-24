import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Card = () => {
    return (
        <div className='grid grid-cols-3 grid gap-3 '>
            <div className="card card-side bg-gradient-to-r from-teal-500 to-cyan-600 shadow-xl w-3/4">
                <figure> <img className='w-2/3' src={clock} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white">Opening Hour</h2>
                    <p className='text-white'>Click the button to watch on Jetflix app.</p>

                </div>
            </div>
            <div className="card card-side bg-gray-700 shadow-xl w-3/4 text-white">
                <figure> <img className='w-2/3' src={marker} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white">Visiting Our location</h2>
                    <p className='text-white'>Click the button to watch on Jetflix app.</p>

                </div>
            </div>
            <div className="card card-side bg-gradient-to-r from-teal-500 to-cyan-600 shadow-xl w-3/4">
                <figure> <img className='w-2/3' src={phone} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white">Contact Us Now</h2>
                    <p className='text-white'>Click the button to watch on Jetflix app.</p>

                </div>
            </div>

        </div>
    );
};

export default Card;