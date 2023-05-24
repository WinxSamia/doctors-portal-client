import React from 'react';
import c1 from '../../../assets/images/people1.png'
import c2 from '../../../assets/images/people2.png'
import c3 from '../../../assets/images/people3.png'

const Testimonial = () => {
    return (
        <div className='grid grid-cols-3 mx-auto'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">

                    <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                </div>
                <figure className="flex mr-56"><img className='w-2/5 m-5 ' src={c1} alt="Shoes" />
                    <div><p>Robart</p>
                        <p>USA</p></div>
                </figure>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">

                    <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                </div>
                <figure className="flex mr-56"><img className='w-2/5 m-5 ' src={c2} alt="Shoes" />
                    <div><p>Natasha </p>
                        <p>Colombia</p></div>
                </figure>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">

                    <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                </div>
                <figure className="flex mr-56"><img className='w-2/5 m-5 ' src={c3} alt="Shoes" />
                    <div><p>Lara</p>
                        <p>Florida</p></div>
                </figure>
            </div>
        </div>
    );
};

export default Testimonial;