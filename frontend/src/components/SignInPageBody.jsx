import Logo from "./logo";
import SignInForm from "./SignInForm";

function SignInPageBody() {
  return (
    <div className="SignInPageBody">
      <div className="body-item">
        <p className="l-font green-font light-font">
          Driving green, sharing smiles with <Logo />!
        </p>
        <img
          className="body-item"
          src="../src/assets/Signinpage.jpg"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="body-item">
        <SignInForm />
      </div>
    </div>
  );
}

export default SignInPageBody;
