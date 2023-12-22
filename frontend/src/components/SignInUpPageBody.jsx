import Logo from "./logo";
import SignUpForm from "./SignUpForm";

function SignInUpPageBody() {
    return (
        <div className="SignInUpPageBody body-container">
            <div className="body-item">
                <p className="l-font green-font light-font">Your sustainable journey begins here with <Logo />!</p>
                <img className="body-item" src="../src/assets/Signinpage.png" alt="photo of yellow car and people" style={{ width: "100%", height: "auto" }}/>
            </div>
            <div className="body-item">
                <SignUpForm />
            </div>
        </div>
    )
}

export default SignInUpPageBody;