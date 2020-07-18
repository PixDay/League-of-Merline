import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        position: 'fixed',
        bottom: '2%',
        width: '100%',
      }
    },
    alignItemsAndJustifyContent: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  }),
);

export default function PaginationOutlined() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Pagination count={10} color="primary" className={classes.alignItemsAndJustifyContent}/>
    </div>
  );
}