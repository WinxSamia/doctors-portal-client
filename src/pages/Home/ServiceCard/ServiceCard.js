import React from 'react';
import img1 from '../../../assets/images/cavity.png'
import img2 from '../../../assets/images/whitening.png'
import img3 from '../../../assets/images/fluoride.png'

const ServiceCard = () => {
    return (
        <div>
            <div className='text-center my-6'>
                <h1 className='font-semibold text-2xl text-cyan-500'>Services</h1>
                <h2 className='font-semibold text-3xl'>Service We Provide</h2>
            </div>
            <div className='grid grid-cols-3'>
                <div className="card w-96 glass">
                    <figure><img className='w-1/4 m-3' src={img1} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Life hack</h2>
                        <p>How to park your car at your garage?</p>

                    </div>
                </div>
                <div className="card w-96 glass">
                    <figure><img className='w-1/4 m-3' src={img2} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Life hack</h2>
                        <p>How to park your car at your garage?</p>

                    </div>
                </div>
                <div className="card w-96 glass">
                    <figure><img className='w-1/4 m-3' src={img3} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Life hack</h2>
                        <p>How to park your car at your garage?</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;