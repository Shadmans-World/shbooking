import React from 'react'
import useAuth from '../Hooks/useAuth'
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({children}) {

    const {user, loading} = useAuth();

    if(loading){
        return <span className="loading loading-dots loading-xl"></span>
    }

    if(!user){
        return <Navigate to={'/'} />
    }
  return children;
}
