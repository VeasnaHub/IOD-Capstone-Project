import Button from "./Button";

function SignInForm() {
    return (
        <form className="SignInForm">
            <h1 className="l-font green-font bold-font">SIGN <span className="l-font yellow-font bold-font">IN</span></h1>
            <input placeholder="Email"/>
            <input placeholder="Password"/>
            <Button background="yellow-button" name="SUBMIT"/>
        </form>
    )
}

export default SignInForm;