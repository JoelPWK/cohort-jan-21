import React from "react";
import Button from "react-bootstrap/Button";
import IngredientsList from "../IngredientsList";

const Ingredients = () => {
    // TODO: Attach to a form component which pushes ingredient to the database on submit
    const addIngredient = () => {};

    return (
        <div className="mx-auto w-75 text-center">
            <h1>
                Your Ingredients
                <Button
                    variant="primary"
                    className="mx-5"
                    onClick={() => addIngredient()}
                >
                    Add Ingredient
                </Button>
            </h1>
            <IngredientsList />
        </div>
    );
};

export default Ingredients;
