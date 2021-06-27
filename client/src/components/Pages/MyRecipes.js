import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Axios from "axios";
import RecipeModal from "../RecipeCard/RecipeModal";
import { useParams } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

const MyRecipes = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const loggedUser = localStorage.getItem("userId");
  const [singlePost, setSinglePost] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //holding values - non mvp:

  const holdingImg = "https://cdn.dribbble.com/users/88000/screenshots/2487367/shot.png"
  const holdingLikes = Math.floor(Math.random() * 100)

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

  const modalLaunch = async (id) => {
    // e.preventDefault();
    try {
      await Axios.get(`http://localhost:3001/recipe/${id}`)
      .then((response) => {
        if (response.data) {
          // setSinglePost({
          //   singlePost: response.data,
          // });
          const meal = response.data          
          console.log(meal)
          handleShow()

        } else {
          console.log("no post matching id");
        }
      });
    } catch {
      console.log("this really didnt work");
    }
  };


  return (
    <Container>
      <h1>My Recipes</h1>
      <div className="cardContainer">
        {posts.map((post) => {
          if (post.author === loggedUser) {
            return (
              <div
                className="card"
                key={post._id}
                onClick={() => modalLaunch(post._id)}
              >
                <div className="card-body>">
                  <div className="card-header">
                    <h2>{post.name}</h2>
                    <img className="userImg" src={post.gravatar} alt="avatar" />
                  </div>

                  <img className="foodImg" src={holdingImg} alt="recipe"/>
                  <p>Instructions: {post.instructions}</p>
                  <p>Ingredients: {post.ingredients}</p>
                  <p>Estimate cooking time: {post.estimatedTime} mins</p>
                </div>

                {/* //modal */}

                <Modal show={show} animation={false}>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      Recipe Title: {singlePost.name}
                      <br />
                      Recipe created by: {singlePost.author}
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Instructions: <br />
                    {singlePost.instructions}
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={()=>handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            );
          }
        })}
      </div>
      <h1>All Recipes</h1>
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
      </div>
    </Container>
  );
};

export default MyRecipes;
