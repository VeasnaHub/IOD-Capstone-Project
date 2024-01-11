import Logo from "./Logo";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function NavBarHome() {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Toggle the menu for responsive design
  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`NavBarHome ${isMenuOpen ? "menu-open" : ""}`}>
      <Logo style={{ fontSize: '30px', textShadow: "2px 3px 3px rgba(0, 0, 0, 0.2)" }} />
      <nav className={`nav-container ${isMenuOpen ? "menu-open" : ""}`}>
        <button className="default-button" onClick={() => navigate("/")}>
          HOME
        </button>
        <button className="default-button">HOW IT WORKS</button>
        <button className="default-button">COMMUNITY</button>
        <button className="default-button" onClick={() => navigate("/signin")}>
          SIGN IN
        </button>
        <button className="green-button" onClick={() => navigate("/signup")}>
          SIGN UP
        </button>
      </nav>
      <button className="hamburger-icon" onClick={handleMenuToggle}>
        ☰
      </button>
    </div>
  );
}

export default NavBarHome;
