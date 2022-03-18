import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { Height } from '@material-ui/icons';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
		width: 500,
        border:'2px solid black' ,
        margin: " 0 0 0 10px",
        borderRadius: '30px',
      
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width:250
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 500,

  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },

}));

export default function Card2() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Angular Js
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          Misko Hevery
          </Typography>
        </CardContent>
        <div className={classes.controls}>
        <Typography variant="body2" color="text.secondary">
        AngularJS is a toolset for building the framework most suited to your application development. It is fully extensible and works well with other libraries.
 <br></br>  <Button size="small" color="primary">
          Learn More
        </Button>
        </Typography>
        
        </div>
      </div>
      <CardMedia c
        className={classes.cover}
        image="https://nareshit.com/wp-content/uploads/2018/08/angular-JS-online-training-nareshit.jpg"
        title="Live from space album cover"
      />
      
    </Card>
  );
}
