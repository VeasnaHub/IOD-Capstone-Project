import BookingRequestBody from "../components/BookingRequestBody";
import DashBoardTitle from "../components/DashBoardTitle";
import Footer from "../components/Footer";
import LoggedNavBar from "../components/LoggedNavBar";

function BookingRequestPage() {
    return (
        <div className="BookingRequestPage">
            <LoggedNavBar />
            <DashBoardTitle title="BOOKING REQUEST" />
            <BookingRequestBody />
            <Footer />
        </div>
    )
}

export default BookingRequestPage;