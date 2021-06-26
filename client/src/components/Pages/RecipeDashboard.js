import React, { Component } from "react";

export class RecipeDashboard extends Component {
  render() {
    return (
      <div>
        <h1>My Recipes</h1>
        <RecipeCard />
      </div>
    );
  }
}

export default RecipeDashboard;
