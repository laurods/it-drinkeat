import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AuthContext from './authContext';
import * as auth from "../pages/api/auth";
import ApiAxios from "../pages/api/axios"


function Provider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
      function loadStorageData() {
        const storagedUser = localStorage.getItem("@DrinkEat:user");
        const storagedToken = localStorage.getItem("@DrinkEat:token");

        if(storagedUser && storagedToken){
          ApiAxios.defaults.headers['Authorization'] = `Bearer ${storagedToken}`;
          setUser(JSON.parse(storagedUser));
          setLoading(false);
        }
      }
      loadStorageData();
    }, []);

    async function signIn(values){
        //const response = await auth.signIn(values);       
        const response = await fetch('https://it-gestor.vercel.app/api/user/authDrinkeat', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                //email: emailRef.current.value,
                //password: passRef.current.value,
                email: 'pedro@gmail.com',
                password: '321',
            })
        });

        const { _id, email } = response;
        setUser(response.user);
        ApiAxios.defaults.headers['Authorization'] = `Bearer ${response._id}`;
        localStorage.setItem("@DrinkEat:user", JSON.stringify(response.email));
        localStorage.setItem("@DrinkEat:token", JSON.stringify(response.id));
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