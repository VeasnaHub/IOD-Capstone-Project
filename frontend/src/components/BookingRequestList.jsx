import { useEffect, useState } from "react";
import axios from "axios";
import { useUserContext } from "../context/UserContext";
import useBookingRequests from "../hooks/useBookingRequests";

function BookingRequestList() {
  const { currentUser } = useUserContext();

  // Using the custom hook to fetch booking requests
  const { bookingRequests, message, fetchData } =
    useBookingRequests(currentUser);

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Confirm a booking request
  const handleConfirm = async (bookingId) => {
    try {
      await axios.put(`/api/bookings/${bookingId}`, {
        status: "Confirmed",
      });
      fetchData();
    } catch (error) {
      console.error(error.message);
    }
  };

  // Update available seats when confirming a booking request
  const handleUpdateSeats = async (
    originalAvailableSeats,
    requestedSeat,
    tripId
  ) => {
    try {
      const updatedAvailableSeats = originalAvailableSeats - requestedSeat;

      await axios.put(`/api/trips/${tripId}`, {
        availableSeats: updatedAvailableSeats,
      });
    } catch (error) {
      console.error("Error updating seats:", error.message);
    }
  };

  // Decline a booking request
  const handleDecline = async (bookingId) => {
    try {
      await axios.put(`/api/bookings/${bookingId}`, {
        status: "Declined",
      });
      fetchData();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="BookingRequestList in-body">
      {bookingRequests.length === 0 ? (
        <div className="no-booking-request">
          <div className="body-item">
            <p>You have no booking requests being sent through!</p>
            <p>
              Want to review your offered trips?{" "}
              <button className="green-button" href="/offeredtrips">
                CLICK HERE
              </button>
            </p>
          </div>
          <img
            className="body-item"
            src="../src/assets/Nobookingrequest.jpg"
            style={{ width: "400px", height: "auto" }}
          />
        </div>
      ) : (
        <table className="fixed-size-table booking-request-table">
          <thead>
            <tr>
              <th>Booking #</th>
              <th className="trip">Trip #</th>
              <th>Departure</th>
              <th>Destination</th>
              <th className="service-day">Service Day</th>
              <th className="departure-time">Time</th>
              <th className="seats">Requested Seats</th>
              <th className="unit-price">Unit Price</th>
              <th>Status</th>
              <th className="action-column">Action</th>
            </tr>
          </thead>
          <tbody>
            {bookingRequests.map((bookingRequest) => (
              <tr key={bookingRequest.id}>
                <td>{bookingRequest.id}</td>
                <td className="trip">{bookingRequest.tripId}</td>
                <td>{bookingRequest.trip.departure}</td>
                <td>{bookingRequest.trip.destination}</td>
                <td className="service-day">
                  {bookingRequest.trip.serviceDay}
                </td>
                <td className="departure-time">
                  {bookingRequest.trip.departureTime.slice(0, 5)}
                </td>
                <td className="seats">{bookingRequest.requestedSeat}</td>
                <td className="unit-price">{bookingRequest.trip.unitPrice}</td>
                <td>{bookingRequest.status}</td>
                <td className="action-column">
                  <button
                    className="green-button"
                    onClick={() => {
                      handleConfirm(bookingRequest.id);
                      handleUpdateSeats(
                        bookingRequest.trip.availableSeats,
                        bookingRequest.requestedSeat,
                        bookingRequest.tripId
                      );
                    }}
                  >
                    Confirm
                  </button>
                  <button
                    className="yellow-button"
                    onClick={() => handleDecline(bookingRequest.id)}
                  >
                    Decline
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default BookingRequestList;
