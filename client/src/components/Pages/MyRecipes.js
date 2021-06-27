import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Axios from "axios";
import RecipeModal from "../RecipeCard/RecipeModal";
import { useParams } from "react-router-dom";

const MyRecipes = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const loggedUser = localStorage.getItem("userId")
  const [ singlePost, setSinglePost] = useState([])
  
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

  const modalLaunch = async (e) => {
    // const {id} = useParams();
    const id = posts._id

        // e.preventDefault();

        try {
            await Axios.get(
                `http://localhost:3001/recipe/${id}`
                )
                
            .then((response) => {
                if (response.data) {
                    setSinglePost({
                        singlePost: response.data,
                    });
                    console.log(response.data)
                } else {
                  console.log("no post matching id")

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
        {posts.map((post)=>{
          if(post.author === loggedUser) {
            return(
              <div className="card" key={post._id} onClick={() => modalLaunch()} >
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
            <div className="card" key={post._id} >
              <div className="card-body>">
                <div className="card-header">
                  <h2>{post.name}</h2>
                  <h4>{post._id}</h4>

                <img className="userImg" src={post.gravatar} alt = "avatar"/>

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
