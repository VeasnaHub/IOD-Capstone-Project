import Button from "../components/Button";
import Footer from "../components/Footer";
import NavBarHome from "../components/NavBarHome";
import Logo from "../components/logo";

function RegistrationConfirmPage() {
  return (
    <div className="RegistrationConfirmPage">
      <NavBarHome />
      <div className="in-body">
        <p className="l-font green-font" style={{paddingLeft: "20px"}}>Your account has been successfully <span className="l-font yellow-font">created</span>.</p>
        <p className="l-font green-font" style={{paddingLeft: "20px"}}>Go <Logo />, Go <Button background="yellow-button" name="SIGN IN" /></p>
      </div>
      <Footer />
    </div>
  );
}

export default RegistrationConfirmPage;
