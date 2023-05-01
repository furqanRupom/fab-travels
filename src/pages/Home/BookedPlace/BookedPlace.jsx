import React, { useContext } from 'react';
import blackLogo from '../../../assets/travelssB.png'
import { TravelsContext } from '../../../providers/Providers';
import {useLoaderData} from 'react-router-dom'

const BookedPlace = () => {
    const {user} = useContext(TravelsContext)
    const {destination} = useLoaderData()
    return (
        <div>
            Welcome{user.displayName} ready for your next trip? {destination}

        </div>
    );
};

export default BookedPlace;