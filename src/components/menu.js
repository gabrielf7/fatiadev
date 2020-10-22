import React from 'react';
import { Link } from 'react-router-dom';
import { HomeRT, CardapioRT, DeveliryRT } from './../Router';

import { 
  Button, AppBar, Toolbar, Typography, IconButton, makeStyles
} from '@material-ui/core';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

//icons
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    zIndex: 5
  },
  buttonMain: {
    marginRight: theme.spacing(2),
  },
}));

export default function Menu() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  

  return(
    <div className="menu">
      <header>
        <AppBar position="static">
          <Toolbar>
            <IconButton component={Link} to={HomeRT} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography component={Link} to={HomeRT} variant="h6" className={classes.title}>
              FatiaDev
            </Typography>
            <Button component={Link} to={HomeRT} className={classes.buttonMain} variant="contained" color="secondary">
              Home
            </Button>
            <Button component={Link} to={CardapioRT} className={classes.buttonMain} variant="contained" color="primary">
              Cardápio
            </Button>
            <Button component={Link} to={DeveliryRT} className={classes.buttonMain} variant="contained" color="primary">
              Develiry
            </Button>
            <div>
              <Button
                className={classes.buttonMain} 
                variant="contained" 
                color="primary"
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
              >
                Contato
              </Button>
              <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                          <MenuItem onClick={handleClose}>Acessória</MenuItem>
                          <MenuItem onClick={handleClose}>WhatsApp</MenuItem>
                          <MenuItem onClick={handleClose}>Instagram</MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
          </Toolbar>
        </AppBar>

      </header>
    </div>
  );
}