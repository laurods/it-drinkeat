import React from 'react';
import AuthProvider from '../contexts/authProvider';
import Login from '../components/Login';
function authentication (){   
  return (
    <div>
        <AuthProvider>            
            <Login />        
        </AuthProvider> 
    </div>
  );
};

export default authentication;
