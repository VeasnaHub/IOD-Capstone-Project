import Button from "./Button";
import Logo from "./logo";

function NavBarHome() {
  return (
    <div className="NavBarHome">
      <Logo />
      <nav className="nav-container">
        <Button background="default-button" name="HOW IT WORKS" />
        <Button background="default-button" name="FAQ" />
        <Button background="default-button" name="CONTACT" />
        <Button background="default-button" name="SIGN IN" />
        {/* <li className="nav-item m-font bold-font white-font green-button">SIGN UP</li> */}
        <Button background="green-button" name="SIGN UP" />
      </nav>
    </div>
  );
}

export default NavBarHome;
