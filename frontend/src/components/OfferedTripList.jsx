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
      {!offeredTrips || !Array.isArray(offeredTrips) ? (
        <div className="no-trip">
          <p className="body-item">
            You have not offered any trip yet! Go Green with WAKA, click to
            offer a trip now!{" "}
          </p>
          <img
            className="body-item"
            src="../src/assets/Homepage.jpg"
            style={{ width: "400px", height: "auto" }}
          />
        </div>
      ) : (
        <table className="fixed-size-table offered-trip-table">
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
                <td className="action-column">
                  <button className="green-button">Edit Trip</button>
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
      )}
    </div>
  );
}

export default OfferedTripList;
