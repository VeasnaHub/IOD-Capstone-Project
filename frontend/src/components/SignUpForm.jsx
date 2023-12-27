import { useNavigate } from "react-router-dom";

function SignUpForm() {

    const navigate = useNavigate();

    return (
        <form className="SignUpForm">
            <h1 className="l-font green-font bold-font">SIGN <span className="l-font yellow-font bold-font">UP</span></h1>
            <input placeholder="Email"/>
            <input placeholder="Password"/>
            <input placeholder="Date of Birth"/>
            <p className="s-font grey-font" style={{ marginTop: "0px"}}>User must be 18 years of age or older to be able to create an account.</p>
            <button className="green-button" onClick={() => navigate("/profile")} >CREATE AN ACCOUNT</button>
        </form>
    )
}

export default SignUpForm;