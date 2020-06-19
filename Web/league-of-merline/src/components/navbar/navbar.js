import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import IconClear from '@material-ui/icons/Clear';
import SideBar from './sidebar'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
  export default function ButtonAppBar() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <SideBar></SideBar>
            <Typography variant="h6" className={classes.title}>
              Merline
            </Typography>
            <IconButton edge="end" color="inherit" aria-label="menu" href="/">
              <IconClear/>
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
  
    );
  }