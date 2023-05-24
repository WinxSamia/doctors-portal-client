import React from 'react';
import img4 from '../../../assets/images/treatment.png'

const Hero = () => {
    return (
        <div className="hero w-2/3 my-10 mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={img4} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn border-0 btn bg-gradient-to-r from-teal-500 to-cyan-600">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;