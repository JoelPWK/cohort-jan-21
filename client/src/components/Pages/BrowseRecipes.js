import React, { Fragment, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./RecipeCards.css";

const BrowseRecipes = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const loggedUser = localStorage.getItem(`userId`);
    const [modalPost, setModalPost] = useState({});
    const [show, setShow] = useState(false);
    const [deletePost, setDeletePost] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Initial state of alert
    const [alert, setAlert] = useState({
        msg: ``,
        type: ``,
        showing: false,
    });

    //holding values - non mvp:

    const holdingImg = `https://cdn.dribbble.com/users/88000/screenshots/2487367/shot.png`;
    const holdingLikes = Math.floor(Math.random() * 100);

    const fetchPosts = async () => {
        try {
            const response = await Axios.get(`http://localhost:3001/recipe/`);
            setIsLoading(false);
            setPosts(response.data);
        } catch (err) {
            alertHandler(`${err}`, `alert-danger`);
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
            ingredients: post.ingredients.toString().replace(/,[s]*/g, `, `),
            tools: post.tools.toString().replace(/,[s]*/g, `, `),
        });
    };

    const deleteRecipeCard = async (id) => {
        try {
            await Axios.delete(`http://localhost:3001/recipe/${id}`);
            handleClose();
            setDeletePost(false);
            fetchPosts();
        } catch (err) {
            alertHandler(`${err}`, `alert-danger`);
        }
    };

    //Creating an alert function to remove an alert after a set time, currently set at 5 sec
    const alertHandler = (msg, type, showing = true) => {
        setAlert({ ...alert, msg: msg, type: type, showing: showing });
        if (msg.length > 0) {
            setTimeout(() => {
                alertHandler(``, ``, false);
            }, 5000);
        }
    };

    return (
        <Container className="mt-3">
            {/* Check if there is an alert and show it, else return an empty fragment */}
            <Fragment>
                {alert.showing === true ? (
                    <div
                        className={`inline-block w-50 mx-auto alert ${alert.type}`}
                    >
                        {alert.msg}
                    </div>
                ) : (
                    <Fragment />
                )}
            </Fragment>
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
                                <div className="p-2">
                                    <p className="cardInstructions">
                                        Instructions: {post.instructions}
                                    </p>
                                    <p className="cardIngredients">
                                        Ingredients:{` `}
                                        {post.ingredients
                                            .toString()
                                            .replace(/,[s]*/g, `, `)}
                                    </p>
                                    <p>
                                        Estimate cooking time:{" "}
                                        {post.estimatedTime}
                                        {` `}
                                        mins
                                    </p>
                                    <p>
                                        <b>Likes: </b>
                                        {holdingLikes}
                                    </p>
                                </div>
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
                                    Are you sure you want to delete this post?
                                    {` `}
                                    <br />
                                    This action cannot be undone.
                                    <br />
                                    <Button
                                        className="btn-danger mx-2"
                                        onClick={() =>
                                            deleteRecipeCard(modalPost._id)
                                        }
                                    >
                                        Yes - delete
                                    </Button>
                                    <Button
                                        className="btn-success mx-2"
                                        onClick={() => setDeletePost(false)}
                                    >
                                        No - go back
                                    </Button>
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
                            Estimated time to complete meal:{` `}
                            {modalPost.estimatedTime} mins
                        </b>
                    </p>
                    <div className="modalToolsIngredients px-2">
                        <p>
                            <b>
                                <u>Tools </u>
                                {` `}
                            </b>
                            <br />
                            {modalPost.tools}
                        </p>
                        <p>
                            <b>
                                <u>Ingredients</u>
                                {` `}
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
