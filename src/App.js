import React from 'react';
import { 
  Grid, Button, CssBaseline, Container, makeStyles, 
  AppBar, Toolbar, Typography, IconButton, Card, 
  TextField, Box,
  
} from '@material-ui/core';

//icons
import MenuIcon from '@material-ui/icons/Menu';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

//colors
import { 
  red, blue 

} from '@material-ui/core/colors';

//menu
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

//card
import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    zIndex: 5
  },
  title: {
    flexGrow: 1,
  },
  containerMain: {
    paddingTop: '25px',
  },
  buttonMain: {
    marginRight: theme.spacing(2),
  },
  // cardMain: {
  //   maxWidth: 345,
  // },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    position: 'none',
    backgroundColor: red[500],
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  containerO2: {
    height: '500px', 
    width: '100%',
    backgroundColor: 'white',
    marginTop: '20px', 
    marginBottom: '20px',
    boxShadow: '0 0 1em gold',
  },
  buttonSubmit: {
    backgroundColor: blue['A200'],
    color: 'white',
    boxShadow: '0 0 1em gold',
  },
}));

export default function App() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
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
  
  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              FatiaDev
            </Typography>
            <Button className={classes.buttonMain} variant="contained" color="secondary">
              Home
            </Button>
            <Button className={classes.buttonMain} variant="contained" color="primary">
              Develiry
            </Button>
            <Button className={classes.buttonMain} variant="contained" color="primary">
              Cardápio
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

        <Container maxWidth="lg" className={classes.containerMain}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <h1 style={{ textAlign: 'center' }} >Promoções</h1>
            </Grid>
            <Grid item xs={4}>
              <Card className={classes.cardMain}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={
                    <a href="https://www.tripadvisor.com.br/Restaurant_Review-g303631-d10860196-Reviews-New_Shawarma-Sao_Paulo_State_of_Sao_Paulo.html">
                      New Shawarma
                    </a>
                  }
                  subheader="16 de outubro, 2020"
                />
                <CardMedia
                  className={classes.media}
                  image="https://media-cdn.tripadvisor.com/media/photo-s/0f/df/5d/45/photo1jpg.jpg"
                  title="New Shawarma"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Esta impressionante Shawarma é um prato de festa perfeito e uma refeição divertida para cozinhar junto com seus convidados.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Em restaurante:</Typography>
                    <Typography paragraph>
                      Primeiro Prado do Dia.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>

            </Grid>
            <Grid item xs={4}>
              <Card className={classes.cardMain}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={
                    <a href="https://www.hojetemfrango.com.br/receita/shawarma-de-frango/">
                      Shawarma de Frango
                    </a>
                  }
                  subheader="16 de outubro, 2020"
                />
                <CardMedia
                  className={classes.media}
                  image="https://www.hojetemfrango.com.br/wp-content/uploads/2019/02/shutterstock_475603981.jpg"
                  title="Shawarma de Frango"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Esta impressionante Shawarma de Frango é um prato de festa perfeito e uma refeição divertida para cozinhar junto com seus convidados.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Em restaurante:</Typography>
                    <Typography paragraph>
                      Segundo Prado do Dia.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
              
            </Grid>
            <Grid item xs={4}>
              <Card className={classes.cardMain}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={
                    <a href="https://www.tripadvisor.com.br/Restaurant_Review-g303334-d12094744-Reviews-Shawarma_Fast_Food-Imperatriz_State_of_Maranhao.html">
                      Shawarma Imperatriz
                    </a>
                  }
                  subheader="16 de outubro, 2020"
                />
                <CardMedia
                  className={classes.media}
                  image="https://media-cdn.tripadvisor.com/media/photo-o/0f/f7/f7/60/img-20170720-wa0127-largejpg.jpg"
                  title="Shawarma Imperatriz"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Esta impressionante Shawarma Imperatriz é um prato de festa perfeito e uma refeição divertida para cozinhar junto com seus convidados.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Em restaurante:</Typography>
                    <Typography paragraph>
                      Terceiro Prado do Jantar.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          </Grid>
          <Container maxWidth="lg" className={classes.containerO2}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box display="flex" justifyContent="center" m={1} p={1}>
                  <h1>Formulário Cliente</h1>
                </Box>
                <form autoComplete="off">
                  <Box display="flex" justifyContent="center" m={1} p={1}>
                    <TextField id="outlined-basic" type="text" label="Nome" variant="outlined" required />
                  </Box>
                  <Box display="flex" justifyContent="center" m={1} p={1}>
                    <TextField id="outlined-basic" type="email" label="Email" variant="outlined" required />
                  </Box>
                  <Box display="flex" justifyContent="center" m={1} p={1}>
                    <Button variant="outlined" type="submit" className={classes.buttonSubmit}>
                      Confirmar
                    </Button>
                  </Box>
                </form>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </div>
    </React.Fragment>
  );
}
