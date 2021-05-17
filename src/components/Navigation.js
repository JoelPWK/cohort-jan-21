import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoggedNav from './LoggedNav';
import LoggedOutNav from './LoggedOutNav';
import React, { useState } from 'react';


function Navigation() {
    const[state,setState]=useState({
        LoggedIn: true
    
    })

    const toggleLogIn = () => {
        setState({loggedIn:false})
      }

      const toggleLogOut = () => {
        setState({loggedIn:true})
        console.log(state)
      }
    

    if (state.LoggedIn === true) {
        return <LoggedNav logout={toggleLogOut} />
    } else {
        return <LoggedOutNav login={toggleLogIn} />
    }

}

export default Navigation
