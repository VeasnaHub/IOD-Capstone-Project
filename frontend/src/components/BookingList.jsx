import { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";
import useBookings from "../hooks/useBookings";
import { useNavigate } from "react-router-dom";

function BookingList() {
  const { currentUser } = useUserContext();
  const { bookings, message, fetchData } = useBookings(currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

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
        <table className="fixed-size-table booking-status-table">
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
                <td className="departure-time">{booking.trip.departureTime}</td>
                <td className="seats">{booking.requestedSeat}</td>
                <td className="unit-price">{booking.trip.unitPrice}</td>
                <td>{booking.status}</td>
                <td className="action-column-small">
                  <button className="yellow-button">Cancel Request</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default BookingList;
