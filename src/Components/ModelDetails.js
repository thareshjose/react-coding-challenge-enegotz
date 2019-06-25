import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "auto",
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  button: {
    marginRight: theme.spacing(1)
  }
}));

const ModelDetails = ({ match }) => {
  const make = JSON.parse(localStorage.getItem("carList"));
  const makeDetails = make.filter(x => x.make === match.params.make);
  const ModelData = makeDetails[match.params.model];
  delete ModelData.logo;
  const keys = Object.keys(ModelData);
  delete keys.logo;
  const classes = useStyles();

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <>
          <NavLink to={"../" + ModelData.make} exact strict>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              style={{ marginLeft: "-100px" }}
            >
              Back
            </Button>
          </NavLink>
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            style={{ fontSize: "2vw", color: "black" }}
          >
            <b>
              {match.params.make.charAt(0).toUpperCase() +
                match.params.make.slice(1)}{" "}
            </b>
          </ListSubheader>
        </>
      }
      className={classes.root}
    >
      {keys.map(key => (
        <ListItem button key={key}>
          <ListItemText primary={key} />
          <ListItemSecondaryAction>
            <ListItemText edge="end" secondary={ModelData[key]} />
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default ModelDetails;
