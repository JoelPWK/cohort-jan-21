import React, { useState, useEffect } from "react";
import { Button, Modal} from "react-bootstrap";
import { BiUpArrowCircle } from "react-icons/bi";
import { BiDownArrowCircle } from "react-icons/bi";
import "./RecipeCard.css"
import axios from "axios";


const RecipeCard = (props) => {
  //fake data
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

  //actual data:
  const [recipe,getRecipe] = useState("");

  const url = "http://localhost:3001/recipe"

  const getAllRecipes = () => {
    axios.get("http://localhost:3001/recipe/")
    .then((response) => {
      const allRecipes = response.data.recipe.allRecipes;
      getRecipe(allRecipes)
    })
    .catch (err => console.error(`Error: ${err}`))
  }

  useEffect (()=> {
    getAllRecipes();

  }, [])

  console.log(`recipes:${recipe}`)

  //modal launch

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

//actual data

  return (
    <div className='cardContainer'>
      {recipeData.map((recipeData) => {
        return (
          <>
          <div className='card' onClick={handleShow}>
            <div className='card-body>'>
            <div className='card-header'>
              <h2>{recipeData.name}</h2>
              <img src={recipeData.user} className='userImg'/>

            </div>
              <img className='foodImg' src={recipeData.photo} alt='recipe photo'/>
              <p>{recipeData.instructions}</p>
            </div>
            <div>
            {BiUpArrowCircle}
            {BiDownArrowCircle}
            <button className='cardBtn' > save recipe</button>
            </div>


          </div>
{/* modal - stays hidden until card clicked */}
          <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            Recipe Title: {recipeData.name}
            <br />
            Recipe created by: {recipeData.author}
          </Modal.Title>
        </Modal.Header>
        <img src={recipeData.photo} alt='food image' width='200' className='modalImg'></img>
        <Modal.Body>
          Instructions: <br />
          {recipeData.instructions}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>    

          </>
        );
      })}
    </div>
    
  );
};

export default RecipeCard;
