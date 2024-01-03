import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useState } from "react";
import axios from 'axios';

function SignUpForm() {

    const [result, setResult] = useState('')
    const { currentUser, handleUpdateUser } = useUserContext();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        axios.post('/api/users/register', Object.fromEntries(data.entries()))
            .then(response => {
            let result = response.data.result;
            let user = response.data.data;
            console.log(user)
        
            setResult(result);
            if (user) {
                handleUpdateUser(user);
                navigate('/profile');
            }
        }).catch(err => {
            console.log(err)
            setResult(err.message + ': ' + err.response.data.result);
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
            <input
                name="password"
                id="password"
                placeholder="Password"
            />
            <input
                name="dateOfBirth"
                id="dateOfBirth"
                placeholder="Date of Birth YYYY-MM-DD"
            />
            <p className="s-font grey-font" style={{ marginTop: "0px"}}>User must be 18 years of age or older to be able to create an account.</p>
            <button className="green-button" type="submit">CREATE AN ACCOUNT</button>
        </form>
    )
}

export default SignUpForm;