import React from 'react';
import Banner from './Banner/Banner';
import Card from './Card/Card';
import ServiceCard from './ServiceCard/ServiceCard';
import Hero from './Hero/Hero';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Testimonial from './Testimonial/Testimonial';


const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Card></Card>
            <ServiceCard></ServiceCard>
            <Hero></Hero>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>


        </div>
    );
};

export default Home;