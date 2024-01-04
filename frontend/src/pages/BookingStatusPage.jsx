import BookingList from "../components/BookingList";
import DashBoardTitle from "../components/DashBoardTitle";
import Footer from "../components/Footer";
import LoggedNavBar from "../components/LoggedNavBar";

function BookingStatusPage() {
    return (
        <div className="BookingStatusPage">
            <LoggedNavBar />
            <DashBoardTitle title="YOUR BOOKING STATUS"/>
            <BookingList />
            <Footer />

        </div>
    )
}

export default BookingStatusPage;