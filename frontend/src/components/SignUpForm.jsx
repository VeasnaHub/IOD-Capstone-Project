import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import axios from 'axios';

function SignUpForm() {
    const [result, setResult] = useState('');
    const { handleUpdateUser } = useUserContext();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const userEmail = data.get('email');
        const userPassword = data.get('password');
        const userDateOfBirth = data.get('dateOfBirth');

        // Validate age
        const today = new Date();
        const birthDate = new Date(userDateOfBirth);
        const age = today.getFullYear() - birthDate.getFullYear();

        if (age < 18) {
            setResult("User must be 18 years of age or older to create an account.");
            return;
        }

        // Continue with registration
        axios.post('/api/users/register', {
            email: userEmail,
            password: userPassword,
            dateOfBirth: userDateOfBirth,
        }).then(response => {
            const result = response.data.result;
            const user = response.data.data;
            console.log(user);

            setResult(result);
            if (user) {
                handleUpdateUser(user);
                navigate('/profile');
            }
        }).catch(err => {
            console.log(err);
            setResult(err.response.data.result);
        });
    };

    return (
        <form className="SignUpForm" onSubmit={handleSubmit}>
            <h1 className="l-font green-font bold-font">SIGN <span className="l-font yellow-font bold-font">UP</span></h1>
            <input
                name="email"
                id="email"
                placeholder="Email"
            />
            <div className="password-input-container">
                <input
                    name="password"
                    id="password"
                    type="password"
                    placeholder="Password"
                />
            </div>
            <input
                name="dateOfBirth"
                id="dateOfBirth"
                placeholder="Date of Birth (YYYY-MM-DD)"
            />
            <p className="s-font grey-font" style={{ marginTop: "0px"}}>User must be 18 years of age or older to be able to create an account.</p>
            <button className="green-button" type="submit">CREATE AN ACCOUNT</button>
            {result && <p className="error-message">{result}</p>}
            <p>
                <a href="/signin">Already have an account? Please log in.</a>
            </p>
        </form>
    );
}

export default SignUpForm;
