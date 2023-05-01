import React, { useEffect, useState } from 'react';
import { useLoaderData} from 'react-router-dom'
import Carousel from '../Carousal/Carousal';

const Home = () => {
    const travelsData = useLoaderData()

    return (
        <div>
            <Carousel travelsData ={travelsData}/>
        </div>
    );
};

export default Home;