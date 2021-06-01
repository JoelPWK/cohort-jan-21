import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoggedNav from "./LoggedNav";
import LoggedOutNav from "./LoggedOutNav";
import React, { useEffect, useState } from "react";
import Axios from "axios";

function Navigation() {
  const [state, setState] = useState({
    LoggedIn: false,
    email: "",
    password: "",
  });

  const toggleLogIn = () => {
    setState({
      LoggedIn: true,
      email: document.getElementById("emailAdd").value,
      password: document.getElementById("password").value,
    });
    
  };

  const toggleLogOut = () => {
    setState({
      LoggedIn: false,
    });
  };

  useEffect(() => {
    const loginData = {
        email: state.email,
        password: state.password
    }
      if (state.LoggedIn === true) {
          console.log(`Logged in!`)
        // Axios.post("https://localhost:3001/login", loginData)
      }
      console.log(loginData.email, loginData.password)
  }, [state.LoggedIn])

  if (state.LoggedIn === true) {
    
    return (
      <LoggedNav
        email={state.email}
        password={state.password}
        logout={toggleLogOut}
      />
    );
  } else {
    return (
      <LoggedOutNav
        email={state.email}
        password={state.password}
        login={toggleLogIn}
      />
    );
  }
}

export default Navigation;
