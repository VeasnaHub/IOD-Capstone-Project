import Button from "./Button";

function SignUpForm() {
    return (
        <form className="SignUpForm">
            <h1 className="l-font green-font bold-font">SIGN <span className="l-font yellow-font bold-font">UP</span></h1>
            <input placeholder="Email"/>
            <input placeholder="Password"/>
            <input placeholder="Date of Birth"/>
            <p className="s-font grey-font" style={{ marginTop: "0px"}}>User must be 18 years of age or older to be able to create an account.</p>
            <Button background="green-button" name="CREATE AN ACCOUNT" />
        </form>
    )
}

export default SignUpForm;