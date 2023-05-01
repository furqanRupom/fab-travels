import React, { useContext } from 'react';
import { TravelsContext } from '../providers/Providers';
import { Navigate ,useLocation} from 'react-router-dom';
import {FaSpinner} from 'react-icons/fa'

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const { user ,loading} = useContext(TravelsContext)
    if(loading){
        return <div className="animate-spin w-full flex items-center justify-center text-4xl h-screen"><FaSpinner /></div>
    }
    if(user){
        return children;
    }
    return <Navigate to="/user/login" state={{from : location}} replace={true}></Navigate>

};

export default PrivateRoute;