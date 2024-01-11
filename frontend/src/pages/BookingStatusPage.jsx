import BookingList from "../components/BookingList";
import DashBoardTitle from "../components/DashBoardTitle";
import Footer from "../components/Footer";
import LoggedNavBar from "../components/LoggedNavBar";
import useBookings from "../hooks/useBookings";
import { useUserContext } from "../context/UserContext";
import { useEffect } from "react";

function BookingStatusPage() {

  const { currentUser } = useUserContext();
  const { bookings, message, fetchData } = useBookings(currentUser);

  
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="BookingStatusPage">
      <LoggedNavBar />
      <DashBoardTitle title="YOUR BOOKING STATUS" />
      <BookingList bookings={bookings} />
      <Footer />
    </div>
  );
}

export default BookingStatusPage;
