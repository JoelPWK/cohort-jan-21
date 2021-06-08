import React from 'react'
import Container from 'react-bootstrap/Container'
import RecipeCard from '../RecipeCard'


const Dashboard = () => {
    return(
        <Container>
            <h1>User Dashboard</h1>
            <RecipeCard />
        </Container>
    )
}

export default Dashboard;
