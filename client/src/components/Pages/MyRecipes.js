import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Axios from "axios";

const MyRecipes = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const username = localStorage.getItem("userId")
  console.log(`user:${username}`)
  const gravatar = localStorage.get("gravatar")
  console.log(`gravatar:${gravatar}`)

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
        {posts.map((post) => {
          return (
            <div className="card">
              <div className="card-body>">
                <div className="card-header">
                  <h2>{post.name}</h2>

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
