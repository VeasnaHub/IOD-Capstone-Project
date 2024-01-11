import { Fragment, useEffect } from "react";
import axios from "axios";
import { useUserContext } from "../context/UserContext";
import useBookingRequests from "../hooks/useBookingRequests";
import { useNavigate } from "react-router-dom";

function BookingRequestList() {
  
  const { currentUser } = useUserContext();
  const navigate = useNavigate();

  // Using the custom hook to fetch booking requests
  const { bookingRequests, message, fetchData } = useBookingRequests(currentUser);

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
              Review your offered trips or add new trip?{" "}
              <button 
                className="green-button"
                onClick={() => navigate("/offeredtrips")}
              >
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
        <Fragment>
          <table className="fixed-size-table booking-request-table desktop-table-booking-request">
            <thead>
              <tr>
                <th>Booking #</th>
                <th className="trip">Trip #</th>
                <th>Departure</th>
                <th>Destination</th>
                <th className="service-day">Service Day</th>
                <th className="departure-time">Depart Time</th>
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
                  <td className="unit-price">
                    {bookingRequest.trip.unitPrice}
                  </td>
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
          <div className="booking-request-mobile-list">
            {bookingRequests.map((bookingRequest) => (
              <div
                key={bookingRequest.id}
                className="booking-request-trip-card"
              >
                <div
                  className="booking-request-card-section1"
                  style={{ lineHeight: "1.1" }}
                >
                  <p>Booking #</p>
                  <p>Trip #</p>
                  <p>Departure</p>
                  <p>Destination</p>
                  <p>Service Day</p>
                  <p>Depart Time</p>
                  <p>Requested Seats</p>
                  <p>Unit Price</p>
                  <p>Status</p>
                </div>
                <div
                  className="booking-request-card-section2"
                  style={{ lineHeight: "1.1" }}
                >
                  <p className="bold-font">{bookingRequest.id}</p>
                  <p className="bold-font">{bookingRequest.tripId}</p>
                  <p className="bold-font">{bookingRequest.trip.departure}</p>
                  <p className="bold-font">{bookingRequest.trip.destination}</p>
                  <p className="bold-font">{bookingRequest.trip.serviceDay}</p>
                  <p className="bold-font">
                    {bookingRequest.trip.departureTime.slice(0, 5)}
                  </p>
                  <p className="bold-font">{bookingRequest.requestedSeat}</p>
                  <p className="bold-font">{bookingRequest.trip.unitPrice} $</p>
                  <p className="bold-font">{bookingRequest.status}</p>
                  <div className="booking-request-card-section3">
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default BookingRequestList;
