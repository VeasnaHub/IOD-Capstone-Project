import Logo from "./Logo";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserContext } from "../context/UserContext";

function LoggedNavBar() {
  const navigate = useNavigate();
  const { currentUser, handleUpdateUser } = useUserContext();
  const [loggedIn, setLoggedIn] = useState(currentUser.firstName);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Toggle the dropdown for managing trips
  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Toggle the menu for responsive design
  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Handle the logout functionality
  const handleLogout = () => {
    localStorage.removeItem("user");
    handleUpdateUser({});
    navigate("/loggedout");
  };

  return (
    <div className={`NavBarHome ${isMenuOpen ? "menu-open" : ""}`}>
      <Logo style={{ fontSize: "30px", textShadow: "2px 3px 4px rgba(0, 0, 0, 0.2)" }} />
      <nav className={`nav-container ${isMenuOpen ? "menu-open" : ""}`}>
        <button className="default-button">COMMUNITY</button>
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
        <button className="user-button">
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
