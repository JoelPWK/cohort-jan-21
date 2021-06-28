import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const RecipeModal = (props) => {
    const recipeData = props.post;
    const [show, setShow] = useState(props.show);
    const handleClose = () => setShow(false);

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Recipe Title: {recipeData.name}
                    <br />
                    Recipe created by: {recipeData.author}
                </Modal.Title>
            </Modal.Header>
            <img
                src={recipeData.photo}
                alt="food image"
                width="200"
                className="modalImg"
            ></img>
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
    );
};

export default RecipeModal;
