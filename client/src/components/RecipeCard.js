import React from "react";
import { Button, Card } from "react-bootstrap";

const RecipeCard = (props) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
          <Card.Title>Recipe Name</Card.Title>
        <Card.Img variant="top" src="https://picsum.photos/200" />
        <Card.Body>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            ipsum risus, suscipit ac venenatis sit amet, pellentesque eget
            felis. Proin augue nulla, fermentum sed egestas a, commodo non erat.
            Sed id interdum velit, eget tempus nisi. Cras in sagittis justo. 
          </Card.Text>
          <Button variant="primary">See full Recipe</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RecipeCard;
