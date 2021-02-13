import React, { useContext } from 'react';
import authContext from '../contexts/authContext';
import Typography from "@material-ui/core/Typography";
import FastfoodIcon from '@material-ui/icons/Fastfood';
import Toolbar from '@material-ui/core/Toolbar';
import {AppBar, Button} from '@material-ui/core';

function Dasboard() { 
  const { user, signOut } = useContext(authContext); 
  return(
    <div>
      <AppBar position="relative">
        <Toolbar>
          <FastfoodIcon />
          <Typography variant="h6" color="inherit" noWrap>
            DrinkEat - Bem Vindo {user.name}
          </Typography>
        </Toolbar>
        <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={signOut}
              >
                Sair
        </Button>
      </AppBar>

    </div>
  );
}

export default Dasboard;