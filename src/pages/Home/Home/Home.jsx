import React, { useEffect, useState } from 'react';
import { useLoaderData} from 'react-router-dom'
import Carousel from '../Carousal/Carousal';

const Home = () => {
    const travelsData = useLoaderData()

    return (
        <div>
            <h1>this is our home {travelsData.length}</h1>
            <Carousel travelsData ={travelsData}/>
        </div>
    );
};

export default Home;