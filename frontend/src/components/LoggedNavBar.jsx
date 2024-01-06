import Logo from "./logo";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserContext } from "../context/UserContext";

function LoggedNavBar() {
  const navigate = useNavigate();
  const { currentUser, handleUpdateUser } = useUserContext();
  const [loggedIn, setLoggedIn] = useState(currentUser.firstName);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    handleUpdateUser({});
    navigate("/loggedout");
  };

  return (
    <div className={`NavBarHome ${isMenuOpen ? "menu-open" : ""}`}>
      <Logo />
      <nav className={`nav-container ${isMenuOpen ? "menu-open" : ""}`}>
        <button className="default-button">HOME</button>
        <button className="default-button" onClick={() => navigate("/trips")}>
          SEARCH TRIPS
        </button>
        <div className="dropdown-container">
          <button className="default-button" onClick={handleDropdownToggle}>
            MANAGE TRIP
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <button
                className="green-button"
                onClick={() => navigate("/bookings")}
              >
                BOOKING STATUS
              </button>
              <button
                className="green-button"
                onClick={() => navigate("/requests")}
              >
                BOOKING REQUEST
              </button>
              <button
                className="green-button"
                onClick={() => navigate("/offeredtrips")}
              >
                VIEW/ADD TRIP
              </button>
            </div>
          )}
        </div>
        <button className="default-button" onClick={handleLogout}>
          LOG OUT
        </button>
        <button className="default-button green-font">
          Welcome {currentUser.firstName}!
        </button>
      </nav>
      <button className="hamburger-icon" onClick={handleMenuToggle}>
        ☰
      </button>
    </div>
  );
}

export default LoggedNavBar;
