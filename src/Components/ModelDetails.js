import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "auto",
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

const ModelDetails = ({ match }) => {
  const make = JSON.parse(localStorage.getItem("carList"));
  const makeDetails = make.filter(x => x.make === match.params.make);
  const ModelData = makeDetails[match.params.model];
  const keys = Object.keys(ModelData);
  const classes = useStyles();

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          <b>
            {match.params.make.charAt(0).toUpperCase() +
              match.params.make.slice(1)}{" "}
            Data :
          </b>
        </ListSubheader>
      }
      className={classes.root}
    >
      {keys.map(key => (
        <ListItem button key={key}>
          <ListItemText primary={key} />
          <ListItemText secondary={ModelData[key]} />
        </ListItem>
      ))}
    </List>
  );
};

export default ModelDetails;
