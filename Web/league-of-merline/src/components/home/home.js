import React from 'react';
import Navbar from '../navbar/navbar';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export default function ButtonAppBar() {
  return (
    <div>
      <Navbar></Navbar>
      <Fab color="primary" aria-label="add" className="addButton" href="widgets">
          <AddIcon />
      </Fab>
    </div>
  );
}