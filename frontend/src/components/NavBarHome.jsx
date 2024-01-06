import Logo from "./logo";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function NavBarHome() {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`NavBarHome ${isMenuOpen ? "menu-open" : ""}`}>
      <Logo />
      <nav className={`nav-container ${isMenuOpen ? "menu-open" : ""}`}>
        <button className="default-button" onClick={() => navigate("/")}>HOME</button>
        <button className="default-button">HOW IT WORKS</button>
        <button className="default-button">COMMUNITY</button>
        <button className="default-button" onClick={() => navigate("/signin")}>SIGN IN</button>
        <button className="green-button" onClick={() => navigate("/signup")}>SIGN UP</button>
      </nav>
      <button className="hamburger-icon" onClick={handleMenuToggle}>☰</button>
    </div>
  );
}

export default NavBarHome;
