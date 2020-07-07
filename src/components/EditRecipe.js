import React from "react";

class EditRecipe extends React.Component {
  state = {
    name: "",
    cooking_time: "",
    ingredients: "",
    method: "",
    loading: true,
    id: this.props.match.params.id,
  };
  onInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  onFormSubmit = async (event) => {
    event.preventDefault();
    const { id, name, cooking_time, ingredients, method } = this.state;
    await fetch(`http://localhost:3000/recipes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, cooking_time, ingredients, method }),
    });
    this.props.history.push("/recipes");
  };

  async componentDidMount() {
    const { id } = this.state;
    const response = await fetch(`http://localhost:3000/recipes/${id}`);
    const { name, cooking_time, ingredients, method } = await response.json();
    this.setState({ name, cooking_time, ingredients, method, loading: false });
  }

  render() {
    const { name, cooking_time, ingredients, method, loading } = this.state;
    console.log(name);
    return (
      !loading && (
        <div className="container">
          <h1>Edit a Recipe</h1>
          <form onSubmit={this.onFormSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={this.onInputChange}
              value={name || ""}
            />
            <label htmlFor="cooking_time">Cooking Time</label>
            <input
              type="text"
              name="cooking_time"
              id="cooking_time"
              onChange={this.onInputChange}
              value={cooking_time || ""}
            />
            <label htmlFor="ingredients">Ingredients</label>
            <input
              type="text"
              name="ingredients"
              id="ingredients"
              onChange={this.onInputChange}
              value={ingredients || ""}
            />
            <label htmlFor="method">Method</label>
            <textarea
              name="method"
              id="method"
              onChange={this.onInputChange}
              value={method || ""}
            ></textarea>
            <input type="submit" value="Submit" />
          </form>
        </div>
      )
    );
  }
}

export default EditRecipe;
