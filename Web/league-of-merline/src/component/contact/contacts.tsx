import React from 'react';
import Navbar from '../navbar/topbar';
import Paginator from '../pagination/pagination';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export default function Contacts() {
  return (
    <div>
      <Navbar title="Contactes"></Navbar>
      <Paginator></Paginator>
      <Fab color="primary" aria-label="add" className="addButton" href="contacts">
          <AddIcon />
      </Fab>
    </div>
  );
}