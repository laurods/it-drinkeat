import React from "react";
import Typography from "@material-ui/core/Typography";
import FastfoodIcon from '@material-ui/icons/Fastfood';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';

function TopBar() {
  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <FastfoodIcon />
          <Typography variant="h6" color="inherit" noWrap>
            DrinkEat
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopBar;