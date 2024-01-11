import Logo from "./Logo";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <div className="Footer">
      <Logo style={{ fontSize: '30px', textShadow: "3px 3px 4px rgba(255, 255, 255, 0.3)" }}/>
      <div>
        <h3 className="m-font white-font bold-font">DOWNLOAD</h3>
        <li className="s-font white-font">IOS App</li>
        <li className="s-font white-font">Android App</li>
      </div>
      <div>
        <h3 className="m-font white-font bold-font">SERVICES</h3>
        <li className="s-font white-font">How it works</li>
        <li className="s-font white-font">FAQ</li>
      </div>
      <div>
        <h3 className="m-font white-font bold-font">COMPANY</h3>
        <li className="s-font white-font">Terms & Conditions</li>
        <li className="s-font white-font">Privacy Policy</li>
      </div>
      <div style={{ textAlign: "" }}>
        <h3 className="m-font white-font bold-font">GET IN TOUCH</h3>
        <div style={{ textAlign: "center" }}>
          <EmailIcon />
          <TwitterIcon />
          <FacebookIcon />
        </div>
      </div>
    </div>
  );
}

export default Footer;
