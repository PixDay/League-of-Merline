import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Sidebard from './sidebar';
import ClearIcon from '@material-ui/icons/Clear';

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
  
  export interface Props {title: string};

  export default function ButtonAppBar(props: Props) {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Sidebard></Sidebard>
            <Typography variant="h6" className={classes.title}>
              {props.title}
            </Typography>
            <IconButton edge="end" color="inherit" aria-label="menu" href="/">
              <ClearIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
  
    );
  }