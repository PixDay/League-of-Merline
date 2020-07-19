import React from 'react';
import Grid from '@material-ui/core/Grid';
import Navbar from '../navbar/topbar';
import Paginator from '../pagination/pagination';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Contact from './contact-card';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: '100%'
    },
    card: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    grid: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '1.5%'
    },
    div: {
      width: '100%',
      height: '100%',
    }
  }),
);

export default function Contacts() {
  const classes = useStyles();

  function Line() {
    return (
      <React.Fragment>
        <Grid item xs={3} className={classes.grid}>
          <Contact></Contact>
        </Grid>
        <Grid item xs={3} className={classes.grid}>
          <Contact></Contact>
        </Grid>
        <Grid item xs={3} className={classes.grid}>
          <Contact></Contact>
        </Grid>
        <Grid item xs={3} className={classes.grid}>
          <Contact></Contact>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.div}>
      <Navbar title="Contactes"></Navbar>

      <Grid container className={classes.div}>
        <Grid container item className={classes.grid}>
          <Line></Line>
        </Grid>
        <Grid container item className={classes.grid}>
          <Line></Line>
        </Grid>
      </Grid>

      <Paginator></Paginator>
      <Fab color="primary" aria-label="add" className="addButton" href="contacts">
          <AddIcon />
      </Fab>
    </div>
  );
}