import React from "react";
import Container from "react-bootstrap/Container";
import SmashedCake from "../../Images/404-smashed-cake.png";

const NotFound = () => {
    return (
        <Container className="mx-auto text-center">
            <h1>Sorry!</h1>
            <h2>The food you are looking for is in another recipe book.</h2>
            <p>404: Page not found</p>
            <img
                src={SmashedCake}
                alt="Smashed up cake"
                height="auto"
                width="450em"
            />
        </Container>
    );
};

export default NotFound;
