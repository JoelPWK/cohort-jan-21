import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Button, Modal } from "react-bootstrap";
import Axios from "axios";
import "./MyRecipes.css";

const MyRecipes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const loggedUser = localStorage.getItem("userId");
  const [modalPost, setModalPost] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //holding values - non mvp:

  const holdingImg =
    "https://cdn.dribbble.com/users/88000/screenshots/2487367/shot.png";
  const holdingLikes = Math.floor(Math.random() * 100);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await Axios.get("http://localhost:3001/recipe/");
        console.log(response.data);
        setIsLoading(false);
        setPosts(response.data);
      } catch (e) {
        console.log("oops there is an issue");
      }
    }
    fetchPosts();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  const modalLaunch = (post) => {
    handleShow();
    setModalPost(post);
  };

  return (
    <Container>
      <h1>My Recipes</h1>
      <br />
      <div className="cardContainer">
        {posts.map((post) => {
          if (post.author === loggedUser) {
            return (
              <div
                className="card"
                key={post._id}
                onClick={() => modalLaunch(post)}
              >
                <div className="card-body>">
                  <div className="card-header">
                    <h2>{post.name}</h2>
                    <img className="userImg" src={post.gravatar} alt="avatar" />
                  </div>
                  <img className="foodImg" src={holdingImg} alt="recipe" />
                  <p className="cardInstructions">Instructions: {post.instructions}</p>
                  <p className="cardIngredients">Ingredients: {post.ingredients}</p>
                  <p>Estimate cooking time: {post.estimatedTime} mins</p>
                  <p>
                    <b>Likes: </b>
                    {holdingLikes}
                  </p>
                </div>
              </div>
            );
          }
        })}
      </div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalPost.name}
            <br />
            <p>Recipe created by:  
            <img className="mx-3 userImg" src={modalPost.gravatar}></img>

            </p>
          </Modal.Title>
        </Modal.Header>
        <img src={holdingImg} alt="food" width="200" className="foodImg" />
        <Modal.Body>
          {/* edit button */}
          <a class="btn btn-large">
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
          </a>
          {/* delete button */}
          <a class="btn btn-large">
            <i class="fa fa-trash-o" aria-hidden="true"></i>
          </a>
          <br />
          <p>
            <b>
              Estimated time to complete meal: {modalPost.estimatedTime} mins
            </b>
          </p>
          <div className="modalToolsIngredients">
            <p>
              <b>
                <u>Tools </u>{" "}
              </b>
              <br />
              {modalPost.tools}
            </p>
            <p>
              <b>
                <u>Ingredients</u>{" "}
              </b>
              <br />
              {modalPost.ingredients}
              <br />
            </p>
          </div>
          <br />
          <br />
          <b>Instructions:</b> <br />
          {modalPost.instructions}
          <br />
          <br />
          <p>Last updated on: {modalPost.updatedAt}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* <h1>All Recipes</h1>
      <div className="cardContainer">
        {posts.map((post) => {
          return (
            <div className="card" key={post._id}>
              <div className="card-body>">
                <div className="card-header">
                  <h2>{post.name}</h2>
                  <h4>{post._id}</h4>

                  <img className="userImg" src={post.gravatar} alt="avatar" />
                </div>

                <p>{post.instructions}</p>
                <p>{post.ingredients}</p>
              </div>
            </div>
          );
        })}
      </div> */}
    </Container>
  );
};

export default MyRecipes;
