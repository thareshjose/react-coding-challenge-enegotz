import React from "react";
import Home from "./Home";
import { Route } from "react-router-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import MakeDetails from "./MakeDetails";
import ModelDetails from "./ModelDetails";

function App() {
  return (
    <Router>
      <div id="container">
        <Switch>
          <Route path="/" exact strick component={Home} />
          <Route
            path="/MakeDetails/:make"
            exact
            strict
            component={MakeDetails}
          />
          <Route
            path="/MakeDetails/:make/:model"
            exact
            strict
            component={ModelDetails}
          />
          <Route
            render={function() {
              return <p>Not found</p>;
            }}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
