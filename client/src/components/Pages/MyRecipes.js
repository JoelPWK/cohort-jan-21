import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Axios from "axios";

const MyRecipes = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const loggedUser = localStorage.getItem("userId")
  
  
 

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


  return (
    <Container>
      <h1>My Recipes</h1>
      <div className="cardContainer">
        {posts.map((post)=>{
          if(post.author === loggedUser) {
            return(
              <div className="card" key={post._id}>
              <div className="card-body>">
                <div className="card-header">
                  <h2>{post.name}</h2>

                <img className="userImg" src={post.gravatar} alt = "avatar"/>

                </div>

                <p>{post.instructions}</p>
                <p>{post.ingredients}</p>
              </div>
                </div>

            )
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

                <img className="userImg" src={post.gravatar} alt = "avatar"/>

                </div>
                  <h4>{localStorage.getItem("userId")}</h4>

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
