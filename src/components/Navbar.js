import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/recipes/create">Create a Recipe</Link>
        <Link to="/recipes/:id/edit">Edit a Recipe</Link>
      </nav>
    );
  }
}

export default Navbar;
