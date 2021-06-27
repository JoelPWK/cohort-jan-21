import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Button, Modal } from "react-bootstrap";
import Axios from "axios";
import EmptyRecipes from "../Pages/EmptyRecipes"


const MyRecipes = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const loggedUser = localStorage.getItem("userId");
    const [modalPost, setModalPost] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await Axios.get(
                    "http://localhost:3001/recipe/"
                );
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

                                        <img
                                            className="userImg"
                                            src={post.gravatar}
                                            alt="avatar"
                                        />
                                    </div>

                                    <p>{post.instructions}</p>
                                    <p>{post.ingredients}</p>
                                </div>
                            </div>
                        );
                    } 
                })}
            </div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Recipe Title: {modalPost.name}
                        <br />
                        Recipe created by: {modalPost.author}
                    </Modal.Title>
                </Modal.Header>
                <img
                    src={modalPost.photo}
                    alt="food image"
                    width="200"
                    className="modalImg"
                ></img>
                <Modal.Body>
                    Instructions: <br />
                    {modalPost.instructions}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <h1>All Recipes</h1>
            <div className="cardContainer">
                {posts.map((post) => {
                    return (
                        <div className="card" key={post._id}>
                            <div className="card-body>">
                                <div className="card-header">
                                    <h2>{post.name}</h2>
                                    <h4>{post._id}</h4>

                                    <img
                                        className="userImg"
                                        src={post.gravatar}
                                        alt="avatar"
                                    />
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
