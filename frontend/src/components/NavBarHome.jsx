import Logo from "./logo";
import { useNavigate } from "react-router-dom";

function NavBarHome() {

  const navigate = useNavigate();
  
  return (
    <div className="NavBarHome">
      <Logo />
      <nav className="nav-container">
        <button className="default-button" onClick={() => navigate("/")}>HOME</button>
        <button className="default-button">HOW IT WORKS</button>
        <button className="default-button">CONTACT US</button>
        <button className="default-button" onClick={() => navigate("/signin")}>SIGN IN</button>
        <button className="green-button" onClick={() => navigate("/signup")}>SIGN UP</button>
      </nav>
    </div>
  )
}
export default NavBarHome;
