import { Fragment } from "react";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function BookingList({ bookings }) {
  const { currentUser } = useUserContext();
  const navigate = useNavigate();

  const handleDelete = async (bookingId) => {
    try {
      await axios.delete(`/api/bookings/${bookingId}`, {
        headers: { "x-access-token": currentUser.token },
    });
  } catch (err) {
    console.error(err.message);
    }
  }

  return (
    <div className="BookingList in-body">
      {bookings.length === 0 ? (
        <div className="no-booking">
          <div className="body-item">
            <p>You have not request any booking yet!</p>
            <p>
              Make a booking now?{" "}
              <button
                className="green-button"
                onClick={() => navigate("/trips")}
              >
                CLICK HERE
              </button>
            </p>
          </div>
          <img
            className="body-item"
            src="../src/assets/Nobookingpage.jpg"
            style={{ width: "400px", height: "auto" }}
          />
        </div>
      ) : (
        <Fragment>
          <table className="fixed-size-table booking-status-table booking-status-desktop-table">
            <thead>
              <tr>
                <th>Booking #</th>
                <th className="trip">Trip #</th>
                <th>Departure</th>
                <th>Destination</th>
                <th className="service-day">Service Day</th>
                <th className="departure-time">Deaprt Time</th>
                <th className="seats">Requested Seats</th>
                <th className="unit-price">Unit Price</th>
                <th>Status</th>
                <th className="action-column-small">Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.id}</td>
                  <td className="trip">{booking.tripId}</td>
                  <td>{booking.trip.departure}</td>
                  <td>{booking.trip.destination}</td>
                  <td className="service-day">{booking.trip.serviceDay}</td>
                  <td className="departure-time">
                    {booking.trip.departureTime}
                  </td>
                  <td className="seats">{booking.requestedSeat}</td>
                  <td className="unit-price">{booking.trip.unitPrice}</td>
                  <td>{booking.status}</td>
                  <td className="action-column-small">
                    <button
                      className="yellow-button"
                      onClick={() => handleDelete(booking.id)}
                      >
                        Cancel Request</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="booking-status-mobile-list">
            {bookings.map((booking) => (
              <div key={booking.id} className="booking-status-trip-card">
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
                  <p className="bold-font">{booking.id}</p>
                  <p className="bold-font">{booking.tripId}</p>
                  <p className="bold-font">{booking.trip.departure}</p>
                  <p className="bold-font">{booking.trip.destination}</p>
                  <p className="bold-font">{booking.trip.serviceDay}</p>
                  <p className="bold-font">
                    {booking.trip.departureTime.slice(0, 5)}
                  </p>
                  <p className="bold-font">{booking.requestedSeat}</p>
                  <p className="bold-font">{booking.trip.unitPrice} $</p>
                  <p className="bold-font">{booking.status}</p>
                  <button
                    className="yellow-button"
                    onClick={() => handleDelete(booking.id)}
                  >
                    Cancel Request</button>
                </div>
              </div>
            ))}
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default BookingList;
