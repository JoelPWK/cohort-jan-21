import React, { Fragment, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
    //Initial state of form data
    const [formData, setFormData] = useState({
        email: '',
        password1: '',
        password2: ''
    })
    //Initial state of alert
    const [alert, setAlert] = useState({
        msg: '',
        type: '',
        showing: false
    })

    //Deconstructing the form data for ease of use
    const { email, password1, password2 } = formData;

    //Set the state of the form data when user types in the input
    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    //Creating an alert function to remove an alert after a set time, currently set at 5 sec
    const alertHandler = (msg, type, showing = true) => {
        setAlert({ ...alert, msg: msg, type: type, showing: showing })
        if (msg.length > 0) {
            setTimeout(() => {alertHandler('', '', false)}, 5000)
        }
    }

    //Registration button used async cause it will send an API request 
    const onSubmit = async (e) => {
        e.preventDefault();
        //Check if both passwords match and display alert
        if (password1 !== password2) {
            alertHandler('Passwords do not match', 'alert-danger')
        //if they match then save the user to database and display the alert             
        } else {
            //TODO:: register user in the database
            alertHandler('User registered', 'alert-success')
        }
    }

    //TODO:: get user's token and if token is authenticated redirect user to their dashboard

    return (
        //Used only Bootstrap CSS classes and the icon from fontawesome
        <Container className="text-center">
            <h1>Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            {/* Check if there is an alert and show it, else return an empty fragment */}
            <Fragment>
                {alert.showing === true ? (
                    <div className={`inline-block w-50 mx-auto alert ${alert.type}`}>
                    {alert.msg}
                    </div>
                ) : (
                    <Fragment></Fragment>
                )
                }            
            </Fragment>
            <form onSubmit={e => onSubmit(e)}>
                {/* Email address input */}
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input
                            className="form-control"
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            value={email}
                            onChange={e => onChange(e)}
                            required
                        />
                    </div>
                </div>
                {/* Create password input */}
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input
                            className="form-control"
                            type="password"
                            placeholder="Choose Password"
                            name="password1"
                            minLength="6"
                            value={password1}
                            onChange={e => onChange(e)}
                            required
                        />
                    </div>
                </div>
                {/* Re-enter password input */}
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Confirm Password</label>
                    <div className="col-sm-10">
                        <input
                            className="form-control"
                            type="password"
                            placeholder="Confirm Password"
                            name="password2"
                            minLength="6"
                            value={password2}
                            onChange={e => onChange(e)}
                            required
                        />
                    </div>
                </div>
                {/* Submit button */}
                <Button className="mb-4" variant="primary" type='submit'>Register</Button>
            </form>
            {/* Informing user if they want their specific avatar */}
            <small className="text-muted">
                This site uses Gravatar so if you want a profile image, use a
                Gravatar email
            </small>
        </Container>
    )
}

export default Register
