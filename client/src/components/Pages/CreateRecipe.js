import React, { Fragment, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import ImageUploading from 'react-images-uploading';
import './CreateRecipe.css'

const CreateRecipe = () => {
    const [formData, setFormData] = useState({
        name: ``,
        ingredients: ``,
        instructions: ``,
        tools: ``,
        estimatedTime: ``,
        author: localStorage.getItem(`userId`),
        gravatar: localStorage.getItem(`gravatar`),
    });

    //Initial state of alert
    const [alert, setAlert] = useState({
        msg: ``,
        type: ``,
        showing: false,
    });

    const {
        name,
        ingredients,
        instructions,
        tools,
        estimatedTime,
        author,
        gravatar,
    } = formData;

    //Set the state of the form data when user types in the input
    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    //Creating an alert function to remove an alert after a set time, currently set at 5 sec
    const alertHandler = (msg, type, showing = true) => {
        setAlert({ ...alert, msg: msg, type: type, showing: showing });
        if (msg.length > 0) {
            setTimeout(() => {
                alertHandler(``, ``, false);
            }, 5000);
        }
    };

    //TODO: imageUpload
    //Image upload
    const [images, setImages] = useState([])
    const maxNumber = 2;

    const imageChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList)
        setImages(imageList);
    };

    //Create recipe button used async cause it will send an API request
    const onSubmit = async (e) => {
        e.preventDefault();

        const recipeData = {
            name: name,
            ingredients: ingredients,
            instructions: instructions,
            tools: tools,
            estimatedTime: estimatedTime,
            author: author,
            gravatar: gravatar,
            image: images.data_url
        };

        await Axios.post(`http://localhost:3001/recipe/add-recipe`, recipeData);
        alertHandler(`Recipe created`, `alert-success`);
        window.location.href = `/dashboard`;
    };

    return (
        <>
            <Container className="text-center">
                <h1>Create Recipe</h1>
                <p className="lead"></p>
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

                <form onSubmit={(e) => onSubmit(e)}>
                    {/* Recipe Name input */}
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">
                            Recipe Name
                        </label>
                        <div className="col-sm-10">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Give your recipe a title..."
                                name="name"
                                value={name}
                                onChange={(e) => onChange(e)}
                                required
                            />
                        </div>
                    </div>

                    {/* Ingredients field */}
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">
                            Ingredients
                        </label>
                        <div className="col-sm-10">
                            <textarea
                                className="form-control"
                                type="text"
                                placeholder="List the ingredients used here (*separate with a comma)"
                                name="ingredients"
                                value={ingredients}
                                onChange={(e) => onChange(e)}
                                required
                            />
                            <small className="text-muted float-left">
                                Separate items with a comma
                            </small>
                        </div>
                    </div>

                    {/* Tools field */}
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">
                            Tools Used
                        </label>
                        <div className="col-sm-10">
                            <textarea
                                className="form-control"
                                type="text"
                                placeholder="List the tools used here (*separate with a comma)"
                                name="tools"
                                value={tools}
                                onChange={(e) => onChange(e)}
                                required
                            />
                            <small className="text-muted float-left">
                                Separate items with a comma
                            </small>
                        </div>
                    </div>

                    {/* Instructions field */}
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">
                            Recipe instructions{" "}
                        </label>
                        <div className="col-sm-10">
                            <textarea
                                className="form-control"
                                type="text"
                                placeholder="Tell us how you made your dish"
                                name="instructions"
                                id="instructions-input"
                                value={instructions}
                                onChange={(e) => onChange(e)}
                                required
                            />
                        </div>
                    </div>

                    {/* Time input */}
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">
                            Estimated time to make (minutes)
                        </label>
                        <div className="col-sm-10">
                            <input
                                className="form-control"
                                type="number"
                                placeholder="Let us know how long your recipe will take (in minutes)"
                                name="estimatedTime"
                                value={estimatedTime}
                                onChange={(e) => onChange(e)}
                                required
                            />
                        </div>
                    </div>
                    {/* <div className="form-group row">
                        <label className="col-sm-2 col-form-label">
                            Image upload
                        </label>
                        <button onClick={uploadImage}>Image Upload</button>
                    </div> */}

                    {/* Submit button */}

                    {/* Image upload */}
                    <div className='uploadImageContainer'>
                    <ImageUploading
                        multiple
                        value={images}
                        onChange={imageChange}
                        maxNumber={maxNumber}
                        dataURLKey="data_url"
                    >
                        {({
                            imageList,
                            onImageUpload,
                            onImageRemoveAll,
                            onImageUpdate,
                            onImageRemove,
                            isDragging,
                            dragProps,
                        }) => (
                            // write your building UI
                            <div className="upload__image-wrapper">
                                <Button className="btn btn-success mb-4"
                                    style={isDragging ? { color: 'red' } : undefined}
                                    onClick={onImageUpload}
                                    {...dragProps}
                                >
                                    Click or Drop here
                                </Button>
                                &nbsp;
                                <Button className="btn btn-danger mb-4" onClick={onImageRemoveAll}>Remove all images</Button>
                                {imageList.map((image, index) => (
                                    <div key={index} className="image-item">
                                        <img src={image['data_url']} alt="user's recipe" width="150" />
                                        <div className="image-item__btn-wrapper">
                                            <Button className="btn btn-warning mr-2" onClick={() => onImageUpdate(index)}>Update</Button>
                                            <Button className="btn btn-danger" onClick={() => onImageRemove(index)}>Remove</Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </ImageUploading>
                    </div>

                    <Button className="mb-4" variant="primary" type="submit">
                        Create recipe
                    </Button>
                </form>
            </Container>
        </>
    );
};

export default CreateRecipe;
