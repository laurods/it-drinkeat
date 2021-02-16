import React from 'react';
import AuthProvider from '../contexts/authProvider';
import Access from '../components/Access';
function authentication (){   
  return (
    <div>
        <AuthProvider>            
            <Access />        
        </AuthProvider> 
    </div>
  );
};

export default authentication;
