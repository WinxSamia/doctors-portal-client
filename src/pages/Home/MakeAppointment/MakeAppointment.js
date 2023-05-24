import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import bg from '../../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${bg})`,
            borderRadius: '6px'
        }} >


            <div className="hero my-10 w-2/3 rounded-md">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} alt='' className="hidden lg:block lg:w-1/2 rounded-lg -mt-32 " />
                    <div>
                        <h1 className="text-5xl text-white font-bold">Box Office News!</h1>
                        <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn bg-gradient-to-r from-teal-500 to-cyan-600">Get Started</button>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default MakeAppointment;