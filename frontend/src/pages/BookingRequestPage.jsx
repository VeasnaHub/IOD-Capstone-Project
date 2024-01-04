import BookingRequestList from "../components/BookingRequestList";
import DashBoardTitle from "../components/DashBoardTitle";
import Footer from "../components/Footer";
import LoggedNavBar from "../components/LoggedNavBar";

function BookingRequestPage() {
    return (
        <div className="BookingRequestPage">
            <LoggedNavBar />
            <DashBoardTitle title="YOUR BOOKING REQUEST" />
            <BookingRequestList />
            <Footer />
        </div>
    )
}

export default BookingRequestPage;