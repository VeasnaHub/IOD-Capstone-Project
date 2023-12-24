import Logo from "./logo";
import Button from "./Button";

function LoggedNavBar() {
    return (
        <div className="NavBarHome">
          <Logo />
          <nav className="nav-container">
            <Button background="default-button" name="HOME" />
            <Button background="default-button" name="SEARCH TRIPS" />
            <Button background="default-button" name="MANAGE TRIPS" />
            <Button background="default-button" name="LOG OUT" />
            <Button background="green-button" name="USERNAME" />
          </nav>
        </div>
    );
}
    
export default LoggedNavBar;