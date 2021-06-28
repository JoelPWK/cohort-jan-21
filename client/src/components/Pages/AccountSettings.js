import React, { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";
import Axios from "axios";

const AccountDetails = () => {
    const userId = localStorage.getItem(`userId`);
    const userEmail = localStorage.getItem(`userEmail`);

    const [emailFormData, setEmailFormData] = useState({
        currentEmail: ``,
        newEmail: ``,
    });

    const [deleteConfirm, setDeleteConfirm] = useState(false);

    //Initial state of alert
    const [alert, setAlert] = useState({
        msg: ``,
        type: ``,
        showing: false,
    });

    //Deconstructing the email form data for ease of use
    const { currentEmail, newEmail } = emailFormData;

    //Set the state of the form data when user types in the input
    const changeEmailForm = (e) =>
        setEmailFormData({ ...emailFormData, [e.target.name]: e.target.value });

    //Creating an alert function to remove an alert after a set time, currently set at 5 sec
    const alertHandler = (msg, type, showing = true) => {
        setAlert({ ...alert, msg: msg, type: type, showing: showing });
        if (msg.length > 0) {
            setTimeout(() => {
                alertHandler(``, ``, false);
            }, 5000);
        }
    };

    const submitEmailChange = async (e) => {
        e.preventDefault();

        if (currentEmail !== userEmail) {
            alertHandler(`Current email address is incorrect`, `alert-danger`);
        }
        try {
            await Axios.put(`http://localhost:3001/users/${userId}`, {
                email: newEmail,
            });
            alertHandler(`Email successfully updated`, `alert-success`);
            localStorage.setItem(`userEmail`, newEmail);
        } catch (err) {
            alertHandler(`Error: ${err}`, `alert-danger`);
        }
    };

    const deleteAccount = async () => {
        try {
            await Axios.delete(`http://localhost:3001/users/${userId}`);
            setDeleteConfirm(false);
            window.location.reload(false);
            localStorage.removeItem(`userId`);
            localStorage.removeItem(`gravatar`);
            localStorage.removeItem(`userEmail`);
        } catch (err) {
            alertHandler(`Error: ${err}`, `alert-danger`);
        }
    };

    return (
        <div className="mx-auto text-center w-50">
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
            Change Email Address?
            <form onSubmit={(e) => submitEmailChange(e)}>
                {/* Current email address input */}
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">
                        Current Email:
                    </label>
                    <div className="col-sm-10">
                        <input
                            className="form-control"
                            type="email"
                            placeholder="Current Email Address"
                            name="currentEmail"
                            value={currentEmail}
                            onChange={(e) => changeEmailForm(e)}
                            required
                        />
                    </div>
                </div>
                {/* New email address input */}
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">
                        New Email:
                    </label>
                    <div className="col-sm-10">
                        <input
                            className="form-control"
                            type="email"
                            placeholder="New Email Address"
                            name="newEmail"
                            value={newEmail}
                            onChange={(e) => changeEmailForm(e)}
                            required
                        />
                    </div>
                </div>
                {/* Submit button */}
                <Button className="mb-4" variant="primary" type="submit">
                    Update email address
                </Button>
            </form>
            <br />
            {deleteConfirm ? (
                <div className="text-center py-2">
                    Are you sure you want to delete your user account? <br />
                    This action cannot be undone.
                    <br />
                    <Button
                        className="btn-danger mx-2"
                        onClick={() => deleteAccount()}
                    >
                        Yes - delete
                    </Button>
                    <Button
                        className="btn-success mx-2"
                        onClick={() => setDeleteConfirm(false)}
                    >
                        No - go back
                    </Button>
                </div>
            ) : (
                <Button
                    className="btn-danger"
                    onClick={() => setDeleteConfirm(true)}
                >
                    Delete Account?
                </Button>
            )}
        </div>
    );
};

export default AccountDetails;
