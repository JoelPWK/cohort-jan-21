import React, { Fragment, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
    const [formData, setFormData] = useState({
        email: '',
        password1: '',
        password2: ''
    })
    const [alert, setAlert] = useState({
        msg: '',
        type: ''
    })

    const { email, password1, password2 } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        if (password1 !== password2) {
            setAlert({ ...alert, msg: 'Passwords do not match', type: 'alert-danger' });
        } else {
            //register user in the database
            setAlert({ ...alert, msg: 'User registered', type: 'alert-success' });
        }
    }

    //get user's token and if token is authenticated redirect user to their dashboard

    return (
        <Container className="text-center">
            <h1>Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <Fragment>
                <div className={`alert ${alert.type}`}>{alert.msg}</div>
            </Fragment>
            <form onSubmit={e => onSubmit(e)}>
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
                        />
                    </div>
                </div>
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
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Confirm</label>
                    <div className="col-sm-10">
                        <input
                            className="form-control"
                            type="password"
                            placeholder="Confirm Password"
                            name="password2"
                            minLength="6"
                            value={password2}
                            onChange={e => onChange(e)}
                        />
                    </div>
                </div>
                <Button variant="primary" type='submit' value='Register'>Register</Button>
            </form>
            <small className="text-muted">
                This site uses Gravatar so if you want a profile image, use a
                Gravatar email
            </small>
        </Container>
    )
}

export default Register
