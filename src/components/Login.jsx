import React, { useState } from "react";
import discussionApi from "../api/discussionApi";
import "../styles/Login.scss";

export default function Login({ getUser }) {
  //Object that will hold email and password
  //until the validation is done
  const [credentials, setCredentials] = useState({});

  const [loading, setLoading] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading("Verifying...");

    await discussionApi //See if credentials match database
      .login(credentials)
      .then((response) => {
        if (response.data.success) getUser(response.data.user);
      })
      .catch((error) => {
        setLoading("");
        if (error.response.status === 400) {
          alert(error.response.data.message);
        } else alert("Some internal server error occured while validating");
      });
  } //handleSubmit ends here

  function handleChange(event) {
    //Function to handle input and store it in state
    const { value, name } = event.target;

    setCredentials({ ...credentials, [name]: value });
  }

  return (
    <div className="Login">
      <h2 className="title">Sign in with your email and password</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={credentials.email || ""}
          className="email-input"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password || ""}
          className="password-input"
          onChange={handleChange}
          required
        />
        <button type="submit" className="login-button">
          Sign In
        </button>
      </form>
      <h2 className="loading">{loading}</h2>
    </div>
  );
}
