import React from "react";
import { Route, Switch } from "react-router-dom";
import Recipes from "./Recipes";
import Navbar from "./Navbar";
import Home from "./Home";
import NoMatch from "./NoMatch";
import CreateRecipe from "./CreateRecipe";
import EditRecipe from "./EditRecipe";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/recipes" component={Recipes} />
          <Route exact path="/recipes/:id/edit" component={EditRecipe} />
          <Route exact path="/" component={Home} />
          <Route exact path="/recipes/create" component={CreateRecipe} />
          <Route component={NoMatch} />
        </Switch>
      </>
    );
  }
}

export default App;
