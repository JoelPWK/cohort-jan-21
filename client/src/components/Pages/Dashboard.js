import React from "react";
import Container from "react-bootstrap/Container";
import RecipeCard from "../RecipeCard/RecipeCard";
import EmptyRecipes from "./EmptyRecipes";

const Dashboard = () => {
  return (
    <Container>
      <EmptyRecipes />
      <RecipeCard />
      
    </Container>
  );
};

export default Dashboard;
