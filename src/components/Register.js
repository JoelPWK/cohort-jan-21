import React from "react";
import { useState } from "react";

function Register() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  console.log(email);
  console.log(password);

  const signup = (e) => {
      e.preventDefault()
    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
  };

  return (
    <div>
      <h1> Register page </h1>
      <form onSubmit={signup}>
        <input
          onChange={(e) => setemail(e.target.value)}
          placeholder="email address"
        />
        <br />
        <input
          onChange={(e) => setpassword(e.target.value)}
          placeholder="password" type='password'
        />
        <br />
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;
