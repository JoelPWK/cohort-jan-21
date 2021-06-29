import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import BrowseRecipes from "./BrowseRecipes";
import MyRecipes from "./MyRecipes";

const Dashboard = () => {
    return (
        <Container>
            {localStorage.getItem(`userId`) ? <MyRecipes /> : <Fragment />}
            <BrowseRecipes />
        </Container>
    );
};

export default Dashboard;
