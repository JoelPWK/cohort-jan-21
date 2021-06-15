import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

const RecipeCard = (props) => {
  const [recipeData, setRecipieData] = useState([
    {
      name:"chicken",
      author: "Jim",
      instructions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      photo: "https://picsum.photos/200",
      likes: 5,
    },
    {
      name:"chicken",
      author: "Tim",
      instructions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      photo: "https://picsum.photos/200",
      likes: 50,
    },
    {
      name:"chicken",
      author: "Lynn",
      instructions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      photo: "https://picsum.photos/200",
      likes: 500,
    },
  ]);

  return (
    <div>
      {recipeData.map((recipeData) => {
        return (
          <>
          <div className="container-fluid d-flex justify-content-center">
            <div className="row">
              <div className="col-md-4">
            <Card className='recipe cards' style={{ width: "18rem" }}>
              <Card.Title>{recipeData.name}</Card.Title>
              <Card.Subtitle>{recipeData.author}</Card.Subtitle>
              <Card.Img variant="top" src={recipeData.photo} className="p-5" />
              <Card.Body>
                <Card.Text>
                  {recipeData.instructions}
                </Card.Text>
                <Card.Text>{recipeData.likes}</Card.Text>
                <Card.Link> See full recipe </Card.Link>
                <Button variant="primary">Like</Button>
              </Card.Body>
            </Card>

              </div>

            </div>
            </div>        
          </>
        );
      })}
    </div>
  );
};

export default RecipeCard;
