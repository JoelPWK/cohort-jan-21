import React, { useState } from "react";
import { Button, Card, CardColumns } from "react-bootstrap";
import { BiUpArrowCircle } from 'react-icons/bi'
import { BiDownArrowCircle } from 'react-icons/bi'

const RecipeCard = (props) => {
  const [recipeData, setRecipieData] = useState([
    {
      name: "chicken",
      author: "Jim",
      user: "https://i.pravatar.cc/100",
      instructions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      photo: "https://picsum.photos/200",
      likes: Math.floor(Math.random() * 100),
    },
    {
      name: "Veg",
      author: "Tim",
      user: "https://i.pravatar.cc/100",
      instructions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      photo: "https://picsum.photos/200",
      likes: Math.floor(Math.random() * 100),
    },
    {
      name: "Pudding",
      author: "Lynn",
      user: "https://i.pravatar.cc/100",
      instructions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      photo: "https://picsum.photos/200",
      likes: Math.floor(Math.random() * 100),
    },
  ]);

  return (
    <div className='cardContainer'>
      {recipeData.map((recipeData) => {
        return (
          <>
            <div className="card">
                <h1>{recipeData.name}</h1>
              <img src={recipeData.photo} alt="Food Image" />
              <div className="cardContent">
                <div className="author">
                  <img src={recipeData.user} />
                  <div className="name">{recipeData.author}</div>
                </div>
                <p>{recipeData.instructions}</p>
              </div>

              <div className="footer">
                
                <div className="stats">
                  <img
                    className="upvote"
                    src={BiUpArrowCircle}
                    onClick={console.log('up voted')}
                    alt="Upvote"
                    />
                  <img
                    className="downvote"
                    src={BiDownArrowCircle}
                    onClick={console.log('down voted')}
                    alt="down"
                  />
                  <div className="stat">{recipeData.likes}</div>
                </div>
              </div>
            </div>

            {/* <div style={{width:900, marginTop: 20}}>

          <CardColumns>

            <Card className="recipe cards" style={{ width: "18rem" }}>
              <Card.Title>{recipeData.name}</Card.Title>
              <Card.Subtitle>{recipeData.author}</Card.Subtitle>
              <img className='userimg' src={recipeData.user} alt='user image'></img>
              <Card.Img variant="top" src={recipeData.photo} className="p-2" />
              <Card.Body>
                <Card.Text>{recipeData.instructions}</Card.Text>
                <Card.Text>Likes: {recipeData.likes}</Card.Text>
                <Card.Link> See full recipe </Card.Link>
                <Button variant="primary">Like</Button>
              </Card.Body>
            </Card>

          </CardColumns>

          </div> */}
          </>
        );
      })}
    </div>
  );
};

export default RecipeCard;
