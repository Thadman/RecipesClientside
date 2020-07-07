import React from "react";
import { Link } from "react-router-dom";

class Recipes extends React.Component {
  state = { recipes: [] };

  getRecipes = async () => {
    const response = await fetch("http://localhost:3000/recipes");
    const recipes = await response.json();
    this.setState({ recipes: recipes });
    console.log(recipes);
  };

  deleteRecipe = async (id) => {
    console.log(id);
    console.log("delete");
    try {
      await fetch(`http://localhost:3000/recipes/${id}`, {
        method: "DELETE",
      });
      this.getRecipes();
    } catch (err) {
      console.error(err);
    }
  };

  renderRecipes = () => {
    return this.state.recipes.map((element, index) => {
      return (
        <div key={index}>
          <h3>{element.name}</h3>
          <p>{element.ingredients}</p>
          <p>{element.method}</p>
          <div className="edit-delete-container">
            <Link to={`/recipes/${element.id}/edit`}>Edit</Link>
            <span onClick={() => this.deleteRecipe(element.id)}>Delete</span>
          </div>
          <hr />
        </div>
      );
    });
  };

  async componentDidMount() {
    this.getRecipes();
  }

  render() {
    return (
      <div>
        <h1>This is the recipes page</h1>
        {this.renderRecipes()}
      </div>
    );
  }
}

export default Recipes;
