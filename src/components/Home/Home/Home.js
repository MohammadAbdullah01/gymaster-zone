import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Motivation from './Motivation/Motivation';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Motivation></Motivation>
        </div>
    );
};

export default Home;