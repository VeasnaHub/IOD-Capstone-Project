import Button from "./Button";
import Logo from "./logo";

function NavBarHome() {
  return (
    <div className="NavBarHome">
      <Logo />
      <nav className="nav-container">
        <li className="nav-item m-font bold-font">HOW IT WORKS</li>
        <li className="nav-item m-font bold-font">FAQ</li>
        <li className="nav-item m-font bold-font">CONACT US</li>
        <li className="nav-item m-font bold-font">SIGN IN</li>
        {/* <li className="nav-item m-font bold-font white-font green-button">SIGN UP</li> */}
        <Button name="SIGN UP" />
      </nav>
    </div>
  );
}

export default NavBarHome;
