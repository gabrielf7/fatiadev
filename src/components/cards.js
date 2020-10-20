import React from 'react';
import { 
  Grid, Card, Typography, IconButton, makeStyles
} from '@material-ui/core';

import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';

//icons
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

//colors
import { 
  red
  
} from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
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
}));

export default function Cards() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return(
    <div className="cards">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1 style={{ textAlign: 'center' }} >Promoções</h1>
        </Grid>
        <Grid item xs={12} item lg={4}>
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
        <Grid item xs={12} item lg={4}>
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
        <Grid item xs={12} item lg={4}>
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
    </div>
  );
}