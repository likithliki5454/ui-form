import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    width: 500,
    border: "2px solid black",
    margin: " 0 20px 0 15px",
    borderRadius: '30px',
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: 250,
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 500,
  },
  controls: {
    display: "flex",
    alignItems: "center",
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
            React JS
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          Jordan Walke
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <Typography variant="body2" color="text.secondary">
          React is an Open Source view library created and maintained by Facebook. It's a great tool to render the User Interface (UI) of modern web applications.<br></br>{" "}
            <Button size="small" color="primary">
              Learn More
            </Button>
          </Typography>
        </div>
      </div>
      <CardMedia
        c
        className={classes.cover}
        image="https://res.cloudinary.com/practicaldev/image/fetch/s--MLrhag65--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pdib9r9rk5j1m7oala1p.png"
        title="Live from space album cover"
      />
    </Card>
  );
}
