import React, { Fragment, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./BrowseRecipes.css";

const BrowseRecipes = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const loggedUser = localStorage.getItem("userId");
    const [modalPost, setModalPost] = useState({});
    const [show, setShow] = useState(false);
    const [deletePost, setDeletePost] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //holding values - non mvp:

    const holdingImg =
        "https://cdn.dribbble.com/users/88000/screenshots/2487367/shot.png";
    const holdingLikes = Math.floor(Math.random() * 100);

    const fetchPosts = async () => {
        try {
            const response = await Axios.get("http://localhost:3001/recipe/");
            setIsLoading(false);
            setPosts(response.data);
        } catch (e) {
            console.log("oops there is an issue");
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    if (isLoading) return <div>Loading...</div>;

    const closeModal = () => {
        handleClose();
        setModalPost({});
    };

    const modalLaunch = (post) => {
        handleShow();
        setModalPost({
            ...post,
            ingredients: post.ingredients.toString().replace(/,[s]*/g, ", "),
            tools: post.tools.toString().replace(/,[s]*/g, ", "),
        });
    };

    const deleteRecipeCard = async (id) => {
        try {
            await Axios.delete(`http://localhost:3001/recipe/${id}`);
            handleClose();
            setDeletePost(false);
            fetchPosts();
        } catch (e) {
            console.log(`error`);
        }
    };

    return (
        <Container>
            <h1>Browse Recipes</h1>
            <br />
            <div className="cardContainer">
                {posts.map((post) => {
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
                                <img
                                    className="foodImg"
                                    src={holdingImg}
                                    alt="recipe"
                                />
                                <p className="cardInstructions">
                                    Instructions: {post.instructions}
                                </p>
                                <p className="cardIngredients">
                                    Ingredients:{" "}
                                    {post.ingredients
                                        .toString()
                                        .replace(/,[s]*/g, ", ")}
                                </p>
                                <p>
                                    Estimate cooking time: {post.estimatedTime}{" "}
                                    mins
                                </p>
                                <p>
                                    <b>Likes: </b>
                                    {holdingLikes}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <Modal show={show} onHide={closeModal} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {modalPost.name}
                        <br />
                        <p>
                            Recipe created by:
                            <img
                                className="mx-3 userImg"
                                src={modalPost.gravatar}
                            ></img>
                        </p>
                    </Modal.Title>
                </Modal.Header>
                <img
                    src={holdingImg}
                    alt="food"
                    width="200"
                    className="foodImg"
                />
                <Modal.Body>
                    {modalPost.author === loggedUser ? (
                        <Fragment>
                            <Link
                                class="btn btn-large"
                                to={{
                                    pathname: "/edit-recipe",
                                    modalPost: modalPost,
                                }}
                            >
                                <i
                                    class="fa fa-pencil-square-o"
                                    aria-hidden="true"
                                />
                            </Link>
                            <a
                                class="btn btn-large"
                                onClick={() => setDeletePost(true)}
                            >
                                <i class="fa fa-trash-o" aria-hidden="true" />
                            </a>
                            <br />
                            {deletePost ? (
                                <div className="text-center py-2">
                                    Are you sure you want to delete this post?{" "}
                                    <br />
                                    This action cannot be undone.
                                    <br />
                                    <button
                                        onClick={() =>
                                            deleteRecipeCard(modalPost._id)
                                        }
                                    >
                                        Yes
                                    </button>
                                    <button
                                        onClick={() => setDeletePost(false)}
                                    >
                                        No
                                    </button>
                                </div>
                            ) : (
                                <Fragment />
                            )}
                        </Fragment>
                    ) : (
                        <Fragment />
                    )}
                    <p>
                        <b>
                            Estimated time to complete meal:{" "}
                            {modalPost.estimatedTime} mins
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
                    <Button variant="secondary" onClick={closeModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default BrowseRecipes;
