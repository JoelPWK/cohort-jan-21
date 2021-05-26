import React from "react";
// import Navbar from "../components/Navbar.js"
import Button from "react-bootstrap/Button";
import IngredientsList from "../components/IngredientsList";

const Ingredients = () => {
    // TODO: Attach to a form component which pushes ingredient to the database on submit
    const addIngredient = () => {};

    return (
        <div>
            {/* TODO: Add Navbar component here:
            <Navbar /> */}
            <h1>Your Ingredients</h1>
            <Button variant="primary" onClick={() => addIngredient()}>
                Add Ingredient
            </Button>
            <IngredientsList />
        </div>
    );
};

export default Ingredients;
