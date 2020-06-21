import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DashboardIcon from '@material-ui/icons/Dashboard';
import WidgetsIcon from '@material-ui/icons/Widgets';

const useStyles = makeStyles({
  list: {
    width: 400,
  },
  fullList: {
    width: 400,
  },
});

type Anchor = 'left';

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
   left: false
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'left' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[{text: 'Profile', icon: <DashboardIcon />, path: 'profile'},
          {text: 'Services', icon: <WidgetsIcon />, path: 'widgets'}].map((object, index) => (
            <ListItem button component="a" key={object.text} href={object.path}>
              <ListItemIcon>{object.icon}</ListItemIcon>
              <ListItemText primary={object.text} />
            </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      {(['left'] as Anchor[]).map((anchor) => (
        <React.Fragment key={anchor}>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(anchor, true)}>
                    <MenuIcon />
                </IconButton>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
