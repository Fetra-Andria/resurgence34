import React from 'react';
import HeroSection from '../Components/HeroSection';
import { homeObjThree } from '../Data';

const Home = () => {
    return (
        <HeroSection {...homeObjThree}/>
    );
};

export default Home;
