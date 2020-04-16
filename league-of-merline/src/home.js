import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import IconClear from '@material-ui/icons/Clear';
import AddIcon from '@material-ui/icons/Add';
import sideNav from './drawer'

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
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Merline
          </Typography>
          <IconButton edge="end" color="inherit" aria-lable="menu" href="/">
            <IconClear/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Fab color="primary" aria-label="add" className="addButton">
        <AddIcon />
      </Fab>
      <sideNav></sideNav>
    </div>

  );
}