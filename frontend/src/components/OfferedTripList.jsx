import { Fragment } from "react";
import axios from "axios";
import { useUserContext } from "../context/UserContext";

function OfferedTripList({ offeredTrips }) {
  const { currentUser } = useUserContext();

  // Handle the deletion of an offered trip
  const handleDelete = async (tripId) => {
    try {
      await axios.delete(`/api/trips/${tripId}`, {
        headers: { "x-access-token": currentUser.token },
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="OfferedTripList in-body">
      {offeredTrips.length === 0 ? (
        <div className="no-trip">
          <p className="body-item">
            You have not offered any trip yet! Go Green with WAKA, click to
            offer a trip now!
          </p>
          <img
            className="body-item"
            src="../src/assets/Homepage.jpg"
            style={{ width: "400px", height: "auto" }}
          />
        </div>
      ) : (
        <Fragment>
          <table className="fixed-size-table offered-trip-table offered-trip-desktop-table">
            <thead>
              <tr>
                <th className="trip">Trip #</th>
                <th>Departure</th>
                <th>Destination</th>
                <th className="service-day">Service Day</th>
                <th className="departure-time">Time</th>
                <th className="seats">Offered Seats</th>
                <th className="unit-price">Unit Price</th>
                <th className="action-column">Action</th>
              </tr>
            </thead>
            <tbody>
              {offeredTrips.map((offeredTrip) => (
                <tr key={offeredTrip.id}>
                  <td className="trip">{offeredTrip.id}</td>
                  <td>{offeredTrip.departure}</td>
                  <td>{offeredTrip.destination}</td>
                  <td className="service-day">{offeredTrip.serviceDay}</td>
                  <td className="departure-time">
                    {offeredTrip.departureTime.slice(0, 5)}
                  </td>
                  <td className="seats">{offeredTrip.availableSeats}</td>
                  <td className="unit-price">{offeredTrip.unitPrice} $</td>
                  <td className="action-column-small">
                    <button
                      className="yellow-button"
                      onClick={() => handleDelete(offeredTrip.id)}
                    >
                      Delete Trip
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="offered-trip-mobile-list">
            {offeredTrips.map((offeredTrip) => (
              <div key={offeredTrip.id} className="offered-trip-card">
                <div
                  className="trip-card-section1"
                  style={{ lineHeight: "1.1" }}
                >
                  <p>Trip ID</p>
                  <p>Departure</p>
                  <p>Destination</p>
                  <p>Service Day</p>
                  <p>Depart Time</p>
                  <p>Price</p>
                  <p>Avail Seats</p>
                </div>
                <div
                  className="trip-card-section2"
                  style={{ lineHeight: "1.1" }}
                >
                  <p className="bold-font">{offeredTrip.id}</p>
                  <p className="bold-font">{offeredTrip.departure}</p>
                  <p className="bold-font">{offeredTrip.destination}</p>
                  <p className="bold-font">{offeredTrip.serviceDay}</p>
                  <p className="bold-font">
                    {offeredTrip.departureTime.slice(0, 5)}
                  </p>
                  <p className="bold-font">{offeredTrip.unitPrice} $</p>
                  <p className="bold-font">{offeredTrip.availableSeats}</p>
                  <button
                    className="yellow-button"
                    onClick={() => handleDelete(offeredTrip.id)}
                  >
                    Delete Trip
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default OfferedTripList;
