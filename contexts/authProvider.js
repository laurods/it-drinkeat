import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AuthContext from './authContext';
import axios from 'axios';
//import * as auth from "../pages/api/auth";
//import ApiAxios from "../pages/api/axios"


function Provider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(null);
/*
    useEffect(() => {
      function loadStorageData() {
        const storagedUser = localStorage.getItem("@DrinkEat:user");
        const storagedToken = localStorage.getItem("@DrinkEat:token");

        if(storagedUser && storagedToken){
          //ApiAxios.defaults.headers['Authorization'] = `Bearer ${storagedToken}`;
          setUser(JSON.parse(storagedUser));
          setLoading(false);
        }
      }
      loadStorageData();
    }, []);
*/
    async function signIn(values){

        //const response = await auth.signIn();       
       const userData = values;
       /* const userTeste = {
          email: 'pedro@gmail.com',
          password: '321',
        }
        */
        axios.post(`https://it-gestor.vercel.app/api/user/authDrinkeat`, { userData }).then( response => {
          const { message, email, error } = response.data;          
          console.log(message);
          console.log(email);          
        //setUser(response.email);        
        //localStorage.setItem("@DrinkEat:user", JSON.stringify(response.email));
        localStorage.setItem("@DrinkEat:token", JSON.stringify(response.message));

        }).catch(function (error) {
          if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
      
        });
        /*
        const { _id, email } = response;
        setUser(response.user);
        ApiAxios.defaults.headers['Authorization'] = `Bearer ${response._id}`;
        localStorage.setItem("@DrinkEat:user", JSON.stringify(response.email));
        localStorage.setItem("@DrinkEat:token", JSON.stringify(response.id));
        */
      } 

    function signOut(){
      localStorage.removeItem("@DrinkEat:user");
      localStorage.removeItem("@DrinkEat:token");
        setUser(null);
    }
    
   
  
    return (
      <AuthContext.Provider
        value={ { signed:!!user, user, loading, signIn, signOut } }
      >
        {children}
      </AuthContext.Provider>
    );
  }
  
  export default Provider;
  
  Provider.propTypes = {
    children: PropTypes.node.isRequired,
  };