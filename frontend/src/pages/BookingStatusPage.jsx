import BookingStatusBody from "../components/BookingStatusBody";
import DashBoardTitle from "../components/DashBoardTitle";
import Footer from "../components/Footer";
import LoggedNavBar from "../components/LoggedNavBar";
import NavBarHome from "../components/NavBarHome";

function BookingStatusPage() {
    return (
        <div className="BookingStatusPage">
            <LoggedNavBar />
            <DashBoardTitle title="BOOKING STATUS"/>
            <BookingStatusBody />
            <Footer />

        </div>
    )
}

export default BookingStatusPage;