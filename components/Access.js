import React, { useContext } from 'react';
import authContext from '../contexts/authContext';
import { ErrorMessage, Formik, Form, Field } from "formik";
import Dashboard from './Dashboard';
import Login from './Login'; 
import CircularProgress from '@material-ui/core/CircularProgress';

function Access () {
  const { signed, loading } = useContext(authContext);
  console.log(loading);
  /*
  if(loading){
    return (
    <CircularProgress />
    );
  } 
  */
    if(loading) return <CircularProgress />
    
    return signed? <Dashboard /> : <Login />
};

export default Access;
