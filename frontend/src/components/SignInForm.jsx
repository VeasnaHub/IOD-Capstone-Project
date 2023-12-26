import { useNavigate } from "react-router-dom";

function SignInForm() {

    const navigate = useNavigate();

    return (
        <form className="SignInForm">
            <h1 className="l-font green-font bold-font">SIGN <span className="l-font yellow-font bold-font">IN</span></h1>
            <input placeholder="Email"/>
            <input placeholder="Password"/>
            <button className="yellow-button" onClick={() => navigate("/trips")}>SUBMIT</button>
        </form>
    )
}

export default SignInForm;