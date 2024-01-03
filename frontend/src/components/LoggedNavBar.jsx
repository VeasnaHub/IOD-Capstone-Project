import Logo from "./logo";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserContext } from "../context/UserContext";

function LoggedNavBar() {

  const navigate = useNavigate();
  const { currentUser, handleUpdateUser } = useUserContext();
  const [loggedIn, setLoggedIn] = useState(currentUser.firstName);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="NavBarHome">
      <Logo />
      <nav className="nav-container">
        <button className="default-button">HOME</button>
        <button className="default-button" onClick={() => navigate("/trips")}>SEARCH TRIPS</button>
        <div className="dropdown-container">
          <button className="default-button" onClick={handleDropdownToggle}>MANAGE TRIP</button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <button className="green-button" onClick={() => navigate("/bookings")}>BOOKING STATUS</button>
              <button className="green-button" onClick={() => navigate("/requests")}>BOOKING REQUEST</button>
              <button className="green-button" onClick={() => navigate("/offeredtrips")}>VIEW/ADD TRIP</button>
            </div>
          )}
          </div>
        <button className="default-button" onClick={() => { handleUpdateUser({}); setLoggedIn(false); navigate("/loggedout")}}>LOG OUT</button>
        <button className="default-button green-font">Welcome {currentUser.firstName}!</button>
      </nav>
        </div>
    )
}

export default LoggedNavBar;
