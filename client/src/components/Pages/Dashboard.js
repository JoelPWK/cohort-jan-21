import React from "react";
import Container from "react-bootstrap/Container";
import BrowseRecipes from "./BrowseRecipes";
import MyRecipes from "./MyRecipes";

const Dashboard = () => {
  return (
    <Container>
      <MyRecipes />
      <BrowseRecipes />
      
    </Container>
  );
};

export default Dashboard;
