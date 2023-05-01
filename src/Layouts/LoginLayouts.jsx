import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';

const LoginLayouts = () => {
    return (
        <div className="bg-slate-900">
            <Header />
            <Outlet />
        </div>
    );
};

export default LoginLayouts;