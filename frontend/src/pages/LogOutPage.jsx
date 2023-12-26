import Footer from "../components/Footer";
import LogOutPageBody from "../components/LogOutPageBody";
import NavBarHome from "../components/NavBarHome";

function LogOutPage() {
    return (
        <div className="LogOutPage">
            <NavBarHome />
            <LogOutPageBody />
            <Footer />
        </div>
    )
}

export default LogOutPage;