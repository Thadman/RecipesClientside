import React from "react";

class CreateRecipe extends React.Component {
  onInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  onFormSubmit = async (event) => {
    event.preventDefault();
    await fetch("http://localhost:3000/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ recipe: this.state }),
    });
    this.props.history.push("/recipes");
  };
  render() {
    return (
      <div className="container">
        <h1>Create a Recipe</h1>
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={this.onInputChange}
          />
          <label htmlFor="cooking_time">Cooking Time</label>
          <input
            type="text"
            name="cooking_time"
            id="cooking_time"
            onChange={this.onInputChange}
          />
          <label htmlFor="ingredients">Ingredients</label>
          <input
            type="text"
            name="ingredients"
            id="ingredients"
            onChange={this.onInputChange}
          />
          <label htmlFor="method">Method</label>
          <textarea
            name="method"
            id="method"
            onChange={this.onInputChange}
          ></textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CreateRecipe;
