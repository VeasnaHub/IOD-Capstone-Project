import Logo from "./logo";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LoggedNavBar() {

  const navigate = useNavigate();
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
        <button className="default-button" onClick={() => navigate("/loggedout")}>LOG OUT</button>
        <button className="green-button">USERNAME</button>
      </nav>
        </div>
    )
}

export default LoggedNavBar;
