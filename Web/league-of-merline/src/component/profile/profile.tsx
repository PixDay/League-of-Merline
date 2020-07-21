import React from 'react';
import Navbar from '../navbar/topbar';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    large: {
      width: '20%',
      height: '20%',
    },
  }),
);

export default function Profile() {
  const classes = useStyles();

  return (
    <div>
      <Navbar title="Profile"></Navbar>
      <Avatar alt="avatar" src="/images/profile.jpg" className={classes.large} />
      <Fab color="primary" aria-label="add" className="addButton" href="contacts">
          <AddIcon />
      </Fab>
    </div>
  );
}