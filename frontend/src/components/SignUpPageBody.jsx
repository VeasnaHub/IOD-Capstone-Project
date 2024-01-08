import SignUpForm from "./SignUpForm";
import Logo from "./logo";

function SignUpPageBody() {
  return (
    <div className="SignUpPageBody">
      <div className="body-item">
        <p className="l-font green-font light-font">
          Your sustainable journey begins here with <Logo />!
        </p>
        <img
          className="body-item"
          src="../src/assets/Signuppage.png"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="body-item">
        <SignUpForm />
      </div>
    </div>
  );
}

export default SignUpPageBody;
