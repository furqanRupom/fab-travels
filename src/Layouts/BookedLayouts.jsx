import React from 'react';
import Header from '../pages/Shared/Header/Header';
import {Outlet} from 'react-router-dom'

const BookedLayouts = () => {
    return (
        <div>
            <div className="bg-slate-900">
            <Header />

            </div>
            <Outlet />
        </div>
    );
};

export default BookedLayouts;