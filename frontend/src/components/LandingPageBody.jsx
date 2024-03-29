import { useNavigate } from "react-router-dom";
import Logo from "./Logo";

function LandingPageBody() {
  const navigate = useNavigate();

  return (
    <div className="LandingPageBody">
      <div className="body-item">
        <p className="l-font green-font light-font">
          Introducing <Logo />, your eco-friendly companion for shared
          commuting!
        </p>
        <p style={{ lineHeight: "1.3" }}>
          Embrace sustainable travel with our 'Go Green' initiative, connecting
          users seamlessly for eco-conscious carpooling. With a sleek interface,
          and acommitment to environmental responsibility, we make every ride a
          step towards a cleaner, healthier planet.
        </p>
        <p className="green-font bold-font">
          Join us in reducing carbon footprints, one shared journey at a time!
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <p className="l-font green-font light-font">
            Go carpooling, Go <Logo />, Go
          </p>
          <button className="green-button" onClick={() => navigate("/signup")}>
            SIGN UP
          </button>
        </div>
      </div>
      <div className="body-item">
        <img
          src="../src/assets/Homepage.jpg"
          alt="photo of yellow car and people"
          style={{ width: "110%", height: "auto" }}
        />
      </div>
    </div>
  );
}

export default LandingPageBody;
