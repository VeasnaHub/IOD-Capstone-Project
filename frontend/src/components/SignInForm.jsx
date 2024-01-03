import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useState } from "react";
import axios from "axios";

function SignInForm() {
    const { currentUser, handleUpdateUser } = useUserContext();
    const [loggedIn, setLoggedIn] = useState(currentUser.firstName);
    const [errMsg, setErrMsg] = useState('');
    const [loginAttempts, setLoginAttempts] = useState(0);
    const navigate = useNavigate();

    console.log(currentUser)

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
       
        let userEmail = data.get('email')
        let userPassword = data.get('password')

        let loggedInUser = null;

        try {
            let response = await axios.post('/api/users/login', {email: userEmail, password: userPassword});
            loggedInUser = response.data.data;
            console.log(loggedInUser)

        } catch (err) {
            console.log(err.message)
            setErrMsg(err.message + ': ' + err.response.data.result);
        }

        if (!loggedInUser) {
            let newAttempts = loginAttempts + 1

            if (newAttempts === 5) {
                setErrMsg('Maximum login attempts exceeded. You are blocked.');
            }
            else {
                setErrMsg('Unsuccessful login attempt #' + newAttempts + ' of 5');
            }
            setLoginAttempts(newAttempts)
            setLoggedIn(false)
        } else {
            setErrMsg('')
            handleUpdateUser(loggedInUser)
            setLoggedIn(true)
            navigate('/trips')
        }
    };
    
    return (
        <>
        { (!loggedIn) ?
            <form className="SignInForm" onSubmit={handleSubmit}>
                <h1 className="l-font green-font bold-font">SIGN <span className="l-font yellow-font bold-font">IN</span></h1>
                <input name="email" id="email" placeholder="Email"/>
                <input name="password" id="password" placeholder="Password"/>
                <button className="yellow-button" type="submit">SUBMIT</button>
            </form>
        : navigate('/trip') }
        </>
    )
}

export default SignInForm;