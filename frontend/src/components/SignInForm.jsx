import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import axios from "axios";

function SignInForm() {
  const { handleUpdateUser } = useUserContext();
  const [loggedIn, setLoggedIn] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Get form data
    const data = new FormData(event.currentTarget);

    // Check for empty inputs - this uses the some method to check if at least one element in the array satisfies the provided condition. In this case, it checks if the trimmed version of each value is empty. If any value is empty or contains only whitespace characters after trimming, isEmptyInput will be set to true.
    const isEmptyInput = Array.from(data.values()).some(
      (value) => !value.trim()
    );

    if (isEmptyInput) {
      setErrMsg("All input is required.");
      return;
    }

    // Extract email and password from form data
    let userEmail = data.get("email");
    let userPassword = data.get("password");

    let loggedInUser = null;

    try {
      setLoading(true);
      // Send login request to the server
      let response = await axios.post("/api/users/login", {
        email: userEmail,
        password: userPassword,
      });
      loggedInUser = response.data.data;
      console.log(loggedInUser);
    } catch (err) {
      console.log(err.message);
      setErrMsg(err.response.data.result);
    } finally {
      setLoading(false);
    }

    // Handle login success or failure
    if (!loggedInUser) {
      let newAttempts = loginAttempts + 1;

      // Check for maximum login attempts
      if (newAttempts === 5) {
        setErrMsg("Maximum login attempts exceeded. You are blocked.");
      } else {
        setErrMsg(
          `Incorrect password or email: Unsuccessful login attempt #${newAttempts} of 5. ${
            5 - newAttempts
          } attempts remaining.`
        );
      }

      setLoginAttempts(newAttempts);
      setLoggedIn(false);
    } else {
      setErrMsg("");
      handleUpdateUser(loggedInUser);
      setLoggedIn(true);
      navigate("/trips");
    }
  };

  return (
    <>
      {!loggedIn ? (
        <form className="SignInForm" onSubmit={handleSubmit}>
          <h1 className="l-font green-font bold-font">
            SIGN <span className="l-font yellow-font bold-font">IN</span>
          </h1>
          <input name="email" id="email" type="email" placeholder="Email" />
          <div className="password-input-container">
            <input
              name="password"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <button className="yellow-button" type="submit" disabled={loading}>
            {loading ? "Logging in..." : "SUBMIT"}
          </button>
          {errMsg && <p className="error-message">{errMsg}</p>}
          <p>
            <a href="/reset-password">Forgot your password?</a>
          </p>
          <p>
            <a href="/signup">No account? Please sign up.</a>
          </p>
        </form>
      ) : (
        navigate("/trip")
      )}
    </>
  );
}

export default SignInForm;
