import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AuthContext from './authContext';
import * as auth from "../pages/api/auth"

function Provider({ children }) {
    const [user, setUser] = useState(null);
    async function signIn(){
        const response = await auth.signIn();
        const { token, user } = response;
        setUser(response.user);
      } 
    function signOut(){
        setUser(null);
    } 
  
    return (
      <AuthContext.Provider
        value={ { signed:!!user, user, signIn, signOut } }
      >
        {children}
      </AuthContext.Provider>
    );
  }
  
  export default Provider;
  
  Provider.propTypes = {
    children: PropTypes.node.isRequired,
  };