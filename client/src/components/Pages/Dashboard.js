import React from "react";
import Container from "react-bootstrap/Container";
import RecipeCard from "../RecipeCard";
import MyRecipes from "../MyRecipes";
import { Grid } from "@material-ui/core";

const Dashboard = () => {
  return (
    <Container>
      <h1>User Dashboard</h1>
      <RecipeCard />
      <h1>My Recipes</h1>
      <Grid container>
        <Grid item xs={6}>
          <MyRecipes />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
