import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import NavBarHome from "../components/NavBarHome";
import Logo from "../components/logo";

function RegistrationConfirmPage() {
  const navigate = useNavigate();

  return (
    <div className="RegistrationConfirmPage">
      <NavBarHome />
      <div className="in-body">
        <p className="l-font green-font" style={{ paddingLeft: "20px" }}>
          Your account has been successfully{" "}
          <span className="l-font yellow-font">created</span>.
        </p>
        <p className="l-font green-font" style={{ paddingLeft: "20px" }}>
          Go <Logo />, Go{" "}
          <button className="yellow-button" onClick={() => navigate("/signin")}>
            SIGN IN
          </button>
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default RegistrationConfirmPage;
