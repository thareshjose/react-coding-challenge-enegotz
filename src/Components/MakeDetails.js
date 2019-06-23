import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
}));

const MakeDetails = ({ match }) => {
  const classes = useStyles();

  const make = JSON.parse(localStorage.getItem("carList"));
  const makeDetails = make.filter(x => x.make === match.params.make);
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        {makeDetails.map((item, index) => (
          <Grid item xs={4} key={index}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={item.logo}
                  title={item.make}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Body Type :{" "}
                    {item.body_style.charAt(0).toUpperCase() +
                      item.body_style.slice(1)}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Drive : {item.drive_wheels}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <NavLink
                  to={"/MakeDetails/" + item.make + "/" + index}
                  exact
                  strict
                >
                  <Button size="small" color="primary">
                    View More
                  </Button>
                </NavLink>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MakeDetails;
