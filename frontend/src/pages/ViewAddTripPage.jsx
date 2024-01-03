import AddTripDialog from "../components/AddTripDialog";
import DashBoardTitle from "../components/DashBoardTitle";
import Footer from "../components/Footer";
import LoggedNavBar from "../components/LoggedNavBar";
import OfferedTripBody from "../components/OfferedTripBody";


function ViewAddTripPage() {

    return (
        <div className="ViewAddTripPage">
            <LoggedNavBar />
            <DashBoardTitle title="YOUR OFFERED TRIPS"/>
            <AddTripDialog />
            <OfferedTripBody />
            <Footer />
        </div>
    )
}

export default ViewAddTripPage;