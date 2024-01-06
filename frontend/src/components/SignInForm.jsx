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

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const isEmptyInput = Array.from(data.values()).some((value) => !value.trim());

        if (isEmptyInput) {
            setErrMsg("All input is required.");
            return;
        }

        let userEmail = data.get("email");
        let userPassword = data.get("password");

        let loggedInUser = null;

        try {
            setLoading(true);
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

        if (!loggedInUser) {
            let newAttempts = loginAttempts + 1;

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
                    <input name="email" id="email" placeholder="Email" />
                    <div className="password-input-container">
                        <input name="password" id="password" type="password" placeholder="Password" />

                    </div>
                    <button className="yellow-button" type="submit" disabled={loading}>
                        {loading ? "Logging in..." : "SUBMIT"}
                    </button>
                    {errMsg && <p className="error-message">{errMsg}</p>}
                    <p className="reset-password-link">
                        <a href="/reset-password">Forgot your password?</a>
                    </p>
                </form>
            ) : (
                navigate("/trip")
            )}
        </>
    );
}

export default SignInForm;
